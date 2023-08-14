import { Link } from "react-router-dom";
import { Avatar } from "@mui/material";
import {
  House,
  Search,
  Bell,
  Envelope,
  Person,
  ThreeDots,
} from "react-bootstrap-icons";
import { Button } from "./Button";

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

          <li className="nav-item">
            <Link className="nav-link" to="/">
              <Person className="nav-icon" />
              <span>Profile</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/">
              <ThreeDots className="nav-icon" />
              <span>More</span>
            </Link>
          </li>
        </ul>

        <Button
          style={{
            padding: "1.5rem 1rem",
            borderRadius: "1rem",
            fontSize: "1.6rem",
          }}
        >
          Post
        </Button>
      </nav>
    </section>
  );
};
