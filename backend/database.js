import {MongoClient} from 'mongodb';

let db;

let connectDB;
export default connectDB = async () => {
    try {
        const client = new MongoClient('mongodb://mongo:27017/trading-sim');
        await client.connect();

        db = client.db('trading-sim'); // Your database name
        console.log("Ping Test");
        await client.db('admin').command({ping:1})
        console.log('MongoDB Connected');

        return db;
    } catch (error) {
        console.error('Database connection failed:', error.message);
    }
};

const getDB = () => {
    if (!db) {
        throw new Error('Database not connected');
    }
    return db;
};
