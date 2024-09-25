import { config as dotenvConfig } from "https://deno.land/x/dotenv@v3.2.2/mod.ts";
import { configType } from "../types/types.ts";

const cf = dotenvConfig();

const config: configType = {
  port: Number(cf.PORT) || 4000,
  dbUri: cf.DB_URI || '',
  secret: cf.SECRET || '',
};

console.log(config);
export default config;

