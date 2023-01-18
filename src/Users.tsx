import React from 'react'
import { useQuery } from 'react-query';
import { queryAdults } from './api/users';

function Users() {
  const { data } = useQuery('adults', queryAdults);

  const adults = data?.data;

  return (
    <>
      <h1>Planned Test</h1>
      <div>
        <button type="button">Retrieve Users</button>
      </div>

      <div>
        <h2>Users ({adults?.length})</h2>
        min: <input name="minAge" value="0" type="number" />
        max: <input name="maxAge" value="100" type="number" />
      </div>
    </>
  )
}

export default Users;
