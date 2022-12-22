import path from 'path'
import { promises as fs } from 'fs'

const cache = {
  get: async <Type extends unknown>(fileName: string): Promise<Type | null> => {
    try {
      const data = await fs.readFile(path.join(process.cwd(), fileName))
      return JSON.parse(data.toString()) as Type
    } catch {
      return null
    }
  },
  set: async (fileName: string, data: string) => {
    return fs.writeFile(path.join(process.cwd(), fileName), data)
  }
}

export default cache
