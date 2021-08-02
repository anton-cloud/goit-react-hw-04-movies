import s from "./MoviesPage.module.css";
import React, { Component } from "react";
import axios from "axios";

import MoviesList from "../../components/MoviesList/MoviesList";

class MoviesPage extends Component {
  state = {
    query: "",
    movies: [],
  };

  componentDidMount() {
    if (this.props.location.search) {
      this.fetch(this.props.location.search.slice(7));
    }
  }

  hendleChange = (e) => {
    this.setState({ query: e.currentTarget.value.toLowerCase() });
  };

  hendleSubmit = (e) => {
    const { location, history } = this.props;

    e.preventDefault();

    if (this.state.query.trim() === "") {
      alert("Empty request, try again!");
      return;
    }

    this.fetch(this.state.query);

    history.push({ ...location, search: `query=${this.state.query}` });
  };

  fetch = (query) => {
    return axios
      .get(
        `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=b8a2201c7a3e5dc1c8a43eb6bfa0d8d4&language=en-US&page=1&include_adult=false`
      )
      .then((response) =>
        this.setState({
          movies: response.data.results,
        })
      );
  };

  render() {
    const { movies } = this.state;

    return (
      <div className={`container ${s.container}`}>
        <form className={s.searchForm} onSubmit={this.hendleSubmit}>
          <input
            className={s.searchFormInput}
            type="text"
            placeholder="Search movies"
            value={this.state.query}
            onChange={this.hendleChange}
          />
          <button type="submit">
            <span className={s.searchFormButtonLabel}>Search</span>
          </button>
        </form>

        <MoviesList movies={movies} />
      </div>
    );
  }
}

export default MoviesPage;
