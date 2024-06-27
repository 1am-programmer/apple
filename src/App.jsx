import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Model from "./components/Model";
import * as Sentry from "@sentry/react";
import Features from "./components/Features";

const App = () => {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
      <Features/>
    </main>
  );
};

export default Sentry.withProfiler(App);

// Installed and integrated sentry to monitor loading and click-through rate in our react apple 15 website clone
