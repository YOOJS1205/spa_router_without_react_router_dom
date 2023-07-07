import React from "react";
import useRouter from "../utils/use-router";

export default function About() {
  const { push } = useRouter();

  const handleClickGoToMainButton = () => {
    push("/");
  };
  return (
    <>
      <h1>This is About Page.</h1>
      <button onClick={handleClickGoToMainButton}>Go Main</button>
    </>
  );
}
