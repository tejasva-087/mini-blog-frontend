import HeroPage from "./ui/pages/hero/HeroPage";
import PostsPage from "./ui/pages/posts/PostsPage";
import PostPreviewPage from "./ui/pages/postPreviewPage/postPreviewPage";
import SignUpForm from "./ui/layouts/signUpForm/SignUpForm";
import AuthPage from "./ui/pages/authPage/AuthPage";

function App() {
  return (
    <>
      {/* <Link href="/link" className="link--full">
        Hello
      </Link>

      <Link href="/link" className="link--underline">
        Hello
      </Link>

      <Link href="/link" className="link--btn">
        Hello
      </Link>
      <Input
        placeholder="Hello"
        inputValue={value}
        setInputValue={setValue}
        required={true}
      /> */}
      {/* <Navigation searchBar={true} navOptions={true} userProfile={false} /> */}
      {/* <HeroPage /> */}
      {/* <PostsPage /> */}
      {/* <PostPreviewPage /> */}
      {/* <SignUpForm /> */}
      <AuthPage />
    </>
  );
}

export default App;
