import express from 'express';
// import cors from 'cors';
import userRoutes from './routes/users.router.js';
import statusRoutes from './routes/status.router.js';

const app = express();

app.use(express.json());
// app.use(cors());
app.use(userRoutes);
app.use(statusRoutes);

export default app;
