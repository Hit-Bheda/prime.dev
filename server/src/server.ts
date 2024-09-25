import app from "./app.ts";
import config from "./config/config.ts";
import connnectDB from "./db/db.ts";
import { errorLogger, infoLogger } from "./loggers/logger.ts";

const server = async () => {
    try {
        await connnectDB();

        app.listen(config.port,(err: Error) => {
            if(err){
                errorLogger.error("Error While Listning :",err)
            } else{
                infoLogger.info(`Server is running on port ${config.port}`)
            }
        })
    } catch (err) {
        errorLogger.error("Error While Starting Server :",err)
    }
}

server()