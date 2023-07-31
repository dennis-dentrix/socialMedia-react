import { Avatar } from "@mui/material";
import img from "../assets/profile-img.jpg";
import "./header.css";
export const Header = () => {
  return (
    <section className="header">
      <Avatar src={img} />

      <div className="header-pages">
        <h1 className="active" >For You</h1>
        <h1>Following</h1>
      </div>
    </section>
  );
};
