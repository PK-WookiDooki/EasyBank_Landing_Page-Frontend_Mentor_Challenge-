// import React from "react";

import { Articles, Footer, Hero, Navbar, Services } from "./components";

const App = () => {
  return (
    <div className=" bg-LGray min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Articles />
      <Footer />
    </div>
  );
};

export default App;
