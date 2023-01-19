import { User } from "./api"

export const orderUsers = (users?: User[]) => {
  if (!users) {
    return []
  }

  // Order by name ascending followed by the age descending
  return users.sort((a, b) => {
    const nameA = a.name.firstName.toUpperCase()
    const nameB = b.name.firstName.toUpperCase()
    if (nameA < nameB) {
      return -1
    }
    if (nameA > nameB) {
      return 1
    }
    if (a.age > b.age) {
      return -1
    }
    if (a.age < b.age) {
      return 1
    }
    return 0
  })
}

export const filterUsers = ({ minAge = 0, maxAge = 100 }) => (users: User[]) => {
  return users.filter(user => user.age >= minAge && user.age <= maxAge)
}
