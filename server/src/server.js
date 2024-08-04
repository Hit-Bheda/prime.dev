import app from "./app.js";
import config from "./config/config.js";
import connnectDB from "./db/db.js";

const server = async () => {
    try {
        await connnectDB();

        app.listen(config.port,(err) => {
            if(err){
                console.error("Error While Listning :",err)
            } else{
                console.log(`Server is running on port ${config.port}`)
            }
        })
    } catch (err) {
        console.error("Error While Starting Server :",err)
    }
}

server()