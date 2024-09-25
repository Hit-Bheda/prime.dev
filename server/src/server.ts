import app from "./app.ts";
import config from "./config/config.ts";
import connnectDB from "./db/db.ts";

const server = async () => {
    try {
        await connnectDB();

        app.listen(config.port,(err: Error) => {
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