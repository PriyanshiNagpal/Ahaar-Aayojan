const mongoose = require("mongoose");                 //a library called mongoose

const connectDB = async() => {
	try
	{
		const db = process.env.MONGO_URI;
		await mongoose.connect(db);                  //if we will not use await then the
		console.log("MongoDB connected...");         //db will be connected before server could start
	}
	catch(err)
	{
		console.log(err);
		process.exit(1);
	}
}

module.exports = connectDB;