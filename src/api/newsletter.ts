import instance from '../axios'
import { AxiosError } from 'axios'

export type JoinNewsletter = {
  message: string
  type: 'success' | 'error'
}

const newsletterApi = {
  join: async (email: string): Promise<JoinNewsletter | null> => {
    try {
      const response = await instance.post('/newsletter', { email })
      return {
        type: 'success',
        message: response.data.message
      }
    } catch (e) {
      if (e instanceof AxiosError && e.response) {
        return {
          type: 'error',
          message: e.response.data.message
        }
      }
      return null
    }
  }
}

export default newsletterApi
