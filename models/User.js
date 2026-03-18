const mongoose = require('mongoose');

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    comparePasswords:{
        type:String,
        // required:true
    },
    likedSongs:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Song'
    }],
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'         
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

userSchema.methods.comparePassword = async function(candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

module.exports=mongoose.model('User',userSchema);