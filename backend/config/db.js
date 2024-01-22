import mongoose from "mongoose";

const connectDB = async() => {

  try{
    const conn = await mongoose.connect(process.env.MONGO_URI
    //   , {
    //   useUnifiedTopology: true,
    //   useNewUrlParser: true
    // }
    )
    console.log(`MongoDB is connected: ${conn.connection.host}`)
  } catch(error){
    console.error(`Error: ${error.message}`)   //error prop msg
    process.exit(1)     //exit app in standarized way
  }
}


export default connectDB

//(node:10008) [MONGODB DRIVER] Warning: useNewUrlParser is a deprecated option: useNewUrlParser has no effect since Node.js Driver version 4.0.0 and will be removed in the next major version
// (Use `node --trace-warnings ...` to show where the warning was created)
// (node:10008) [MONGODB DRIVER] Warning: useUnifiedTopology is a deprecated option: useUnifiedTopology has no effect since Node.js Driver version 4.0.0 and will be removed in the next major version