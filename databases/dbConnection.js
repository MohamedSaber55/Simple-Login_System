import mongoose from 'mongoose';


const dbConnection = async () => {
    mongoose.set('strictQuery', true);
    return await mongoose.connect(`${process.env.DB_LINK}`).then((result) => {
        console.log("dataBase Connected successfully");
    }).catch((error) => {
        console.log("Failed to connect to MongoDB", error);
    })
}


export default dbConnection