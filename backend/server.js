import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'; // Keep this import
import connectDB from './src/config/db.js';
import authRoutes from './src/routes/authRoutes.js';
import campaignRoutes from './src/routes/campaignRoutes.js';
import ngoRoutes from './src/routes/ngoRoutes.js';

dotenv.config();
connectDB();

const app = express();

// This line allows requests from ANY origin (*)
app.use(cors()); 

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/campaigns', campaignRoutes);
app.use('/api/ngos', ngoRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));