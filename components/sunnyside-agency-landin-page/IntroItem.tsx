import Image from 'next/image';

import useResponsiveWidth from 'hooks/useResponsiveWidth';

interface PropsType {
  isPhotography?: boolean;
  imgSrc: StaticImageData;
  title: string;
  children: React.ReactNode;
  className?: string;
}

const IntroItem = ({ isPhotography, imgSrc, title, children, className }: PropsType) => {
  const { elementRef, width } = useResponsiveWidth<HTMLDivElement>();

  const imgRatio = imgSrc.height / imgSrc.width;
  const colorClass = isPhotography ? 'photography' : 'graphic-design';

  return (
    <div className={`root relative flex w-half justify-center md:w-full ${className} ${colorClass}`}>
      <div ref={elementRef} className="absolute top-0 -z-10 w-full">
        <Image src={imgSrc} alt="" layout="responsive" />
      </div>

      <div className="content-box px-20 text-center lg:px-5">
        <h2 className="font-fraunces text-2xl font-extrabold capitalize md:mb-10 md:text-4xl">{title}</h2>
        <p className="md:text-xl">{children}</p>
      </div>

      <style jsx>{`
        .root {
          min-height: ${width * imgRatio}px;
        }

        .content-box {
          padding-top: ${0.6 * width * imgRatio}px;
        }

        .graphic-design {
          color: hsl(167, 40%, 24%);
        }

        .photography {
          color: hsl(198, 62%, 26%);
        }
      `}</style>
    </div>
  );
};

export default IntroItem;
