const bcrypt  = require('bcryptjs');

const User = require('../../models/User');

const jwt = require('jsonwebtoken');

const createUser=async(req,res)=>{
    try{
        const {username,email,password}=req.body
        const hashedPassword=await bcrypt.hash(password,10);
        const user = await User.create({ username, email, password:hashedPassword});
        // user.password=undefined;
        res.status(201).json({data:user})
    }catch(error){
        res.status(500).json({ message: error.message });
    }
}

const loginUser=async(req,res)=>{
    try {
        const {email,password}=req.body;

        const user=await User.findOne({email});

        if(!user){
            return res.status(401).json({success:false,message:'Invalid email or password'});
        }

        const isMatch=await bcrypt.compare(password,user.password);


        if(!isMatch){
            return res.status(401).json({success:false,message: 'Invalid email or password'})
        }

        const payload={
            id: user._id,
            username:user.username,
            role:user.role
        };

        const token = jwt.sign(payload,process.env.JWT_SECRET,{
            expiresIn:'1d'
        });
        console.log(token)
        res.status(200).json({
      success: true,
      data: {
        token: token,
        user: {
          id: user._id,
          username: user.username,
          role: user.role
        }
      }
    });
    } catch (error) {
        res.status(500).json({success:false,message:'Login failed',error:error.message});
    }
}


const getUser = async (req, res) => {
  try {
    const data = await User.find({});
    res.status(200).json({ success: true, data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
module.exports={loginUser,createUser,getUser}