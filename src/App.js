import React, {Component} from 'react';
import Movie from './Movie';

class App extends Component {
    constructor() {
        super();

        this.state = {
            movies: [],
            isLoading: true
        }
    }

    componentDidMount() {
        this.searchMovies();
    }

    searchMovies = async () => {
        const movies = await this.callMoviesSearchAPI();

        this.setState({
            movies : movies,
            isLoading : false
        });
    };

    callMoviesSearchAPI = () => {
        return fetch("http://localhost/hello")
            .then(response => response.json())
            .catch(error => error);
    };

    render() {
        if (this.state.isLoading) {
            return (<p>Loading...</p>);
        }

        return (
            <div className="App">
                {
                    this.state.movies.map((movie, index) => {
                        return <Movie title={movie.title} poster={movie.poster} key={index}/>
                    })
                }
            </div>
        );
    }
}

export default App;
