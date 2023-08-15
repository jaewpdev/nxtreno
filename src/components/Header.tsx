'use client';

import classNames from 'classnames';
import Logo from './Logo';
import Link from 'next/link';
import Button from './Button';
import { useState } from 'react';

interface INavItem {
  label: string;
  href: string;
}

const navItems: INavItem[] = [
  {
    label: 'Problem',
    href: '/problem',
  },
  {
    label: 'Service',
    href: '/service',
  },
  {
    label: 'Testimonials',
    href: '/testimonials',
  },
];

function HamburgerButton({
  openMobileMenu,
  setOpenMobileMenu,
}: {
  openMobileMenu: boolean;
  setOpenMobileMenu: (open: boolean) => void;
}) {
  return (
    <button
      type="button"
      className="ml-auto block lg:hidden z-[20]"
      onClick={() => setOpenMobileMenu(!openMobileMenu)}
    >
      {!openMobileMenu ? (
        <div className="flex flex-col items-end justify-between w-8 h-4">
          <div className="bg-brand-black h-[2px] w-full rounded" />
          <div className="bg-brand-black h-[2px] w-2/3 rounded" />
          <div className="bg-brand-black h-[2px] w-1/2 rounded" />
        </div>
      ) : (
        <div className="relative w-8 h-8">
          <div className="absolute inset-0 bg-brand-black h-[2px] w-full rounded transform rotate-45 top-1/2" />
          <div className="absolute inset-0 bg-brand-black h-[2px] w-full rounded transform -rotate-45 top-1/2" />
        </div>
      )}
    </button>
  );
}

function OpenMenu({}) {
  return (
    <div className="hidden lg:flex ml-auto items-center justify-center gap-8">
      {navItems.map((item) => {
        const { label, href } = item;
        return (
          <Link
            className="font-medium text-lg tracking-tight"
            href={href}
            key={href}
          >
            {label}
          </Link>
        );
      })}

      <Button
        href="/contact"
        primaryText="You Ready?"
        secondaryText="Let's Go!"
        className="ml-4"
      />
    </div>
  );
}

function Mobilemenu({
  setOpenMobileMenu,
}: {
  setOpenMobileMenu: (open: boolean) => void;
}) {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-[10] bg-white lg:hidden flex flex-col items-center justify-center gap-4">
      {navItems.map((item) => {
        const { label, href } = item;
        return (
          <a
            key={href}
            href={href}
            className="font-medium text-lg tracking-tight"
            onClick={() => setOpenMobileMenu(false)}
          >
            {label}
          </a>
        );
      })}
      <Button
        href="/contact"
        primaryText="You Ready?"
        secondaryText="Let's Go!"
        className="mt-8"
      />
    </div>
  );
}

export default function Header({
  variant = 'light',
}: {
  variant?: 'dark' | 'light';
}) {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  return (
    <div className="">
      <div
        className={classNames('py-8 flex items-center justify-center', {
          'text-white': variant === 'dark',
          'text-brand-black': variant === 'light',
        })}
      >
        <Logo />
        <HamburgerButton
          openMobileMenu={openMobileMenu}
          setOpenMobileMenu={setOpenMobileMenu}
        />
        <OpenMenu />
        {openMobileMenu && <Mobilemenu setOpenMobileMenu={setOpenMobileMenu} />}
      </div>
    </div>
  );
}
