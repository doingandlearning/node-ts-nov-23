import mongoose, { Schema, Document } from "mongoose";

interface IUser extends Document {
  name: string;
  location: string;
  role?: string;
}

const UserSchema: Schema = new Schema({
  name: { type: String, required: true, unique: true },
  location: { type: String, required: true },
  role: String,
});

const UserModel = mongoose.model<IUser>("User", UserSchema);

export default UserModel;
