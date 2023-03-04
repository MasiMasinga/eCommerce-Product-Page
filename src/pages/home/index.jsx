import React from "react";

// Components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PageLayout from "../../common/layout/PageLayout";

const Home = () => {
  return (
    <PageLayout>
      <Navbar />
      <Hero />
    </PageLayout>
  );
};

export default Home;
