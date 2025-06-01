import Link from "../../components/link/Link";
import "./post.scss";

function Post({
  className = "",
  title = "",
  paragraphs = [],
  expand = false,
  image = "",
  author = "",
}) {
  return (
    <article className={`post ${className}`}>
      <h3
        className={`heading-tertiary margin-bottom-mid ${
          expand ? "" : "clamp-title"
        }`}
      >
        {title}
      </h3>

      {expand ? (
        paragraphs.map((para) => (
          <p className="text-primary margin-bottom-sml">{para}</p>
        ))
      ) : (
        <p
          className="text-primary margin-bottom-sml
           clamp-paragraph"
        >
          {paragraphs[0]}
        </p>
      )}
      <Link className="post-author-link" href="/author">
        <figure className="post-author">
          <img src={image} alt="author image" className="post-author-image" />
          <figcaption className="author-post-text">{author}</figcaption>
        </figure>
      </Link>
    </article>
  );
}

export default Post;
