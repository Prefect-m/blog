import { userService } from "../../user/service/user.service.js"
import PostModel from "../model/post.model.js"
import UserModel from "../../user/model/user.model.js"

class PostService {
  async create(postData, userId, fileName) {
    const { title, description } = postData

    if (fileName) {
      const postWithImage = new PostModel({
        title,
        description,
        imgUrl: fileName,
        author: userId,
      })

      await postWithImage.save()
      await UserModel.findByIdAndUpdate(userId, {
        $push: { posts: postWithImage },
      })

      return postWithImage
    }

    const postWithoutImage = new PostModel({
      title,
      description,
      imgUrl: "",
      author: userId,
    })
    await postWithoutImage.save()
    await UserModel.findByIdAndUpdate(userId, {
      $push: { posts: postWithoutImage },
    })
    return postWithoutImage
  }
  async update() {
    return { msg: "Hello post update" }
  }
  async delete() {
    return { msg: "Hello post delete" }
  }
  async getPosts() {
    return { msg: "Hello post getPosts" }
  }
  async getPost() {
    return { msg: "Hello post getPost" }
  }
}

export const postService = new PostService()
