import axios from 'axios'

// Take a look at app/redux/index.js to see where this reducer is
// added to the Redux store with combineReducers
export default function movieReducer(state = [], action) {
  switch (action.type) {
    case 'SET_MOVIES':
      return action.movies
    default:
      return state
  }
}

export const setMovies = (movieList) => ({
  type: 'SET_MOVIES',
  movies: movieList,
})

// store.dispatch, store.getState

export const fetchMovies = () => async (dispatch) => {
  // axios call
  try {
    const { data } = await axios.get('/api/movies')
    dispatch(setMovies(data))
  } catch (err) {
    console.log('Error in fetchMovies. ', err)
  }
}
