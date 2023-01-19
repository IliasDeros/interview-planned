import React, { useEffect, useState } from 'react'
import useFilterReducer, { Action } from './useFilterReducer'

// Design had 431 / 1230 as filter
const minAgeValue = 0
const maxAgeValue = 9999

type UserFiltersProps = {
  dispatchFilter: React.Dispatch<Action>
  filter: { minAge: number, maxAge: number }
}

function UserFilters({
  dispatchFilter,
  filter,
}: UserFiltersProps) {
  const { dispatchFilter: dispatchValues, filter: values } = useFilterReducer(filter)
  const retrieveUsers = () => {
    dispatchFilter({ type: 'SET_MIN_AGE', value: values.minAge })
    dispatchFilter({ type: 'SET_MAX_AGE', value: values.maxAge })
  }

  // Updating filter externally will update the state
  useEffect(() => {
    dispatchValues({ type: 'SET_MIN_AGE', value: filter.minAge })
    dispatchValues({ type: 'SET_MAX_AGE', value: filter.maxAge })
  }, [filter.minAge, filter.maxAge])

  const updateMin = (value: number) => dispatchValues({ type: 'SET_MIN_AGE', value })
  const updateMax = (value: number) => dispatchValues({ type: 'SET_MAX_AGE', value })

  return (
    <>
      <div className="input-container input-container--filter">
      <div className="input-container__prefix">Min</div>
        <input
          type="number"
          value={values.minAge}
          onChange={(e) => updateMin(parseInt(e.target.value || "0"))}
          min="0"
          max="130"
        />
      </div>
      <div className="input-container input-container--filter">
        <div className="input-container__prefix">Max</div>
        <input
          type="number"
          value={values.maxAge}
          onChange={(e) => updateMax(parseInt(e.target.value || "0"))}
          min="0"
          max="130"
        />
      </div>
      <a href="#retrieve" role="button" onClick={retrieveUsers}>Retrieve Users</a>
    </>
  )
}

export default UserFilters
