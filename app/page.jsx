import Feed from "@components/Feed";

const Home = () => (
  <section className='w-full flex-center flex-col'>
    <h1 className='head_text text-center'>
      Discover & Share
      <br className='max-md:hidden' />
      <span className='orange_gradient text-center'> Share your Opinion</span>
    </h1>
    <p className='desc text-center'>
      Creating memories, capturing them in words, and saving them as a written keepsake — a timeless collection to cherish and revisit.
    </p>

    <Feed />
  </section>
);

export default Home;
