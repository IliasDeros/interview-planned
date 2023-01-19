import React, { useState } from 'react'
import { useQuery } from 'react-query';
import { queryUsers, User } from './api';
import UserFilters from './UserFilters';
import { filterUsers, orderUsers } from './utils';
import UsersTable from './UsersTable';

function Users() {
  const { isLoading, data } = useQuery('allUsers', queryUsers);
  const [filter, setFilter] = useState({ minAge: 0, maxAge: 100 })
  const users = filterUsers(filter)(orderUsers(data))

  return (
    <div className="container">
      <h1>Users</h1>
      <main className="flex">
        <article className="flex__filters">
          <UserFilters filter={filter} setFilter={setFilter} />
        </article>

        <article className="flex__data">
          <input type="search" placeholder="Search Users" />
          <hr />
          <UsersTable isLoading={isLoading} users={users} />
        </article>
      </main>
    </div>
  )
}

export default Users;
