import express from 'express';
const router = express.Router();
import userCtrl from '../controllers/userCtrl.js';




router.post('/register', userCtrl.register)

router.post('/login', userCtrl.login)

router.get('/infor/:id',userCtrl.getUserInfor)

router.get('/allprof',userCtrl.allusers)

router.post('/reset/:id', userCtrl.resetPassword)

router.get('/logout', userCtrl.logout)

export default router;