"use client";

import { use } from "react";

const SingleProfile = (props) => {
  const user = use(props.params);

  console.log(user);

  return (
    <h2>
      Change the name in the URL to see the dynamic route in action. <br />
      Profile of {user.username}
    </h2>
  );
};

export default SingleProfile;
