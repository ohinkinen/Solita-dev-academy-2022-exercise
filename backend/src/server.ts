import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 4200;

app.get('/', (req: Request, res: Response) => {
    res.send(`This is Express backend running on port ${port}`);
});

app.listen(port, () => {
    console.log(`[server]: Application is listening to the port ${port} and running at http://localhost:${port}`);
});