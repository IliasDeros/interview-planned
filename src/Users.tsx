import React from 'react'
import { useQuery } from 'react-query';
import { queryUsers, User } from './api/users';
import SortArrows from "./assets/sort-arrows.svg";

const orderUsers = (users?: User[]) => {
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

function Users() {
  const { data } = useQuery('allUsers', queryUsers);
  const users = orderUsers(data)

  return (
    <div className="container">
      <h1>Users</h1>
      <main className="flex">
        <article className="flex__filters">
          <div className="input-container input-container--filter">
          <div className="input-container__prefix">Min</div>
            <input name="minAge" value="0" type="number" placeholder="0" />
          </div>
          <div className="input-container input-container--filter">
            <div className="input-container__prefix">Max</div>
            <input name="maxAge" value="100" type="number" placeholder="0" />
          </div>
          <a href="#" role="button">Retrieve Users</a>
        </article>

        <article className="flex__data">
          <input type="search" placeholder="Search Users" />
          <hr />
          <table>
            <thead>
              <tr>
                <th style={{ width: "1px" }}></th>
                <th scope="col">
                  <strong>Name</strong>
                  <img className="sort-arrows" src={SortArrows} alt="" />
                </th>
                <th scope="col">
                  <strong>Age</strong>
                  <img className="sort-arrows" src={SortArrows} alt="" />
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, i) => (
                <tr key={`${user.id}`}>
                  <td><input type="checkbox" /></td>
                  <td>{user.name.firstName} {user.name.lastName}</td>
                  <td>{user.age}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </article>
      </main>
    </div>
  )
}

export default Users;
