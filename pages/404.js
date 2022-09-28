import Link from "next/link";
import React from "react";

const Custom404 = () => {
  return (
    <>
      <h1>The page you're looking doesn't exists</h1>
      <Link href="/">Back to home</Link>
    </>
  );
};

export default Custom404;
