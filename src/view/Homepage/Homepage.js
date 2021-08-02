import s from "./Homepage.module.css";
import { Component } from "react";
import axios from "axios";

import MoviesList from "../../components/MoviesList/MoviesList";

export default class Homepage extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    const response = await axios.get(
      "https://api.themoviedb.org/3/trending/movie/day?api_key=b8a2201c7a3e5dc1c8a43eb6bfa0d8d4"
    );

    this.setState({
      movies: response.data.results,
    });
  }

  render() {
    const { movies } = this.state;

    return (
      <div className={`container`}>
        <h1 className={s.title}>Trending today</h1>
        <MoviesList movies={movies} />
      </div>
    );
  }
}
