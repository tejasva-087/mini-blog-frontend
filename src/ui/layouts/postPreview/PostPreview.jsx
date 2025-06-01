import Link from "../../components/link/Link";
import "./postPreview.scss";

function PostPreview({
  title = "",
  paragraphs = [],
  authorImageSeed = "",
  author = "",
  tags = [],
}) {
  return (
    <article className="post-preview">
      <h2 className="heading-secondary post-preview-title">{title}</h2>

      <div className="post-preview-meta-data">
        <Link className="post-author-link margin-bottom-mid">
          <figure className="post-author">
            <img
              src={`https://api.dicebear.com/9.x/thumbs/svg?seed=${authorImageSeed}`}
              alt="author image"
              className="post-author-image"
            />
            <figcaption className="author-post-text">{author}</figcaption>
          </figure>
        </Link>
        <ul className="post-preview-tags margin-bottom-big">
          {tags.map((tag, id) => (
            <li key={id}>
              <button className="button post-tags-btn" type="button">
                {tag}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {paragraphs.map((para, id) => (
        <p className="text-primary margin-bottom-big" key={id}>
          {para}
        </p>
      ))}
    </article>
  );
}

export default PostPreview;
