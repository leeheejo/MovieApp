import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';
import LinesEllipsis from 'react-lines-ellipsis'

// class Movie extends Component{
//     static propTypes = {
//         title : PropTypes.string.isRequired, 
//         poster : PropTypes.string.isRequired
//       }
      
//   render() {
//       console.log(this.props)
//     return (
//         <div>
//             <h1>{this.props.title}</h1>
//             <MoviePoster poster = {this.props.poster}/>
//         </div>
//     );
//   }
// }

// class MoviePoster extends Component {
//     static propTypes = {
//         poster : PropTypes.string.isRequired
//       }
//     render(){
//         return (
//             <img src = {this.props.poster}
//                 alt =""/>
//         );
//     }
// }

function Movie({title, poster, genres, synopsis}) {
    return (
        <div className="Movie">
            <div className="Movie_Columns">
                <MoviePoster className="Movie_Poster" poster = {poster} alt= {title} />
            </div>
            <div className="Movie_Columns">
                <h1>{title}</h1>
                <div className="Moive_Genres">
                    {genres.map( (genre, index) => <MovieGenre genre ={genre} key ={index}/>)}
                </div>
                <div className = "Movie_Synopsis">
                    <LinesEllipsis
                      text= {synopsis}
                      maxLine='3'
                      ellipsis='...'
                      trimRight
                      basedOn='letters'
                      />
                </div>
            </div>
        </div>
    );
}

function MoviePoster ({poster, alt}) { // 라이프사이클, 스테이트 없음 stateless function
    return (
        <img src = {poster}
            alt ={alt}
            title= {alt} 
            className="Movie_Poster"/>
    );
}

function MovieGenre({genre}) {
    return(
        <span className="Movie_Genre">{genre}</span>
    )
}

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres : PropTypes.array.isRequired, 
    synopsis : PropTypes.string.isRequired
}

MoviePoster.propTypes = {
    poster: PropTypes.string.isRequired, 
    alt : PropTypes.string.isRequired
}

MovieGenre.propTypes = {
    genre: PropTypes.string.isRequired
}

export default Movie;