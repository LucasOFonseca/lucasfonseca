import { EmailIcon } from '@/assets/EmailIcon';
import { GitHubIcon } from '@/assets/GitHubIcon';
import { LinkedInIcon } from '@/assets/LinkedInIcon';
import { PhoneIcon } from '@/assets/PhoneIcon';

export const Footer: React.FC = () => {
  return (
    <div className="w-full max-w-[1320px] flex flex-col gap-8 sm:flex-row sm:justify-between sm:items-center mt-32 mb-16 pt-8 pb-12 border-b">
      <div className="flex flex-col gap-4">
        <h6 className="text-white font-semibold">Contatos</h6>

        <div className="flex items-center gap-4">
          <PhoneIcon /> <a href="tel:+55 62 985320242">(62) 98532-0242</a>
        </div>

        <div className="flex items-center gap-4">
          <EmailIcon />{' '}
          <a href="mailto:lucasofonseca.dev@gmail.com">
            lucasofonseca.dev@gmail.com
          </a>
        </div>
      </div>

      <div className="flex gap-4 justify-center">
        <a
          href="https://github.com/LucasOFonseca"
          target="_blank"
          className="bg-primary p-3 rounded-full"
        >
          <GitHubIcon />
        </a>

        <a
          href="https://www.linkedin.com/in/lucas-fonseca-138b57200/"
          target="_blank"
          className="bg-primary p-3 rounded-full"
        >
          <LinkedInIcon />
        </a>
      </div>
    </div>
  );
};
