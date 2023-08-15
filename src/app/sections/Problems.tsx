'use client';

import IconAlarmOff from '../../../public/icon--alarm-off.svg';
import IconExpressionlessFace from '../../../public/icon--expressionless-face.svg';
import IconWidget from '../../../public/icon--widget.svg';

interface IPainPoint {
  Icon: any;
  header: string;
  description: string;
  bg: string;
}

function PainPointCard({ Icon, header, description, bg }: IPainPoint) {
  return (
    <div
      className={`${bg} flex flex-grow w-full lg:w-1/3 flex-col p-8 rounded-[32px] lg:aspect-square justify-center`}
    >
      <Icon className="w-12 h-12 mb-6" />
      <h4 className="text-h4 mb-2">{header}</h4>
      <p className="text-p">{description}</p>
    </div>
  );
}

export default function Problems() {
  const painPoints: IPainPoint[] = [
    {
      Icon: IconWidget,
      header: 'Marketing Overwhelm',
      description:
        'Struggling to navigate the complex digital marketing landscape while keeping up with your renovation projects.',
      bg: 'bg-brand-purple',
    },
    {
      Icon: IconAlarmOff,
      header: 'Time Crunch',
      description:
        'The challenge of finding enough time to master online marketing strategies without sacrificing your craft.',
      bg: 'bg-brand-beige',
    },
    {
      Icon: IconExpressionlessFace,
      header: 'Lead Quality & Conversion',
      description:
        'Difficulty in generating high-quality leads that turn into valued clients due to limited or ineffective marketing efforts.',
      bg: 'bg-brand-pink',
    },
  ];

  return (
    <section className="mt-32 max-w-[1200px] mx-auto">
      <span className="text-span">Problems</span>
      <h2 className="text-h2-responsive lg:text-h2 mt-8 max-w-[32ch]">
        Tackling Your Renovation Challenges Head-On: When Marketing Takes a
        Backseat.
      </h2>

      <div className="flex flex-col lg:flex-row  gap-6 mt-16">
        {painPoints.map((item) => (
          <PainPointCard key={item.header} {...item} />
        ))}
      </div>

      <p className="text-p-lg mt-16 mb-12">
        We get it - juggling renovations and online marketing is tough.
      </p>
      <p className="text-p-lg">
        But imagine if you could{' '}
        <span className="bg-brand-beige">
          dedicate your time fully to your craft without compromising on your
          online presence?
        </span>{' '}
        Stick with us, we&apos;re about to reveal how you can make this a
        reality.
      </p>
      <div className="mb-[1000px]" />
    </section>
  );
}
