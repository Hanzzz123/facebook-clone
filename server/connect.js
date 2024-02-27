import mysql from "mysql"

export const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Burbank1!",
    database:"facebook"
})