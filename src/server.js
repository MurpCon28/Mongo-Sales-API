import express from 'express';
import cors from 'cors';

import salesRouter from './routes/sales.js';
import usersRouter from './routes/users.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/sales', salesRouter);
app.use('/users', usersRouter);

export default app;