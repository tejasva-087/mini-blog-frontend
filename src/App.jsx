import HeroPage from "./ui/pages/hero/HeroPage";
import PostsPage from "./ui/pages/posts/PostsPage";
import PostPreviewPage from "./ui/pages/postPreviewPage/postPreviewPage";
import AuthPage from "./ui/pages/authPage/AuthPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserProfile from "./ui/layouts/userProfile/UserProfile";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HeroPage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/user" element={<UserProfile />} />
          <Route path="/posts" element={<PostsPage />} />
          <Route path="/post" element={<PostPreviewPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
