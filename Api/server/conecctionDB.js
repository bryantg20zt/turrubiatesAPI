import { createPool } from 'mysql2/promise';

export const pool = createPool ({
    user : 'root',
    password : '',
    database : 'racingui',
    port : '3306'
})