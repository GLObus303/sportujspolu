import { Fragment } from 'react';
import { NextPage } from 'next';
import { notFound } from 'next/navigation';

import { SanitizedHTML } from '../../../components/SanitizedHTML';
import { Container } from '../../../components/Container';
import { MainHeading } from '../../../components/MainHeading';
import { TextContent } from '../../../components/TextContent/TextContent';
import { CTABanner } from '../../../components/CTABanner';
import { CalculatorWidget } from '../../../components/calculators/CalculatorWidget';
import { findCalculator, getAllCalculatorSlugs } from '../calculatorsData';
import { RelatedCalculators } from './RelatedCalculators';

type CalculatorPageProps = {
  params: Promise<{ slug: string }>;
};

export const generateStaticParams = () =>
  getAllCalculatorSlugs().map((slug) => ({ slug }));

export const generateMetadata = async ({ params }: CalculatorPageProps) => {
  const { slug } = await params;
  const calculator = findCalculator(slug);

  if (!calculator) {
    return;
  }

  return {
    title: calculator.title,
    description: calculator.description,
    alternates: { canonical: `/kalkulacky/${calculator.slug}` },
    openGraph: {
      type: 'website',
      title: `${calculator.title} | SportujSpolu`,
      description: calculator.description,
    },
  };
};

const CalculatorPage: NextPage<CalculatorPageProps> = async ({ params }) => {
  const { slug } = await params;
  const calculator = findCalculator(slug);

  if (!calculator) {
    return notFound();
  }

  return (
    <Container className="max-w-4xl">
      <MainHeading>{calculator.title}</MainHeading>
      <TextContent>
        <SanitizedHTML htmlContent={calculator.intro} className="mb-6" />
        {calculator.disclaimer && (
          <p className="text-sm text-dark-gray dark:text-text mb-6 p-4 rounded-md bg-soft-background">
            {calculator.disclaimer}
          </p>
        )}
      </TextContent>
      <CalculatorWidget slug={slug} />
      <TextContent>
        <section className="mt-12">
          <h2 className="text-2xl font-medium mb-6">Často kladené otázky</h2>
          <dl>
            {calculator.faq.map((item, index) => (
              <Fragment key={index}>
                <dt className="text-xl font-medium mb-2">
                  <span className="text-2xl pr-2 font-black text-pistachio [-webkit-text-stroke:1px_black]">
                    {index + 1}.
                  </span>
                  {item.question}
                </dt>
                <dd className="mb-5 text-dark-gray dark:text-text">
                  {item.answer}
                </dd>
              </Fragment>
            ))}
          </dl>
        </section>
      </TextContent>
      <RelatedCalculators
        slugs={calculator.relatedSlugs}
        currentSlug={calculator.slug}
      />
      <CTABanner title="Líbila se ti kalkulačka? Začni s námi sportovat!" />
    </Container>
  );
};

export default CalculatorPage;
