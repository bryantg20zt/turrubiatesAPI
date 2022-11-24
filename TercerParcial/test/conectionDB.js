import { createPool } from 'mysql2/promise';

export const pool = createPool ({
    user : 'root',
    password : '',
    database : 'ztstudios',
    port : '3306'
})