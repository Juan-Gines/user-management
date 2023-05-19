import userLoginController from "#Controllers/user-login.controller.js";
import userProfileController from "#Controllers/user-profile.controller.js";
import userRegisterController from "#Controllers/user-register.controller.js";
import userUnregisterController from "#Controllers/user-unregister.controller.js";
import userUpdateDataController from "#Controllers/user-update-data.controller.js";
import userUpdateEmailController from "#Controllers/user-update-email.controller.js";
import userUpdatePasswordController from "#Controllers/user-update-password.controller.js";
import userJWTDTO from "#Dto//user-jwt.dto.js";
import userLoginDTO from "#Dto//user-login.dto.js";
import userUnregisterDTO from "#Dto//user-unregister.dto.js";
import userUpdateDataDTO from "#Dto//user-update-data.dto.js";
import userUpdateEmailDTO from "#Dto//user-update-email.js";
import userUpdatePasswordDTO from "#Dto//user-update-password.dto.js";
import userRegisterDTO from "#Dto/user-register.dto.js";
import { Router } from "express";

const userRouter = Router();

userRouter
  .post('/register', userRegisterDTO, userRegisterController)
  .post('/login', userLoginDTO, userLoginController)
  .get('/profile', userJWTDTO, userProfileController)
  .patch('/update-data', userJWTDTO, userUpdateDataDTO, userUpdateDataController)
  .patch('/update-email', userJWTDTO, userUpdateEmailDTO, userUpdateEmailController)
  .patch('/update-password', userJWTDTO, userUpdatePasswordDTO, userUpdatePasswordController)
  .delete('/unregister', userJWTDTO, userUnregisterDTO, userUnregisterController);

export default userRouter;
