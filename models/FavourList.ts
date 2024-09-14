import mongoose, { ObjectId, Schema, model } from "mongoose";
import { OpportunityDocument } from "./Opportunity";
export interface FavourListDocument {
  _id: string;
  opportunity: OpportunityDocument;
  user:ObjectId;
  createdAt?: Date;
  updatedAt?: Date;
}
const FavourListShema = new Schema<FavourListDocument>(
  {
    opportunity: {
      type: Object,
      required: [true, "Opportunity'name is required!"],
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, "User is required"],
    }
  },
  { timestamps: true }
);
const FavourList =
  mongoose.models.FavourList ||
  model<FavourListDocument>("FavourList", FavourListShema);
export default FavourList;
