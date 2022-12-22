import instance from '../axios'

export type Page = {
  id: string
  url: string
}

const pagesApi = {
  fetch: async (): Promise<Page[]> => {
    const response = await instance.get<Page[]>('/pages')
    return response.data
  }
}

export default pagesApi
