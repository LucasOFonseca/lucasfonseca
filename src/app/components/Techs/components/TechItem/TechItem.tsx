import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

interface TechItemProps {
  icon: React.ReactNode;
  title: string;
  value: number;
}

export const TechItem: React.FC<TechItemProps> = ({ icon, title, value }) => {
  return (
    <div className="flex items-center gap-4 w-full max-w-[750px]">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>{icon}</TooltipTrigger>

          <TooltipContent>{title}</TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <div className="h-2 w-full rounded-[4px] bg-surface">
        <div
          className="h-2 rounded-[4px] bg-secondary drop-shadow-[0_0_8px_rgba(130,244,162,0.5)]"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
};
