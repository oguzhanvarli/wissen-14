import axios from "axios"

export const baseService = {
  get: async(url) => {
    try {
      let response = await axios.get(url)
      return response.data
    } catch (error) {
      console.log(url, 'Get Error')
    }
  },
  post: async(url, data) => {
    try {
      let response = await axios.post(url, data)
      return response
    } catch (error) {
      console.log(url, "Post Error")
    }
  }
}