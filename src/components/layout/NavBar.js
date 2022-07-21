import { Link, NavLink } from "react-router-dom";

const NavBar = (props) => {
  return (
    <nav >
      <ul className="nav">

        <li className="nav-item">
          <Link to="/home" className="nav-link">Home</Link>
        </li>

        <li className="nav-item">
          <NavLink to="/about" className="nav-link">About</NavLink>
        </li>

        <li className="nav-item">
            <NavLink to='/' className="nav-link">Landing</NavLink>
        </li>
        { props.user && <span style={{marginTop: '8px'}}>{props.user.username}</span>}
        {props.user && <span className="btn btn-outline-warning" style={{marginLeft: '20px', marginTop: '5px'}}>Logout</span>}
      </ul>
    </nav>
  );
};

export default NavBar;
