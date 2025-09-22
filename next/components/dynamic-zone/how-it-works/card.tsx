'use client';

import React from 'react';

export const Card = ({
  title,
  description,
  index,
}: {
  title: string;
  description: string;
  index: number;
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 max-w-4xl mx-auto py-20">
      <p className="text-9xl font-bold text-neutral-900 mt-8">{'0' + index}</p>
      <div className="group p-8 rounded-md border border-neutral-800 bg-neutral-950  relative z-40 col-span-2">
        <p className="text-xl font-bold relative z-20 mt-2">{title}</p>
        <p className="text-neutral-400 mt-4 relative z-20">{description}</p>
      </div>
    </div>
  );
};
