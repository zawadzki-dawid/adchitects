import instance from '../axios'

type Newsletter = {
  type: 'newsletter'
}

type Hero = {
  img: string
  type: 'hero'
  text: string
}

type Testimonial = {
  text: string
  author: string
  type: 'testimonial'
}

export type PageData = {
  id: string
  sections: Array<Hero | Newsletter | Testimonial>
}

const pageApi = {
  fetch: async (id: string): Promise<PageData> => {
    const response = await instance.get<PageData>(`/page/${id}`)
    return response.data
  }
}

export default pageApi
