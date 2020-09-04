import React, { Component } from 'react';
import PropTypes, { func } from 'prop-types';
import './App.css';
import Movie from './Movie';


class App extends Component{


  state = {
    greeting : "Hello"
  }

  componentWillMount() {
    // call api
   
  }

  componentDidMount(){
    // setTimeout( function() {
    //   console.log("hello");
    // }, 5000)

    //참고 infinite scroll 20개 읽으면 및에 20개 컨텐츠 추가하는 기능 ㄴ

    this._getMoives();
  }

   _getMoives = async () => {
    const movies = await this._callApi();
    this.setState({
      movies : movies
    })
  }

  _callApi = () => {
    return fetch('https://yts.mx/api/v2/list_movies.json?sorted_by=download_count')
    .then(response => response.json())
    .then(json => json.data.movies)
    .catch(err => console.log(err))
  }
  _renderMovies = () => {
    const movies = this.state.movies.map((movie) => {
      return <Movie 
                title = {movie.title} 
                poster = {movie.medium_cover_image} 
                key = {movie.id} 
                genres = {movie.genres}
                synopsis =  { movie.synopsis}
                 />
    })

    return movies;
  }

  render() {
    return (
      <div className={this.state.movies ? "App" : "App-loading"}>
        {/* {movies.map(movie => {
          return <Movie key={movie.id} title={movie.title} poster = {movie.poster} />
        })} */}
        {this.state.movies ? this._renderMovies() : 'Loading'} 
      </div>
    );
  }
}

export default App;


// #17