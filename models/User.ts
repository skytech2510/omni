import mongoose, { Schema, model, Document, ObjectId } from "mongoose";
import bcrypt from "bcryptjs";
export interface UserDocument extends Document {
  _id: ObjectId;
  gender: string;
  humanrace: string;
  fullname: string;
  company: string;
  birthday: Date;
  email: string;
  location:string;
  instagram:string;
  password: string;
  phone: string;
  creditCard: string;
  expireDate: string;
  securityCode: string;
  country: string;
  zipCode: string;
  avatar: string;
  coverImg: string;
  createdAt: Date;
  updatedAt: Date;
}
const UserSchema = new Schema<UserDocument>(
  {
    email: {
      type: String,
      unique: true,
      required: [true, "Email is required"],
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Email is invalid",
      ],
    },
    gender:{
      type: String,
      required: [true, "gender is required"],
    },
    humanrace:{
      type: String,
    },
    company:{
      type: String,
    },
    birthday:{
      type: Date,
      required: [true, "birthday is required"],
    },
    password: {
      type: String,
      required: [true, "password is required"],
    },
    fullname: {
      type: String,
      required: [true, "fullName is required"],
    },
    location:{
      type: String,
      required: [true, "location is required"],
    },
    instagram:{
      type: String,
    },
    phone: {
      type: String,
      required: [true, "phone is required"],
    },
    creditCard: {
      type: String,
      required: [true, "creditCard is required"],
    },
    expireDate: {
      type: String,
      required: [true, "expireDate is required"],
    },
    securityCode: {
      type: String,
      required: [true, "securityCode is required"],
    },
    country: {
      type: String,
      required: [true, "country is required"],
    },
    zipCode: {
      type: String,
    }
  },
  {
    timestamps: true,
  }
);
UserSchema.methods.comparePassword = async function (password: string) {
  return await bcrypt.compare(password, this.password);
};
UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});
const User = mongoose.models.User || model<UserDocument>("User", UserSchema);
export default User;
