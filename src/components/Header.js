import React from "react";

function Header(props) {
  const { victorsblog } = props;

  return (
    <header>
      <h1>{victorsblog}</h1>
    </header>
  );
}

export default Header;
