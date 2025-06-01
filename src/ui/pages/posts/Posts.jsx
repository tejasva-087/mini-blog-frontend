import Navigation from "../../layouts/navigation/Navigation";
import Post from "../../layouts/post/Post";
import Link from "../../components/link/Link";
import "./posts.scss";

function Posts() {
  return (
    <>
      <Navigation searchBar={true} userProfile={true} navOptions={false} />
      <main className="post-container">
        <ul>
          <li>
            <Post
              image={`https://api.dicebear.com/9.x/thumbs/svg?seed=${Math.floor(
                Math.random() * 100000000
              )}`}
              author="Keven Bear"
              title="Lorem ipsum dolor sit amet consectetur adipisicing elit.  dolor of pariatur nulla sunt quod sequi."
              paragraphs={[
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita doloribus officia pariatur nulla sunt quod sequi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita doloribus officia pariatur nulla sunt quod sequi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita doloribus officia pariatur nulla sunt quod sequi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita doloribus officia pariatur nulla sunt quod sequi.",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita doloribus officia pariatur nulla sunt quod sequi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita doloribus officia pariatur nulla sunt quod sequi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita doloribus officia pariatur nulla sunt quod sequi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita doloribus officia pariatur nulla sunt quod sequi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita doloribus officia pariatur nulla sunt quod sequi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita doloribus officia pariatur nulla sunt quod sequi.",
              ]}
            />
          </li>
          <li>
            <Post
              image={`https://api.dicebear.com/9.x/thumbs/svg?seed=${Math.floor(
                Math.random() * 100000000
              )}`}
              author="Keven Bear"
              title="Lorem ipsum dolor sit amet consectetur adipisicing elit.  dolor of pariatur nulla sunt quod sequi."
              paragraphs={[
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita doloribus officia pariatur nulla sunt quod sequi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita doloribus officia pariatur nulla sunt quod sequi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita doloribus officia pariatur nulla sunt quod sequi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita doloribus officia pariatur nulla sunt quod sequi.",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita doloribus officia pariatur nulla sunt quod sequi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita doloribus officia pariatur nulla sunt quod sequi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita doloribus officia pariatur nulla sunt quod sequi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita doloribus officia pariatur nulla sunt quod sequi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita doloribus officia pariatur nulla sunt quod sequi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita doloribus officia pariatur nulla sunt quod sequi.",
              ]}
            />
          </li>
          <li>
            <Post
              image={`https://api.dicebear.com/9.x/thumbs/svg?seed=${Math.floor(
                Math.random() * 100000000
              )}`}
              author="Keven Bear"
              title="Lorem ipsum dolor sit amet consectetur adipisicing elit.  dolor of pariatur nulla sunt quod sequi."
              paragraphs={[
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita doloribus officia pariatur nulla sunt quod sequi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita doloribus officia pariatur nulla sunt quod sequi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita doloribus officia pariatur nulla sunt quod sequi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita doloribus officia pariatur nulla sunt quod sequi.",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita doloribus officia pariatur nulla sunt quod sequi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita doloribus officia pariatur nulla sunt quod sequi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita doloribus officia pariatur nulla sunt quod sequi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita doloribus officia pariatur nulla sunt quod sequi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita doloribus officia pariatur nulla sunt quod sequi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita doloribus officia pariatur nulla sunt quod sequi.",
              ]}
            />
          </li>
          <li>
            <Post
              image={`https://api.dicebear.com/9.x/thumbs/svg?seed=${Math.floor(
                Math.random() * 100000000
              )}`}
              author="Keven Bear"
              title="Lorem ipsum dolor sit amet consectetur adipisicing elit.  dolor of pariatur nulla sunt quod sequi."
              paragraphs={[
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita doloribus officia pariatur nulla sunt quod sequi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita doloribus officia pariatur nulla sunt quod sequi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita doloribus officia pariatur nulla sunt quod sequi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita doloribus officia pariatur nulla sunt quod sequi.",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita doloribus officia pariatur nulla sunt quod sequi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita doloribus officia pariatur nulla sunt quod sequi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita doloribus officia pariatur nulla sunt quod sequi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita doloribus officia pariatur nulla sunt quod sequi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita doloribus officia pariatur nulla sunt quod sequi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita doloribus officia pariatur nulla sunt quod sequi.",
              ]}
            />
          </li>
        </ul>
        <button type="button" className="button post-load-btn">
          load more
        </button>
        <aside className="post-tags-container">
          <p className="text-priamry post-tags-heading margin-bottom-mid">
            Select from different category of posts
          </p>
          <div className="post-tags">
            <button className="button post-tags-btn" type="button">
              art
            </button>

            <button className="button post-tags-btn" type="button">
              science
            </button>

            <button className="button post-tags-btn" type="button">
              coding
            </button>

            <button className="button post-tags-btn" type="button">
              management
            </button>

            <button className="button post-tags-btn" type="button">
              self care
            </button>

            <button className="button post-tags-btn" type="button">
              honesty
            </button>
            <button className="button post-tags-btn" type="button">
              plant
            </button>
          </div>
        </aside>
      </main>
    </>
  );
}

export default Posts;
