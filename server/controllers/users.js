
import jwt from 'jsonwebtoken';
import {compare} from 'bcrypt';
import User from '../models/userModel.js'


 export default {
  create,
  login
};

async function create(req, res, next) {
  try {

    console.log(`Creating user : ${JSON.stringify(req.body)}`)
    const user = await User.create(req.body);
    console.log(`Created user : ${JSON.stringify(user)}`)

    if(user){
      const token = createJWT(user);
      res.json(token)
      next();
    }else{
      throw new Error('Could not find the user, please Sign Up.')
    }
 
  } catch (err) {
    console.log(err)
    res.status(400).json({err});
  }
};

async function login(req, res) {
  try {
    const user = await User.findOne({email: req.body.email});
    if (!user) throw new Error();

    const match = await compare(req.body.password, user.password);
    if (!match) throw new Error();
    res.json( createJWT(user) );
  } 
  catch {
    res.status(400).json("Bad Credentials");
  }
};


function createJWT(user) {
  return jwt.sign(
    { user },
    process.env.SECRET,
    { expiresIn: "24h" }
  );
};