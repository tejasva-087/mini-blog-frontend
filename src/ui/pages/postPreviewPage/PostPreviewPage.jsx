import Navigation from "../../layouts/navigation/Navigation";
import PostPreview from "../../layouts/postPreview/PostPreview";
import "./postPreviewPage.scss";

function PostPreviewPage() {
  return (
    <>
      <Navigation searchBar={true} userProfile={true} navOptions={false} />
      <main className="post-preview-container">
        <PostPreview
          title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur autem dignissimos blanditiis reprehenderit,"
          author="Calvin Hue"
          authorImageSeed={Math.floor(Math.random() * 100000000)}
          tags={["art", "science", "maths"]}
          paragraphs={[
            `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis
        impedit magni officiis eligendi tempora debitis corrupti, laudantium
        corporis iure molestias qui, saepe architecto expedita sit voluptate,
        quasi ducimus incidunt dolorem! Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Aliquid voluptatem placeat eius consequatur laudantium
        quae adipisci perferendis iusto, inventore asperiores cum accusantium
        sequi delectus at corrupti beatae perspiciatis. Ad, unde! Lorem ipsum
        dolor sit amet, consectetur adipisicing elit. Quibusdam ratione
        voluptatem amet. Sapiente blanditiis ea ipsa voluptate accusantium
        facere magnam delectus quo error optio, iusto maiores harum illum at
        quas! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
        aut blanditiis repudiandae quod earum, doloribus officiis eligendi nulla
        voluptatem illo vel optio quas eaque, voluptatum iusto ullam soluta
        inventore neque.`,
            `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
        asperiores numquam dolores ad. Minus pariatur temporibus incidunt,
        recusandae aspernatur officia odio culpa quasi, iure tenetur
        perspiciatis fugit reiciendis nulla non?Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Excepturi corrupti, quo dolore dolorum
        obcaecati quidem illum dicta reprehenderit repellat consequuntur
        assumenda nemo deserunt sunt hic laudantium consectetur, temporibus
        dignissimos veniam. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Saepe, ipsum! Minima facere, molestias impedit quas corporis quod
        ratione eos harum consequatur aliquid mollitia optio perspiciatis
        laboriosam enim praesentium beatae officia.`,
          ]}
        />
      </main>
    </>
  );
}

export default PostPreviewPage;
