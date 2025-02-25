import express from "express";
import dataSource from "./databaseConfig";
import {createServer} from 'http';
import cors from 'cors';

const app = express();
const httpServer = createServer(app);
const port = 3000;

dataSource.initialize()
    .then(async () => {
        console.log("Database connected");
    })
    .catch((error) => console.log("Database connection error:", error));


app.use(express.json());

app.use(
	cors({
		credentials: true,
		origin: ['http://localhost:3000', 'http://localhost:3001'],
		allowedHeaders: ['Content-Type', 'accesstoken', 'refreshtoken'], // Allowed headers that can be sent by the client
		exposedHeaders: ['newaccesstoken'], // Allowed headers that can be accessed by the client
	})
);

httpServer.listen(port, () => {
	console.log('Server running on port', port);
});