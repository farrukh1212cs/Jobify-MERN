import express from 'express';

const app = express();

import dotenv from 'dotenv'
dotenv.config();

//db and authenticateUser
import connectDB from './db/connect.js'

//routers
import authRoutes from './routes/authRoutes.js'
import jobRoutes from './routes/jobRoutes.js'
//middleware
import notFoundMiddleware from './middleware/not-found.js';
import errorHandlerMiddleware from './middleware/error-handler.js';

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Welcome!');
});

app.use('/api/v1/auth',authRoutes)
app.use('/api/v1/jobs',jobRoutes)


app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)
const port = process.env.PORT || 2000;




const start = async () =>{
  try {
    await connectDB(process.env.MONGO_URL)
    app.listen(port, () => console.log(`Server is listening on port ${port}...`)); 
  }catch(error){
    console.log(error)
  }
}
start()