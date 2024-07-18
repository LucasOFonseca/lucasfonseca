import { ElectronIcon } from '@/assets/ElectronIcon';
import { NestIcon } from '@/assets/NestIcon';
import { NextIcon } from '@/assets/NextIcon';
import { NodeIcon } from '@/assets/NodeIcon';
import { ReactIcon } from '@/assets/ReactIcon';
import { TechItem } from './components/TechItem';

const techs = [
  {
    icon: <ReactIcon />,
    title: 'ReactJS',
    value: 95,
  },
  {
    icon: <ReactIcon />,
    title: 'React Native',
    value: 75,
  },
  {
    icon: <ElectronIcon />,
    title: 'Electron',
    value: 90,
  },
  {
    icon: <NextIcon />,
    title: 'NextJS',
    value: 95,
  },
  {
    icon: <NodeIcon />,
    title: 'Node.js',
    value: 80,
  },
  {
    icon: <NestIcon />,
    title: 'NestJS',
    value: 70,
  },
];

export const Techs: React.FC = () => {
  return (
    <div className="w-full max-w-[1320px] mt-8">
      <h4>Minhas tecnologias</h4>

      <div className="flex flex-col gap-8 mt-8">
        {techs.map((tech) => (
          <TechItem key={tech.title} {...tech} />
        ))}
      </div>
    </div>
  );
};
