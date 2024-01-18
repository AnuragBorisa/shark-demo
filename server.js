const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use(cors({ origin: "http://localhost:3001" }));

const mongoURI =
  "mongodb+srv://sharkData:yRqG2vZIFeUJqXRZ@sharkdata.avbf3di.mongodb.net/?retryWrites=true&w=majority";

const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Connected to MongoDB");
  } catch (error) {
    console.error(error);
  }
};

const UserSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = mongoose.model("users", UserSchema);

app.post("/api/signup", async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  try {
    const newUser = new User({
      firstName,
      lastName,
      email,
      password,
    });

    await newUser.save();

    return res.json({ message: "User created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
  
});

connectToMongo();

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
