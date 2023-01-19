import React, { useState } from 'react'

const maxAgeValue = 130
const minAgeValue = 0

type UserFiltersProps = {
  filter: { minAge: number, maxAge: number },
  setFilter: (filter: { minAge: number, maxAge: number }) => void
}

function UserFilters({
  filter,
  setFilter
}: UserFiltersProps) {
  const [minAge, setMinAge] = useState(filter.minAge)
  const [maxAge, setMaxAge] = useState(filter.maxAge)
  const retrieveUsers = () => setFilter({ minAge, maxAge })

  const updateMin = (minAge = 0) => {
    const min = Math.min(Math.max(minAge, minAgeValue), maxAgeValue)

    if (min > maxAge) {
      setMaxAge(min)
    }
    setMinAge(min)
  }

  const updateMax = (maxAge = 100) => {
    const max = Math.max(Math.min(maxAge, maxAgeValue), minAgeValue)
    if (max < minAge) {
      setMinAge(max)
    }
    setMaxAge(max)
  }

  return (
    <>
      <div className="input-container input-container--filter">
      <div className="input-container__prefix">Min</div>
        <input
          type="number"
          value={minAge}
          onChange={(e) => updateMin(parseInt(e.target.value || "0"))}
          min="0"
          max="130"
        />
      </div>
      <div className="input-container input-container--filter">
        <div className="input-container__prefix">Max</div>
        <input
          type="number"
          value={maxAge}
          onChange={(e) => updateMax(parseInt(e.target.value || "0"))}
          min="0"
          max="130"
        />
      </div>
      <a href="#" role="button" onClick={retrieveUsers}>Retrieve Users</a>
    </>
  )
}

export default UserFilters
