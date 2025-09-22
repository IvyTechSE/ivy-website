import { IconRocket } from '@tabler/icons-react';
import React from 'react';



import { Container } from '../../container';
import { Heading } from '../../elements/heading';
import { Subheading } from '../../elements/subheading';
import { GradientContainer } from '../../gradient-container';
import { Card, CardDescription, CardTitle } from './card';
import { FeatureIconContainer } from './feature-icon-container';
import { StrapiImage } from '@/components/ui/strapi-image';

const wordToNumber: { [key: string]: number } = {
  one: 1,
  two: 2,
  three: 3,
};

function convertWordToNumber(word: string) {
  return wordToNumber[word.toLowerCase()] || null;
}

export const Features = ({
  heading,
  sub_heading,
  image_card1,
  image_card2,
  image_card3,
}: {
  heading: string;
  sub_heading: string;
  image_card1: any;
  image_card2: any;
  image_card3: any;
}) => {
  return (
    <GradientContainer className="md:my-20">
      <Container className="py-20 max-w-7xl mx-auto  relative z-40">
        <FeatureIconContainer className="flex justify-center items-center overflow-hidden">
          <IconRocket className="h-6 w-6" />
        </FeatureIconContainer>
        <Heading className="pt-4">{heading}</Heading>
        <Subheading className="max-w-3xl mx-auto">{sub_heading}</Subheading>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 py-10">
          {image_card1 && (
            <Card
              className={`md:col-span-${convertWordToNumber(image_card1?.span) || '1'}`}
            >
              {image_card1.image && (
                <StrapiImage
                  src={image_card1?.image?.url}
                  alt={`${image_card1.image?.alt}`}
                  width={400}
                  height={100}
                  className="rounded-t-lg object-cover w-full h-48"
                />
              )}
              <CardTitle>{image_card1.title}</CardTitle>
              <CardDescription>{image_card1.description}</CardDescription>
            </Card>
          )}

          {image_card2 && (
            <Card
              className={`md:col-span-${convertWordToNumber(image_card2?.span) || '2'}`}
            >
              <CardTitle>{image_card2.title}</CardTitle>
              <CardDescription>{image_card2.description}</CardDescription>
            </Card>
          )}
          {image_card3 && (
            <Card
              className={`md:col-span-${convertWordToNumber(image_card3?.span) || '3'}`}
            >
              <CardTitle>{image_card3.title}</CardTitle>
              <CardDescription>{image_card3.description}</CardDescription>
            </Card>
          )}
        </div>
      </Container>
    </GradientContainer>
  );
};
