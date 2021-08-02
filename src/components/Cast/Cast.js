import s from "./Cast.module.css";
import { Component } from "react";
import axios from "axios";

class Cast extends Component {
  state = {
    cast: [],
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=b8a2201c7a3e5dc1c8a43eb6bfa0d8d4&language=en-US`
    );

    this.setState({
      cast: response.data.cast,
    });
  }

  render() {
    const { cast } = this.state;

    return (
      <ul className={`${s.list} list`}>
        {cast.map((item) => {
          return (
            <li className={s.item} key={item.credit_id}>
              <img
                className={s.img}
                src={
                  item.profile_path
                    ? `https://image.tmdb.org/t/p/w500/${item.profile_path}`
                    : `https://img.icons8.com/dusk/280/000000/no-image.png`
                }
                alt={item.name}
              ></img>
              <h4 className={s.title}>{item.name}</h4>
              <p className={s.text}>{item.character}</p>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Cast;
