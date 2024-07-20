import { ProjectCard } from './components/ProjectCard';

export interface Project {
  title: string;
  cover: string;
  url?: string;
  github?: string;
  tags: string[];
  description: string;
}

const projects: Project[] = [
  {
    title: 'Blue Team Tech',
    cover: '/blue-team-tech.png',
    url: 'https://blueteamtech.vercel.app',
    tags: ['NextJS'],
    description:
      'Landing page profissional desenvolvida para divulgar os trabalhos de um grupo de desenvolvedores do qual faço parte.',
  },
  {
    title: 'Podcastr',
    cover: '/podcastr.png',
    url: 'https://podcastr-one-ivory.vercel.app',
    github: 'https://github.com/LucasOFonseca/Podcastr',
    tags: ['NextJS'],
    description:
      'Projeto de um reprodutor de podcasts desenvolvido com NextJS completamente responsivo e com suporte a tema escuro.',
  },
  {
    title: 'Athena - Gestão Acadêmica',
    cover: '/athena.png',
    url: 'https://athena-nu-pied.vercel.app',
    github: 'https://github.com/LucasOFonseca/TCC-Athena',
    tags: ['NextJS'],
    description:
      'Projeto entregue como Trabalho de Conclusão de Curso. Trata-se de um sistema de gestão acadêmica completo.',
  },
];

export const Projects: React.FC = () => {
  return (
    <div className="w-full max-w-[1320px] mt-8">
      <h2>Meus projetos</h2>

      <div className="flex justify-center gap-8 flex-wrap mt-8">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
};
