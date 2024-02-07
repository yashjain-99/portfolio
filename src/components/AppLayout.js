import AboutMe from "./AboutMe";
import Header from "./Header/index";
import Hero from "./Hero";
import Projects from "./Projects";
import Testimonials from "./Testimonials";
import BackgroundSection from "./Background";

const AppLayout = () => {
  return (
    <main className="flex min-h-screen items-center flex-col">
      <Header />
      <Hero />
      <AboutMe />
      <Projects />
      <Testimonials />
      <BackgroundSection />
    </main>
  );
};

export default AppLayout;
