import { Avatar, Card, CardHeader, IconButton } from "@mui/material";
import { Gear, ThreeDots, Search, XCircle } from "react-bootstrap-icons";
// import "./search.css";

export function SearchHeader() {
  return (
    <div className="search-header">
      <Avatar />

      <form action="" className="search-form">
        <Search className="search-icon" />
        <input
          type="text"
          placeholder="Search for more"
          className="search-input"
        />
        <XCircle className="search-icon search-cancel" />
      </form>

      <Gear className="search-icon" />
    </div>
  );
}
export const SearchPage = () => {
  return (
    <section className="search">
      <SearchHeader />
      <Topic />
    </section>
  );
};

// Child component

function Topic() {
  return (
    <section className="topic">
      <h1 className="topic-title">Trends for you</h1>

      <TopicCard />
      <TopicCard />
      <TopicCard />
      <TopicCard />
    </section>
  );
}

function TopicCard() {
  return (
    <div className="search-card">
      <div className="card-text">
        <p className="card-about">Trending in Kenya</p>
        <h2 className="card-topic">2022 KCSE</h2>
        <p className="card-about">4,577 tweets</p>
      </div>

      <ThreeDots className="topic-icon" />
    </div>
    // <Card sx={{ margin: 2 }}>
    //   <CardHeader
    //     action={
    //       <IconButton aria-label="settings">
    //         <ThreeDots />
    //       </IconButton>
    //     }
    //     title="Shrimp and Chorizo Paella"
    //     subheader="September 14, 2016"
    //     sx={{ color: "red" }}
    //   />
    // </Card>
  );
}
