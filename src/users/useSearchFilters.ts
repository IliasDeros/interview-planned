import { useState } from "react"

const initialMinAge = 0
const initialMaxAge = 130

function useSearchFilters() {
  const [filter, setFilter] = useState({
    minAge: initialMinAge,
    maxAge: initialMaxAge
  })

  const canResetFilters = filter.minAge !== initialMinAge || filter.maxAge !== initialMaxAge
  const resetFilters = canResetFilters ? (() => setFilter({
    minAge: initialMinAge,
    maxAge: initialMaxAge
  })) : undefined

  return {
    resetFilters,
    filter,
    setFilter,
  }
}

export default useSearchFilters
