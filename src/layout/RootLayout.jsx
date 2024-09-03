import React from "react";

const RootLayout = ({ children }) => {
  return (
    <div className="bg-black min-h-screen">
      <header></header>
      <main className="flex flex-col">{children}</main>
      <footer></footer>
    </div>
  );
};

export default RootLayout;
