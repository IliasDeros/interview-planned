import React from 'react'
import { useQuery } from 'react-query';
import { queryUsers } from './api';
import UserFilters from './UserFilters';
import { filterUsers, orderUsers } from './utils';
import UsersTable from './UsersTable';
import useFilterReducer from './useFilterReducer';

function Users() {
  const { isLoading, data } = useQuery('allUsers', queryUsers);
  const { dispatchFilter, canResetFilters, filter } = useFilterReducer()
  const users = filterUsers(filter)(orderUsers(data))
  const resetFilters = canResetFilters ? () => dispatchFilter({ type: 'RESET' }) : undefined

  return (
    <div className="container">
      <h1>Users</h1>
      <main className="flex">
        <article className="flex__filters">
          <UserFilters dispatchFilter={dispatchFilter} filter={filter} />
        </article>

        <article className="flex__data">
          <input type="search" placeholder="Search Users" />
          <hr />
          <UsersTable resetFilters={resetFilters} isLoading={isLoading} users={users} />
        </article>
      </main>
    </div>
  )
}

export default Users;
