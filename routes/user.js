import express from 'express';
import {createUser,getUser,getAllUsers,updateUser,deleteUser} from '../controller/user-controller.js';
const router = express.Router();


router.get('', getAllUsers);
router.get('/:id', getUser); 
router.post('/', createUser);
router.patch('/:id', updateUser);
router.delete('/:id', deleteUser);


export default router;