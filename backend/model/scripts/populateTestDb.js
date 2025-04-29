import pg from 'pg';
import fs from 'fs';
import dotenv from 'dotenv';
dotenv.config();

const main = async () => {
    const client = new pg.Client({ connectionString: process.env.TEST_DATABASE_URL });
    try {
        console.log('seeding...');
        const sql = fs.readFileSync('./model/scripts/data.sql', {encoding: 'utf8'}, (error) => console.log(error));
        await client.connect();
        await client.query(sql);
        console.log('done');
    } catch (error) {
        console.log(error);
    } finally {
        await client.end();
    }
};

main();