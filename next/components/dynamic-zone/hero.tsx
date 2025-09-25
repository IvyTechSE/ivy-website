'use client';

import React from 'react';

import { Heading } from '../elements/heading';
import { Subheading } from '../elements/subheading';

export const Hero = ({
  heading,
  sub_heading,
}: {
  heading: string;
  sub_heading: string;
}) => {
  return (
    <div className="h-screen overflow-hidden relative flex mt-60 text-left max-w-7xl mx-auto">
      <div className="flex flex-col">
        <Heading
          as="h1"
          className="text-4xl md:text-4xl lg:text-8xl font-semibold max-w-7xl mx-auto mt-6 relative z-10"
        >
          {heading}
        </Heading>
        <Subheading className="mt-2 md:mt-6 md:text-xl">
          {sub_heading}
        </Subheading>
      </div>
    </div>
  );
};
