const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

const connectToMongoose = async () => {
  try {
    const db = await mongoose.connect(process.env.MONGO_UR || "mongodb+srv://admin:md1-yolin@farocluster.sjtih9q.mongodb.net/?retryWrites=true&w=majority&appName=FaroCluster", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`Connected to Mongoose Through ${db.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = {
  connectToMongoose,
};
