import mongoose from "mongoose";
import bcrypt from "bcrypt"

interface IUser extends Document {
  name: string,
  email: string,
  password: string,
  likedAlbums: { [key: number]: { title: string; img: string } },
  likedArtists: { [key: number]: { name: string; img: string } },
  matchPassword(enteredPassword: string): Promise<boolean>;
}

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
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
        likedAlbums: {
            type: Object,
            default: {} 
        },
        likedArtists: {
            type: Object,
            default: {} 
        },
    },
    {
        timestamps: true,
    }
);
// Match user entered password to hashed password in database
userSchema.methods.matchPassword = async function (enteredPassword: any) {
  return await bcrypt.compare(enteredPassword, this.password);
};


userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next();
    } 

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt)
})

const User = mongoose.model<IUser>('User', userSchema)

export default User;
