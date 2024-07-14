export const Cover: React.FC = () => {
  return (
    <div className="relative h-dvh bg-gradient-to-t from-primary-dark to-background">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/cover-illustration.png"
        alt="ilustração"
        style={{ objectFit: 'fill' }}
        className="w-full h-1/3 absolute bottom-0"
      />
    </div>
  );
};
