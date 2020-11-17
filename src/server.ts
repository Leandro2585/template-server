import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import routes from './routes';
import AppError from './errors/AppError';
import 'express-async-errors';

const app = express();

app.use(cors());

app.use(express.json());

app.use(routes);

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  err instanceof AppError
    ? response
        .status(err.status)
        .json({ status: 'error', message: err.message })
    : console.error(err);
  return response.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
});

app.listen(process.env.APP_API_URL || 3333, () => {
  console.log('🚀 Server started at http://localhost:3333');
});
