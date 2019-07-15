import React from "react";
import ProfilePic from "./ProfilePic";
import UserInfo from "./UserInfo";

const Profile = props => {
  return (
    <div>
      <ProfilePic imgUrl={props.data.imgUrl} />
      <UserInfo userData={props.data.userInfo} />
    </div>
  );
};

export default Profile;
