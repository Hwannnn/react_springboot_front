import React, {Component} from "react";
import Movie from "./Movie";
import Navigation from "./Navigation";
import TitleImage from "./TitleImage";

class App extends Component {
    constructor() {
        super();

        this.state = {
            movies: []
        }
    }

    componentDidMount() {
        this.searchMovies();
    }

    searchMovies = async () => {
        const movies = await this.callMoviesSearchAPI();
        this.updateMovies(movies);
    };

    updateMovies = (movies) => {
        this.setState({
            movies: movies
        })
    };

    callMoviesSearchAPI = () => {
        return fetch("http://localhost/hello")
            .then(response => response.json())
            .catch(this.handleAPIError);
    };

    handleAPIError = () => {
        return new Promise(function() {
        });
    };

    render() {
        return (
            <div className="container">
                <div className="card">
                    <TitleImage/>
                    <br/>

                    <div className="card-header">
                        <Navigation/>
                    </div>

                    <div className="card card-body">
                        {
                            this.state.movies.map((movie, index) => {
                                return <Movie title={movie.title} poster={movie.poster} key={index}/>
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
