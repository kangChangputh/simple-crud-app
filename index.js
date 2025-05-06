import 'dotenv/config'
import express from 'express';
import path from 'path'
import { fileURLToPath } from 'url'
import mongoose from 'mongoose';
import router from './routes/product.route.js'

const port = process.env.PORT;

//get the directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

//setup static folder
app.use(express.static(path.join(__dirname, 'public')));

//Connect to database and server
mongoose.connect('mongodb+srv://phumphaschaya:CnNKROWc4PfIfWuW@backenddb.6sfm25g.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB')
    .then(() => {
        console.log('Connected to  database!');
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    })
    .catch(() => {
        console.log("Connection failed!");
    })

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Logger middle ware
//TODO

// Routes
app.use('/api/products', router)

// Error handler
//TODO


