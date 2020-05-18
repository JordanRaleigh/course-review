import React from 'react'
import { connect } from 'react-redux'
import { fetchMovies } from '../redux/movieReducer'
// import movies from '../../movie-info'

export class MovieList extends React.Component {
  componentDidMount() {
    this.props.getMovies()
  }

  currency(number) {
    return new Intl.NumberFormat('en-IN', {
      maximumSignificantDigits: 3,
    }).format(number)
  }

  render() {
    return (
      <div>
        <h3>This is my movie page.</h3>
        {this.props.movies.map((movie) => (
          <div key={movie.id}>
            <h1>{movie.name}</h1>
            <h3>{movie.date}</h3>
            <h3>IMDB SCORE: {movie.score} / 10</h3>
            <h3>Box Office Sales: $ {this.currency(movie.boxoffice)}</h3>
            <h3>Production Cost: ${movie.cost}.00</h3>
          </div>
        ))}
      </div>
    )
  }
}

const mapState = (reduxState) => {
  return {
    movies: reduxState.movies,
  }
}

const mapDispatch = (dispatch) => {
  return {
    getMovies: () => dispatch(fetchMovies()),
  }
}

export default connect(mapState, mapDispatch)(MovieList)
