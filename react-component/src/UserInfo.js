import React from "react";

const UserInfo = props => {
  return (
    <div>
      <p>{props.userData.firstName}</p>
      <p>{props.userData.lastName}</p>
    </div>
  );
};

export default UserInfo;
