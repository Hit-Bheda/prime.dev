import dotenv from "dotenv";

dotenv.config();

const config = {
  port: process.env.PORT || 4000,
  dbUri: process.env.DB_URI,
  secret: process.env.SECRET,
};

export default config;

