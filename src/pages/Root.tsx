import React from "react";
import useRouter from "../utils/use-router";

export default function Root() {
  const { push } = useRouter();

  const handleClickGoToAboutButton = () => {
    push("/about");
  };
  return (
    <>
      <h1>This is Root Page.</h1>
      <button onClick={handleClickGoToAboutButton}>About</button>
    </>
  );
}
