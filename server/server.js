import express from 'express';
const app = express();

// app.get('/', (req,res) => {
//     res.send("test");
// })

// const port = 3000;

// app.listen(port, () => {
//     console.log(`server listening on port: ${port}`);
// } )import express from 'express'
import dotenv from 'dotenv'
dotenv.config()



// hello
// db and authenticateUser
import connectDB from './db/connect.js'
import productRouter from './routes/productRoute.js'

app.use(express.json())

app.use('/api/v1/product', productRouter);

const port = process.env.PORT

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL)
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`)
    })
  } catch (error) {
    console.log(error)
  }
}

start()

