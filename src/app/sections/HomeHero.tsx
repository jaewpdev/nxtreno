import Image from 'next/image';

export default function HomeHero() {
  return (
    <section className="mt-16">
      <h1 className="text-h1-responsive xl:text-h1">
        Bringing your renovation expertise to the forefront.
      </h1>
      <h3 className="text-h3-responsive xl:text-h3 mt-8">
        Crafting compelling digital experiences for your remodeling business.
      </h3>

      <div className="relative w-full aspect-square lg:aspect-video rounded-[16px] lg:rounded-[32px] overflow-hidden mt-12 lg:mt-28">
        <Image
          src="/img--home-hero2.jpg"
          style={{ objectFit: 'cover' }}
          alt="Home Hero Image"
          layout="fill"
        />
      </div>
    </section>
  );
}
