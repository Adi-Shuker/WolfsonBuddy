//import and initialize neccesary modules and routes, listen for connections.
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import authRoutes from './routes/auth.routes.js';
import userRoutes from './routes/user.routes.js';

const PORT = 3001;
const app = express();


app.use(express.json());
app.use(cors());
dotenv.config();

authRoutes(app);
userRoutes(app);

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});