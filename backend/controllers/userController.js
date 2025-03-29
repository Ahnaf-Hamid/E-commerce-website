import userModel from "../models/userModel.js";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

// function for user login
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email });

    //check if user exists or not
    if (!user) {
      return res.json({ success: false, msg: "User does not exist" });
    }

    // check if password match
    const isMatch = await bcrypt.compare(password, user.password);

    if (isMatch) {
      const token = createToken(user._id);
      res.json({ success: true, token });
    } else {
      res.json({ success: false, msg: "Passwords dont match" });
    }
  } catch (err) {
    console.log(err);
    res.json({ success: false, msg: err.message });
  }
};

// function for user register
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    //check if user exists or not
    const exists = await userModel.findOne({ email });
    if (exists) {
      return res.json({ success: false, msg: "User already exist" });
    }

    // validating email and strong password
    if (!validator.isEmail(email)) {
      return res.json({ success: false, msg: "Please enter a valid email" });
    }
    if (password.length < 8) {
      return res.json({
        success: false,
        msg: "Please enter a strong password",
      });
    }

    // hashing user password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // creating a user
    const newUser = new userModel({ name, email, password: hashedPassword });
    const user = await newUser.save();

    const token = createToken(user._id);

    res.json({ success: true, token });
  } catch (err) {
    console.log(err);
    res.json({ success: false, msg: err.message });
  }
};

// function for admin login
const adminLogin = async (req, res) => {
  try {
    const {email,password} = req.body

    if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){
      const token = jwt.sign(email+password,process.env.JWT_SECRET)
      res.json({success:true,token})
    } else {
      res.json({success:false,msg:'Invalid Credentials'})
    }
 
  } catch (err) {
    console.log(err);
    res.json({ success: false, msg: err.message });
  }
};

export { loginUser, registerUser, adminLogin };
