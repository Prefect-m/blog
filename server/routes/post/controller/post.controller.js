import { postService } from "../service/post.service.js"

class PostController {
  async create(req, res) {
    // user
    const { id } = req.user
    // post
    const postData = req.body
    // post image
    const fileName = req.files[0].filename
    const post = await postService.create(postData, id, fileName)
    res.json(post)
  }
  async update(req, res) {
    const test = await postService.update()
    res.json(test)
  }
  async delete(req, res) {
    const test = await postService.delete()
    res.json(test)
  }
  async getPosts(req, res) {
    const test = await postService.getPosts()
    res.json(test)
  }
  async getPost(req, res) {
    const test = await postService.getPost()
    res.json(test)
  }
}

export const postController = new PostController()
