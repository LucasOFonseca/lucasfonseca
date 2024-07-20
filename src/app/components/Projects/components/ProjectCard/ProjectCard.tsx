'use client';

/* eslint-disable @next/next/no-img-element */
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Project } from '../../Projects';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="relative w-[500px] h-[310px] rounded-[8px] overflow-hidden group">
      <img
        className="h-full w-full object-cover transition-all ease-in-out duration-300 group-hover:scale-110 group-hover:blur-sm"
        src={project.cover}
        alt={project.title}
      />

      <div className="absolute top-0 h-full w-full flex flex-col justify-end gap-2 p-4 bg-gradient-to-t from-[rgba(0,0,0,0.75)] to-[rgba(0,0,0,0.15)] transition-all ease-in-out duration-500 translate-y-[100%] opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
        <h4 style={{ color: '#fff' }}>{project.title}</h4>

        {project.tags.map((tag) => (
          <Badge key={tag}>{tag}</Badge>
        ))}

        <p>{project.description}</p>

        <div className="flex gap-2 mt-2">
          {project.github && (
            <Button
              variant="outline"
              className="w-full"
              onClick={() => window.open(project.github, '_blank')}
            >
              Ver repositório
            </Button>
          )}

          {project.url && (
            <Button
              className="w-full"
              onClick={() => window.open(project.url, '_blank')}
            >
              Visitar
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
