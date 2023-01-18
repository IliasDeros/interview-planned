const API_URL = 'http://localhost:8099'

type User = {
  id: number
}

export const queryAdults = async () => {
  const response = await fetch(`${API_URL}/users/adults`)
  return response.json() as Promise<{ data: User[]} >
}

export const queryKids = async () => {
  const response = await fetch(`${API_URL}/users/kids`)
  return response.json() as Promise<{ data: User[]} >
}
export const querySeniors = async () => {
  const response = await fetch(`${API_URL}/users/seniors`)
  return response.json() as Promise<{ data: User[]} >
}
