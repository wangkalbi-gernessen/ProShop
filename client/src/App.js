import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <h1>Hello World</h1>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default App;
