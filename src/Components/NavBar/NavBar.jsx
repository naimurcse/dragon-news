import { NavLink } from "react-router";
import userIcon from "../../assets/user.png";

const NavBar = () => {
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/career">Career</NavLink>
      </li>
    </>
  );
  return (
    <>
      <div className="flex justify-between items-center">
        <div className="flex-1"></div>
        <div className="flex-1">
          <ul className="flex items-center gap-5 justify-center">{links}</ul>
        </div>
        <div className="flex-1 flex items-center justify-end gap-5">
          <img src={userIcon} alt="" />
          <button className="btn btn-primary">Login</button>
        </div>
      </div>
    </>
  );
};

export default NavBar;
