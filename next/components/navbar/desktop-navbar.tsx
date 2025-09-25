'use client';

import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { useState } from 'react';

import { NavbarItem } from './navbar-item';
import { Logo } from '@/components/logo';
import { ThemeToggle } from '@/components/theme-toggle';
import { cn } from '@/lib/utils';

type Props = {
  leftNavbarItems: {
    URL: string;
    text: string;
    target?: string;
  }[];
  rightNavbarItems: {
    URL: string;
    text: string;
    target?: string;
  }[];
  logo: any;
  locale: string;
};

export const DesktopNavbar = ({
  leftNavbarItems,
  rightNavbarItems,
  logo,
  locale,
}: Props) => {
  const { scrollY } = useScroll();

  const [scrolled, setScrolled] = useState(false);

  // Threshold after which navbar gets elevated styling
  const THRESHOLD = 100;
  useMotionValueEvent(scrollY, 'change', (value) => {
    // Avoid unnecessary renders when state already matches
    if (value > THRESHOLD && !scrolled) setScrolled(true);
    else if (value <= THRESHOLD && scrolled) setScrolled(false);
  });

  // NOTE: We intentionally avoid animating backgroundColor / boxShadow via Framer's JS animation
  // to reduce layout + style recalcs each frame. Instead we toggle utility classes that rely on
  // CSS transitions (GPU-friendly) for smoother performance and crisper text rendering.
  return (
    <motion.nav
      aria-label="Main navigation"
      data-scrolled={scrolled}
      className={cn(
        'w-full flex relative justify-between px-4 py-2.5 rounded-xl mx-auto transition-all duration-300',
        'will-change-[width] select-none',
        scrolled
          ? 'w-[80%] bg-card/80 dark:bg-card/70 backdrop-blur-sm border border-border/60 shadow-elevated'
          : 'w-full bg-transparent shadow-none'
      )}
    >
      <div className="flex flex-row gap-2 items-center">
        <Logo locale={locale} image={logo?.image} />
        <div className="flex items-center gap-1.5">
          {leftNavbarItems.map((item) => (
            <NavbarItem
              href={`/${locale}${item.URL}` as never}
              key={item.text}
              target={item.target}
            >
              {item.text}
            </NavbarItem>
          ))}
        </div>
        <ThemeToggle className="ml-2" />
      </div>
    </motion.nav>
  );
};
