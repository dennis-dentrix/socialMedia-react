import { Header, TweetCard } from "../components";
import "./home.css";
// import Navigation from "../components"
import profile from "../assets/profile-img.jpg";

const message = [
  {
    id: "1001",
    username: "Denis Kyusya",
    handle: "@denkyu",
    profileImg: profile,
    message:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique, aliquam atque sint facilis vitae quos placeat enim quae veniam, molestiae consectetur natus, dolor laboriosam possimus. Eius eveniet nostrum quae iste.",
    tweetImg: profile,
  },
  {
    id: "100",
    username: "Muli",
    handle: "@muli_brin",
    profileImg: profile,
    message:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique, aliquam atque sint facilis vitae quos placeat enim quae veniam, molestiae consectetur natus, dolor laboriosam possimus. Eius eveniet nostrum quae iste.",
    tweetImg: profile,
  },
];
export const Home = () => {
  const items = message.map((item) => item);

  return (
    <main className="home">
      <section className="home-body">
        <Header />

        <div className="home-body__tweets">
          {items.map((i) => (
            <TweetCard
              key={i.id}
              name={i.username}
              handle={i.handle}
              tweet={i.message}
              img={profile}
            />
          ))}
        </div>
      </section>
    </main>
  );
};
