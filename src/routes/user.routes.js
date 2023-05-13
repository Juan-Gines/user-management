import { Router } from "express";

const userRouter = Router();

userRouter
  .post('/register')
  .post('/login')
  .get('/profile')
  .patch('/update-data')
  .patch('/update-email')
  .patch('/update-password')
  .delete('/unregister')

export default userRouter;
