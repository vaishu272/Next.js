import React from "react";

const Slugs = async (props) => {
  const { slug } = await props.params;
  console.log(slug);

  return (
    <div>
      <h2>
        Slugs are nested routes in the URL. Create multiple slugs in the URL.
      </h2>
      Slugs: {slug.join(" / ")}
    </div>
  );
};

export default Slugs;
