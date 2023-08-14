import { Search, ThreeDots } from "react-bootstrap-icons";
import { Button } from "./Button";

import "./trending.css";
export function SearchBar() {
  return (
    <form className="search-form">
      <Search className="search-icon" />
      <input type="text" placeholder="Search" className="search-input" />
    </form>
  );
}

const Verify = () => {
  return (
    <div className="verify">
      <h1 className="verify-heading">Get Verified</h1>
      <p className="verify-text">Subscribe to unlock new features</p>
      <Button>Get Verified</Button>
    </div>
  );
};

const Topics = () => {
  return (
    <div className="topics">
      <h1 className="topics__title">Trending topics</h1>
      <Trend />
      <Trend />
      <Trend />
    </div>
  );
};

const Trend = () => {
  return (
    <div className="topics__box">
      <div className="topics__box-top">
        <p className="topics__box-text">Trending in Kenya</p>
        <ThreeDots style={{ fontSize: "1.8rem" }} />
      </div>

      <h2 className="topics__box-topic">kibe</h2>
      <p className="topics__box-text">2,435 posts</p>
    </div>
  );
};

export const Trending = () => {
  return (
    <section className="trending">
      <SearchBar />
      <Verify />
      <Topics />
    </section>
  );
};
