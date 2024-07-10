import { Navbar } from "./components/Navbar";
import { Body } from "./components/Body";
import { Experience } from "./components/Experience";
import { Whychoose } from "./components/Whychoose";
import { AllProject } from "./components/AllProject";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Body />
      <Whychoose />
      <AllProject />
      <Experience />
      <ContactSection />
    </main>
  );
}
