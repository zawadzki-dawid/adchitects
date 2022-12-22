import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://adchitects-cms.herokuapp.com/',
  auth: {
    username: process.env.NEXT_PUBLIC_API_LOGIN ?? '',
    password: process.env.NEXT_PUBLIC_API_PASSWORD ?? ''
  }
})

export default instance
