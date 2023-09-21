'use client';

import { UserAccountNav } from '@/components/dashboard/user-account-nav';
import React from 'react';

type RootLayoutProps = {
  children: React.ReactNode;
};

const user = {
  name: 'Dira',
  email: 'dira@acme.com',
  image:
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
};

export default function DashboardLayout({ children }: RootLayoutProps) {
  return (
    <>
      <header className='z-40 border-b bg-background'>
        <div className='mx-20 flex h-20 items-center justify-between py-6'>
          <div className='flex gap-6 md:gap-10'>
            <a className='hidden items-center space-x-2 md:flex' href='/'>
              <svg
                width='180'
                height='60'
                viewBox='0 0 224 60'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                xmlnsXlink='http://www.w3.org/1999/xlink'
              >
                <rect width='224' height='60' fill='url(#pattern0)' />
                <defs>
                  <pattern
                    id='pattern0'
                    patternContentUnits='objectBoundingBox'
                    width='1'
                    height='1'
                  >
                    <use
                      xlinkHref='#image0_50_10176'
                      transform='matrix(0.00409644 0 0 0.0154515 -0.191828 -0.333333)'
                    />
                  </pattern>
                  <image
                    id='image0_50_10176'
                    width='281'
                    height='109'
                    xlinkHref='data:image/png;base64,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'
                  />
                </defs>
              </svg>
            </a>
            <nav className='hidden gap-6 md:flex'>
              <a
                className='flex items-center text-lg font-medium text-foreground/60 transition-colors hover:text-foreground/80 sm:text-sm'
                href='/#features'
              >
                Dashboard
              </a>
              <a
                className='flex items-center text-lg font-medium text-foreground/60 transition-colors hover:text-foreground/80 sm:text-sm'
                href='/#features'
              >
                Payment
              </a>
              <a
                className='flex items-center text-lg font-medium text-foreground/60 transition-colors hover:text-foreground/80 sm:text-sm'
                href='/pricing'
              >
                Product
              </a>
            </nav>
            <button className='flex items-center space-x-2 md:hidden'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
                className='lucide lucide-command'
              >
                <path d='M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z'></path>
              </svg>
              <span className='font-bold'>Menu</span>
            </button>
          </div>
          <nav>
            <UserAccountNav user={user} />
          </nav>
        </div>
      </header>
      {children}
    </>
  );
}
