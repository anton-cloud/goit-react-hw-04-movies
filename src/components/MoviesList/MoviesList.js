import PropTypes from 'prop-types';
import s from './MoviesList.module.css';
import { Link, withRouter } from 'react-router-dom';

const MoviesList = ({ movies, location }) => {
  return (
    <ul className={`${s.list} list`}>
      {movies.map(({ id, poster_path }) => (
        <li className={s.item} key={id}>
          <Link
            to={{
              pathname: `movies/${id}`,
              state: { from: location },
            }}
          >
            <img
              className={s.img}
              src={`https://image.tmdb.org/t/p/w500${poster_path}`}
              alt=""
            ></img>
          </Link>
        </li>
      ))}
    </ul>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ),
};

export default withRouter(MoviesList);