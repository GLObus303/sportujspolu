import { Banner } from './Banner';
import { bannerData } from './bannerData';

export const BannerSection = () => (
  <section className="grid grid-cols-1 md:grid-cols-2 gap-5">
    {bannerData.map((content, index) => (
      <Banner
        variant={index === 0 ? 'primary' : 'secondary'}
        content={content}
        key={index}
      />
    ))}
  </section>
);
