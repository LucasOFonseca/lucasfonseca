import { About } from './components/About';
import { Contact } from './components/Contact';
import { Cover } from './components/Cover';
import { Footer } from './components/Footer';
import { Projects } from './components/Projects';
import { Techs } from './components/Techs';

export default function Home() {
  return (
    <main>
      <Cover />

      <div className="w-full flex flex-col items-center px-4">
        <About />
        <Techs />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
