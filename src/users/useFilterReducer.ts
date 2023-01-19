import { useReducer } from "react"

// Design had 431 / 1230 as filter
const minAgeValue = 0
const maxAgeValue = 9999

const initialMinAge = 0
const initialMaxAge = 130

const initialState = {
  minAge: initialMinAge,
  maxAge: initialMaxAge
}

export type Action = { type: 'SET_MIN_AGE', value: number } | { type: 'SET_MAX_AGE', value: number } | { type: 'RESET' }
export type State = { maxAge: number, minAge: number }

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'SET_MIN_AGE': {
      const min = Math.min(Math.max(action.value, minAgeValue), maxAgeValue)
      const newState = { ...state, minAge: min }

      if (min > state.maxAge) {
        newState.maxAge = min
      }

      return newState
    }
    case 'SET_MAX_AGE': {
      const max = Math.min(Math.max(action.value, minAgeValue), maxAgeValue)
      const newState = { ...state, maxAge: max }

      if (max < state.minAge) {
        newState.minAge = max
      }

      return newState
    }
    case 'RESET': {
      return initialState
    }
  }
}

function useFilterReducer(fromState = initialState) {
  const [filter, dispatchFilter] = useReducer(reducer, fromState)
  const canResetFilters = filter.minAge !== initialMinAge || filter.maxAge !== initialMaxAge

  return {
    canResetFilters,
    dispatchFilter,
    filter,
  }
}

export default useFilterReducer
