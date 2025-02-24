export const Cover: React.FC = () => {
  return (
    <div className="relative h-dvh flex justify-center bg-gradient-to-t from-primary-dark to-background px-4">
      <div className="relative w-full h-2/3 flex flex-col justify-center max-w-[1320px]">
        <span className="absolute top-8 right-0 w-[240px] h-[240px] rounded-full bg-background drop-shadow-[0_2px_4px_#721D91]" />

        <h1 className="relative opacity-0 text-white animate-text-intro duration-1000 fill-mode-forwards">
          Lucas Fonseca
        </h1>
        <h2 className="relative opacity-0 animate-text-intro duration-1000 delay-100 fill-mode-forwards">
          Dev Front-End
        </h2>
      </div>

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/cover-illustration.png"
        alt="ilustração"
        className="w-full h-1/3 absolute bottom-0 object-cover md:object-fill"
      />
    </div>
  );
};
