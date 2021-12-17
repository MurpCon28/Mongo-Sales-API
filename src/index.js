import dotenv from 'dotenv';
import { MongoClient } from "mongodb";

import app from "./server.js";
import salesDAO from "./dao/sales.dao.js";
import UsersDAO from "./dao/users.dao.js";

dotenv.config();

const port = process.env.PORT;
const dbUri = process.env.DB_URI;
const client = new MongoClient(dbUri);

try {
    await client.connect();
    await salesDAO.injectDB(client);
    await UsersDAO.injectDB(client);
    app.listen(port, () => {
        console.log(`listening on port ${port}`)
    });
}
catch(err) {
    console.error(err.stack);
    process.exit(1);
}