import { API_URL } from "../constants"

export type User = {
  id: number,
  country: string,
  age: number,
  email: string,
  name: {
    firstName: string,
    lastName: string,
  }
}

const queryAdults = async () => {
  const response = await fetch(`${API_URL}/users/adults`)
  return response.json() as Promise<{ data: User[] }>
}

const queryKids = async () => {
  const response = await fetch(`${API_URL}/users/kids`)
  return response.json() as Promise<{ data: User[] }>
}

const querySeniors = async () => {
  const response = await fetch(`${API_URL}/users/seniors`)
  const data = await (response.json() as Promise<User[]>)
  return { data }
}

export const queryUsers = async () => {
  const allData = await Promise.all([
    queryAdults(),
    queryKids(),
    querySeniors()]
  )

  return allData.reduce((acc, { data }) =>
    [...acc, ...data],
  [] as User[])
}
