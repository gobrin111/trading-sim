import getDB from '../database.js';
import bcrypt from 'bcrypt';

export default class User {
    static async create(userData){
        // name, email, password

        const hash = await bcrypt.hash(userData.password, 12);

        const newInsert = {
            name: userData.name,
            email: userData.email,
            password: hash,
            auth_token: null
        }

        const db = getDB();
        return await db.collection('users').insertOne({
            ...userData
        });
    }
}