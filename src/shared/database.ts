import mysql from "mysql";

const db = mysql.createConnection(
    {
        host: "localhost",
        user: "muyi",
        password: "fedgac11451",
        database: "todo",
    },
);

export default db;
