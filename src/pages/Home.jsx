import { Header, TweetCard } from "../components";

export const Home = () => {
  return (
    <main className="main">
      <Header />
      <section className="home">
        <TweetCard />
        <TweetCard />
        <TweetCard />
        <TweetCard />
      </section>
    </main>
  );
};
