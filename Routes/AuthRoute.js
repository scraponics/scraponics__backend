// import express from 'express';

// const router = express.Router();

// router.get('/', async(req, res) => {
//     res.send("Hellow Laditya");
// })

// export default router

import express from 'express';
import { registerUser } from '../Controllers/AuthController.js';

const router = express.Router();

router.post('/register', registerUser);
export default router;