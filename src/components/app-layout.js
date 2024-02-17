import AboutMe from "./about-me";
import Header from "./Header/index";
import Hero from "./hero";
import Projects from "./projects";
import TestimonialsSection from "./testimonials-section";
import BackgroundSection from "./background";

const AppLayout = () => {
  return (
    <main className="flex min-h-screen items-center flex-col">
      <Header />
      <Hero />
      <AboutMe />
      <Projects />
      <TestimonialsSection />
      <BackgroundSection />
    </main>
  );
};

export default AppLayout;
