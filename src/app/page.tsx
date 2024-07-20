import { About } from './components/About';
import { Cover } from './components/Cover';
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
      </div>
    </main>
  );
}
