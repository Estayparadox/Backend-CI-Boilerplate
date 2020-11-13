import express from 'express';

const indexRouter = express.Router();

indexRouter.get('/', (req, res) => res.status(200).json({ message: 'Tavernier API is running' }));

export default indexRouter;
