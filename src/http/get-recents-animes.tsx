interface RecentsAnimesProps {
  id: number
  imageUrl: string
  category: string
  title: string
  resume: string
  date: string
  content: string
  star: number
  new: 'yes' | 'no'
}

export async function getRecentsAnimes(): Promise<RecentsAnimesProps[]> {
  const response = await fetch(
    'https://my-json-server.typicode.com/efrontcommunity/data-naped/posts'
  )
  const data = await response.json()
  return data
}

export async function getRecentsDetailsAnimes(
  id: number
): Promise<RecentsAnimesProps[]> {
  const response = await fetch(
    `https://my-json-server.typicode.com/efrontcommunity/data-naped/posts/${id}`
  )
  const data = await response.json()
  return [data]
}

export async function getCategory(
  category: string
): Promise<RecentsAnimesProps[]> {
  const response = await fetch(
    `https://my-json-server.typicode.com/efrontcommunity/data-naped/posts?category=${category}`
  )
  const data = await response.json()
  return data
}
