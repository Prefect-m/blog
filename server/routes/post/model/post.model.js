import { model, Schema } from "mongoose"

const PostSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    imgUrl: {
      type: String,
      default: "",
    },
    views: [
      {
        type: Number,
        default: 0,
      },
    ],
    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    comments: {
      type: Schema.Types.ObjectId,
      ref: "Comment",
    },
  },
  { timestamps: true }
)
export default model("Post", PostSchema)
