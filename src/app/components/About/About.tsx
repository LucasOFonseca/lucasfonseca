import Image from 'next/image';

export const About: React.FC = () => {
  return (
    <div className="w-full max-w-[1320px] flex justify-between items-center">
      <div className="xl:max-w-[725px]">
        <h2 className="mb-8">Hello world!</h2>

        <Image
          src="/Photo.png"
          width={200}
          height={300}
          className="block mx-auto xl:hidden"
          alt="Lucas Fonseca"
        />

        <p>
          Olá, sou Lucas Oliveira Fonseca, um entusiasta de tecnologia e design,
          e amante da cultura pop. Meu foco atual é o desenvolvimento de
          aplicações front-end utilizando ReactJS, NextJS e Electron, além disso
          também tenho experiência no desenvolvimento mobile com React Native e
          back-end com Node.js. Sou Bacharel em Sistemas de Informação pela
          Universidade Estatual de Goiás (UEG) e moro em Goianésia-GO.
        </p>
        <br />
        <p>
          Minha paixão por tecnologia é alimentada pela crença no seu poder de
          mudar o mundo, solucionando problemas, promovendo melhorias e unindo
          pessoas. Saber que minhas linhas de código contribuem para isso é
          extremamente gratificante.
        </p>
        <br />
        <p>
          Estou sempre em busca de novos conhecimentos e aprimoramento das
          habilidades que já possuo, pois acredito que a sabedoria é o bem mais
          precioso que alguém pode ter. A cada novo aprendizado, sinto-me mais
          capacitado para fazer a diferença no mundo através da tecnologia.
        </p>
      </div>

      <Image
        src="/Photo.png"
        width={384}
        height={424}
        className="hidden xl:block"
        alt="Lucas Fonseca"
      />
    </div>
  );
};
