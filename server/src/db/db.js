import mongoose from 'mongoose'
import config from '../config/config.js'
const connnectDB = async () => {
    try {
        const conn = await mongoose.connect(`${config.dbUri}`)
        console.log(`MongoDB connected: ${conn.connection.host}`)
    } catch (err){
        console.error("Error While Connecting To MongoDB :",err)
        process.exit(1);
    }
}

export default connnectDB;