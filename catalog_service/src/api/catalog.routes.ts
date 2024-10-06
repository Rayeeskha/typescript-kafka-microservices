import express, { NextFunction, Request, Response } from "express";

const router = express.Router();

// Endpoint for product creation
router.post('/product', async(req: Request, res: Response, next: NextFunction) => {
    res.status(201).json({});
});

export default router;