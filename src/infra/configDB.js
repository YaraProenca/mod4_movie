import sqlite3 from 'sqlite3'
import { open } from 'sqlite'


export async function openDb() {
    let dbOpen = await open({
        filename: './database.db',
        driver: sqlite3.Database
    })
    return dbOpen
}