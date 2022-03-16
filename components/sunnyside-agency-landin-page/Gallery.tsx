import useResponsiveWidth from 'hooks/useResponsiveWidth';
import Image from 'next/image';

import coneImg_desktop from 'public/images/sunnyside-agency-landing-page/desktop/image-gallery-cone.jpg';
import milkbottles_desktop from 'public/images/sunnyside-agency-landing-page/desktop/image-gallery-milkbottles.jpg';
import orange_desktop from 'public/images/sunnyside-agency-landing-page/desktop/image-gallery-orange.jpg';
import sugarcubes_desktop from 'public/images/sunnyside-agency-landing-page/desktop/image-gallery-sugarcubes.jpg';

import coneImg_mobile from 'public/images/sunnyside-agency-landing-page/mobile/image-gallery-cone.jpg';
import milkbottles_mobile from 'public/images/sunnyside-agency-landing-page/mobile/image-gallery-milkbottles.jpg';
import orange_mobile from 'public/images/sunnyside-agency-landing-page/mobile/image-gallery-orange.jpg';
import sugarcubes_mobile from 'public/images/sunnyside-agency-landing-page/mobile/image-gallery-sugarcubes.jpg';

// const imgs = [milkbottles, orange, coneImg, sugarcubes];

const Gallery = () => {
  const { elementRef, width } = useResponsiveWidth();
  const imgs =
    width > 600
      ? [milkbottles_desktop, orange_desktop, coneImg_desktop, sugarcubes_desktop]
      : [milkbottles_mobile, orange_mobile, coneImg_mobile, sugarcubes_mobile];

  return (
    <section ref={elementRef} className="flex md:flex-wrap">
      {imgs.map((img, index) => {
        return (
          <div key={index} className="w-1/4 md:w-half">
            <Image src={img} alt="" layout="responsive" />
          </div>
        );
      })}
    </section>
  );
};

export default Gallery;
