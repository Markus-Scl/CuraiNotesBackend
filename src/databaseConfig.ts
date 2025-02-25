import { DataSource } from "typeorm";

const dataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST_URL || "localhost",
    port:  process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 5432,
    username: process.env.DB_USERNAME || "root",
    password: process.env.DB_PASSWORD || "1234",
    database: process.env.DB_NAME || "curaiNotes",
    synchronize: true, // Set to false in production
    logging: false,
    entities: ["src/entities/*.ts"],
    subscribers: [],
    migrations: [],
})

export default dataSource;