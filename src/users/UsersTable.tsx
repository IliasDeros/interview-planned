import React from "react"
import { User } from "./api"
import SortArrows from "../assets/sort-arrows.svg"

type UsersTableProps = {
  isLoading: boolean,
  users: User[]
}

function UsersTable({ isLoading, users }: UsersTableProps) {
  return (
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
        {isLoading && (
          <tr>
            <td></td>
            <td aria-busy="true" colSpan={2}>Fetching Users...</td>
          </tr>
        )}

        {users.map((user, i) => (
          <tr key={`${user.id}-${i}`}>
            <td><input type="checkbox" /></td>
            <td>{user.name.firstName} {user.name.lastName}</td>
            <td>{user.age}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default UsersTable
