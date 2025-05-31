import Link from "../../components/link/Link";
import ".//userProfile.scss";

function UserProfile({ imageSeed, userName }) {
  return (
    <Link href="/userprofile" className="user-profile">
      <img
        src={`https://api.dicebear.com/9.x/thumbs/svg?seed=${imageSeed}`}
        alt="user profile img"
        className="user-profile--image"
      />
      <p>{userName}</p>
    </Link>
  );
}

export default UserProfile;
