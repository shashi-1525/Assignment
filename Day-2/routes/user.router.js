import { createUser, deleteUser, getUser, updateUser } from '../controllers/user.controller.js';
import express from 'express';

const router = express.Router();

router.post('/', createUser);
router.put('/:email', updateUser);
router.delete('/:email', deleteUser);
router.get('/', getUser);

export {
    router
};