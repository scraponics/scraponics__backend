import express from 'express';

const router = express.Router();

router.get('/', async(req, res) => {
    res.send("Hellow Laditya");
})

export default router