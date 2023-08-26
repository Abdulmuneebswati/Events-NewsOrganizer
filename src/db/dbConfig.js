import mongoose from "mongoose";

const uri = "mongodb+srv://root:roxen123@cluster0.zakqyav.mongodb.net/";

// Set up options
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'EventsAndNews',
};

mongoose.connect(uri, options)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch(err => {
    console.error("Error connecting to MongoDB:", err);
  });

export default mongoose ;
