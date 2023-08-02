import { Link } from "react-router-dom";
import { Avatar } from "@mui/material";
import { House, Search, Bell, Envelope } from "react-bootstrap-icons";

import "./nav.css";

export const Navigation = () => {
  return (
    <section className="navigation">
      <nav className="nav">
        <Avatar />

        <ul className="nav-list">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              <House className="nav-icon" />
              <span>Home</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/explore">
              <Search className="nav-icon" />
              <span>Search</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/">
              <Bell className="nav-icon" />
              <span>Notifications</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/">
              <Envelope className="nav-icon" />
              <span>Messages</span>
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  );
};
