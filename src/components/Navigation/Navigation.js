import s from "./Navigation.module.css";

import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <ul className={`${s.list} list`}>
        <li className={s.item}>
          <NavLink exact to="/">
            Home
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink to="/movies">Movies</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
