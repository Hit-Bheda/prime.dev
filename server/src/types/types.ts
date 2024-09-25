import { Request, Response } from "npm:@types/express";
export interface configType {
    port: number,
    dbUri: string,
    secret: string
}

export interface Handler {
    (req: Response, res: Request): Promise<unknown>
}