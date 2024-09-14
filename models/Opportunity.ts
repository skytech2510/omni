import mongoose, { ObjectId, Schema, model } from "mongoose";
export interface OpportunityDocument {
  favourite: boolean;
  _id: string;
  title: string;
  published?: string;
  updated?: string;
  socialLinks?: Array<{
    title: string;
    href: string;
  }>;
  info: string;
  supportFiles?:Array<{
    url:string;
    filename:string;
    type:string;
  }>;
  status:string;
  createdAt?: Date;
  updatedAt?: Date;
}
const OpportunitySchema = new Schema<OpportunityDocument>(
  {
    title: {
      type: String,
      required: [true, "Opportunity'name is required!"],
    },
    published: {
      type: String,
      required: [true, "Published is required"],
    },
    updated: {
      type: String,
      required: [true, "Updated is required"],
    },
    status: {
      type: String,
      enum: ["visible", "hidden"],
      default: "visible",
    },
  },
  { timestamps: true }
);
const Opportunity =
  mongoose.models.Opportunity ||
  model<OpportunityDocument>("Opportunity", OpportunitySchema);
export default Opportunity;
