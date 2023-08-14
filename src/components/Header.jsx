import { Avatar } from "@mui/material";
import { EmojiSmile, GeoAlt, Film, Paperclip } from "react-bootstrap-icons";
import { Button } from "./Button";
import img from "../assets/profile-img.jpg";
import "./header.css";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <section className="header">
      {/* <Avatar src={img} /> */}
      <Link to="/" className="header-link">
        Home
      </Link>

      <div className="header-pages">
        <Link to="/" className="active page">
          For You
        </Link>
        <Link className="page">Following</Link>
      </div>

      <form className="header-form">
        <div className="header-form__top">
          <Avatar src={img} />

          <input
            type="text"
            className="header-input"
            placeholder="Talk to me..."
            autoFocus
          />
        </div>

        <div className="header-form__bottom">
          <div className="header-icons">
            <Film />
            <Paperclip />
            <EmojiSmile />
            <GeoAlt />
          </div>

          <Button>Post</Button>
        </div>
      </form>
    </section>
  );
};
