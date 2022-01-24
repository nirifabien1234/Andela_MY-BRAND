import mongoose from 'mongoose'
const {Schema, model} = mongoose
import { genSalt, hash, compare } from 'bcrypt'

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

//fire this signal before a user is saved to the database
UserSchema.pre('save', async function(next) {
  const salt = await genSalt();
  this.password = await hash(this.password, salt);
  next();
})

//Static method to login user
UserSchema.statics.login = async function(email, password){
  const user = await this.findOne({email});
  if(user){
      const auth = await compare(password, user.password);
      if(auth){
          return user;
      }throw Error('Incorect password');

  }throw Error('Incorrect email');
}

const User = model("User", UserSchema);
export default User