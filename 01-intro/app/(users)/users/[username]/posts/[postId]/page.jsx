const Posts = async (props) => {
  const user = await props.params;
  console.log(user);

  return (
    <h1>
      Change the name and postId in the URL to see the dynamic route in action.{" "}
      <br />
      User: {user.username}, PostId: {user.postId}
    </h1>
  );
};

export default Posts;
