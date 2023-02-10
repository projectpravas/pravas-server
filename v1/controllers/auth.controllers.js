const UserModel = require("../modules/user.model");
const { encrypt, compare } = require("../helpers/encryption");
const { generateToken, verifyToken } = require("../helpers/token");
const { userFilter } = require("../helpers/user-utilities");
const sendEmail = require("../helpers/nodeMailer");
const _ = require("lodash");

class AuthCtrl {
  static userLogin(req, res) {
    const { email, password } = req.body;

    UserModel.findOne({ email: email })
      .then((response) => {
        if (!response?._id) {
          res.status(404).send({ error: null, message: "No user Found..." });
        } else if (response?.status != "active") {
          res.status(500).send({ error: null, message: "User is Inactive..." });
        } else if (compare(password, response?.password)) {
          //generate and send token

          const payload = {
            role: response?.role,
            id: response?._id,
            email: response?.email,
            userActivityDetails: response?.userActivityDetails,
          };

          const accessToken = generateToken(payload, 15 * 60);
          const refreshToken = generateToken(payload, 30 * 60);
          res.set("x-accessToken", accessToken);
          res.set("x-refreshToken", refreshToken);
          res.status(200).send({
            data: userFilter(response),
            message: "Login Successful...",
          });
        } else {
          res
            .status(500)
            .send({ error: null, message: "Incorrect Password.." });
        }
      })
      .catch((err) => {
        console.error(err);
        res.status(404).send({ error: err, message: "Login Failed..." });
      });
  }

  static async validateAccessToken(req, res) {
    const token = req?.headers?.authorization
      ? req?.headers?.authorization
      : req?.body?.token;

    // console.log("accesToken: ", token);

    const payload = token && verifyToken(token);

    if (payload?.id) {
      try {
        const tokenDetails = await UserModel.findOne({ _id: payload?.id });

        const userActivityDetailsT = tokenDetails?.userActivityDetails;

        if (userActivityDetailsT) {
          res.status(200).send({
            message: "Token is valid",
            data: {
              id: payload?.id,
              userActivityDetails: userActivityDetailsT,
            },
          });
        } else {
          throw new Error("Server Error... Try Again");
        }
      } catch (e) {
        res.status(500).send({ message: "Server error..", error: null });
      }
    } else {
      if (payload == undefined) {
        res.status(408).send({ message: "Token Expired..", error: null });
      } else {
        res.status(403).send({ message: "Token is not valid..", error: null });
      }
    }
  }

  static sendPasswordResetLink(req, res) {
    const { email } = req.body;

    let sentEmailTimeStamp;
    let sentLinkTimeStamp;

    UserModel.findOne({ email: email })
      .then((result) => {
        if (!result) throw new Error("Invalid Email");

        sentLinkTimeStamp = Date.now();
        sentEmailTimeStamp = result?.userActivityDetails?.sentEmailTimeStamp;

        if (sentEmailTimeStamp + 10 * 60 * 1000 > sentLinkTimeStamp) {
          throw new Error("Link has been Sent to your Email Address...");
        }

        //create token
        const token = generateToken(
          {
            id: result?._id,
            role: result?.role,
            userActivityDetails: {
              ...result?.userActivityDetails,
              sentEmailTimeStamp: sentLinkTimeStamp,
            },
            email,
          },
          10 * 60
        );

        // create link
        const link = `${req?.headers?.origin}/reset-password/${token}`;

        //send link throw mail

        const textBody = `To change the password copy the link below and paste it in Url bar 
        ${link} 
        This link will expire in 10 minutes...`;

        const htmlBody = `<p>To change the password just click on link below</p>
        <br/>
        <a href="${link}" target="child" > click here </a> 
        <p>This link will expire in 10 minutes...</p>`;

        const setSentEmailTime = async () => {
          await UserModel.findOneAndUpdate(
            { _id: result?._id },
            {
              $set: {
                "userActivityDetails.sentEmailTimeStamp": sentLinkTimeStamp,
              },
            },
            { new: true }
          );
        };

        sendEmail(
          email,
          "projectpravas@gmail.com",
          "Password reset link",
          textBody,
          htmlBody
        )
          .then((resolve) => {
            try {
              //set SentEmailTime
              setSentEmailTime();

              res.status(200).send({
                message: `Email sent to ${email}`,
                data: null,
              });
            } catch (e) {
              throw new Error("Try Again...");
            }
          })
          .catch((err) => {
            res
              .status(404)
              .send({ message: "Email couldn't send..", error: err });
          });
      })
      .catch((err) => {
        console.error(err);

        let msg;
        if (sentEmailTimeStamp + 10 * 60 * 1000 > sentLinkTimeStamp) {
          msg = `Link has been Sent to your Email Address...
          You can send mail after ${Math.round(
            (sentEmailTimeStamp + 10 * 60 * 1000 - Date.now()) / (1000 * 60)
          )} minute/s..`;
        } else {
          msg = "Invalid email address";
        }

        res.status(404).send({ message: msg, error: err });
      });
  }

  static async resetPassword(req, res) {
    const { password, newPassword, token, passwordTimeStamp } = req.body;

    const payload = token && verifyToken(token);

    if (payload?.id) {
      const newEncyptedPassword = encrypt(newPassword);

      const filter = {};
      if (Number(payload.id).toString() == "NaN") {
        filter._id = payload?.id;
      } else {
        filter.userId = Number(payload?.id);
      }

      const checkTime = await UserModel.findOne(filter);
      const dbPassTimeStamp = checkTime?.userActivityDetails?.passwordTimeStamp;
      const sentEmailTimeStamp =
        checkTime?.userActivityDetails?.sentEmailTimeStamp;

      const errorHandler = (status, message, error) => {
        res.status(status).send({ message: message, error: error });
      };

      const messageType = {};
      if (!password) {
        messageType.type = "Reset";
      } else {
        messageType.type = "Changed";
      }

      const dbResetPassword = () => {
        UserModel.findOneAndUpdate(
          filter,
          {
            $set: {
              password: newEncyptedPassword,
              "userActivityDetails.passwordTimeStamp": Date.now(),
            },
          },
          { new: true }
        )
          .then((result) => {
            res.status(200).send({
              message: `Your password has been successfully ${messageType?.type}!!`,
              data: null,
            });
          })
          .catch((err) => {
            console.error(err);
            res.status(500).send({
              message: `Password couldn't ${messageType?.type}..`,
              error: null,
            });
          });
      };

      try {
        // if (dbPassTimeStamp + 10 * 60 * 1000 > passwordTimeStamp) {
        if (!password) {
          if (dbPassTimeStamp > sentEmailTimeStamp) {
            throw new Error(`You Already have ${messageType?.type} Password!!`);
          }
        }

        if (
          checkTime &&
          compare(!password ? newPassword : password, checkTime?.password)
        ) {
          if (!password) {
            throw new Error(`Try Strong Password...`);
          } else {
            //-- Change Password
            // call dbResetPassword
            dbResetPassword();
          }
        } else {
          if (!password) {
            dbResetPassword();
          } else {
            //--reset password
            // call dbResetPassword
            throw new Error("Incorect Password...");
          }
        }
      } catch (e) {
        if (e?.message == "Incorect Password...") {
          errorHandler(500, "Enter Correct Old Password", null);
          return;
        }

        // const minTime = dbPassTimeStamp < sentEmailTimeStamp + 10 * 60 * 1000;
        if (dbPassTimeStamp > sentEmailTimeStamp) {
          errorHandler(
            500,
            `You Already have ${messageType?.type} Password!! try again after ${
              (sentEmailTimeStamp + 10 * 60 * 1000 - passwordTimeStamp) /
                (1000 * 60) <
              1
                ? 1
                : Math.round(
                    (sentEmailTimeStamp + 10 * 60 * 1000 - passwordTimeStamp) /
                      (1000 * 60)
                  )
            } minute/s..`,
            null
          );
        } else if (
          checkTime &&
          compare(!password ? newPassword : password, checkTime?.password)
        ) {
          if (!password) errorHandler(500, "Try Strong Password", null);
        } else {
          if (password) errorHandler(404, "Incorrect Password", null);
        }
      }
    } else {
      res.status(403).send({ message: "Session Expired...", error: null });
    }
  }

  static refreshToken(req, res) {
    const { rToken } = req.body;

    const payload = rToken && verifyToken(rToken);

    if (payload?.id) {
      const newPayload = _.pick(payload, [
        "id",
        "role",
        "email",
        "userActivityDetails",
      ]);

      //generate and send token
      const accessToken = generateToken(newPayload, 15 * 60);
      const refreshToken = generateToken(newPayload, 30 * 60);
      res.set("x-accessToken", accessToken);
      res.set("x-refreshToken", refreshToken);
      res.status(200).send({
        message: "Tokens generated",
        data: { accessToken, refreshToken },
      });
    } else {
      res.status(403).send({ message: "Invalid Token", error: null });
    }
  }
}

module.exports = AuthCtrl;
