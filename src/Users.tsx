import React from 'react'
import { useQuery } from 'react-query';
import { queryUsers } from './api/users';

function Users() {
  const { data } = useQuery('allUsers', queryUsers);

  return (
    <>
      <h1>Planned Test</h1>
      <div>
        <button type="button">Retrieve Users</button>
      </div>

      <div>
        <h2>Users ({data?.length})</h2>
        min: <input name="minAge" value="0" type="number" />
        max: <input name="maxAge" value="100" type="number" />
      </div>
    </>
  )
}

export default Users;
