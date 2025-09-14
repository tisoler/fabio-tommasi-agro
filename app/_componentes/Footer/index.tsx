'use client';
import dynamic from 'next/dynamic';

const Footer = dynamic(() => import('./Footer'), {
  ssr: false,
  loading: () => <div className='w-full h-[699px] md:h-[352px]' />
});

const ContenedorFooter = () => <Footer />;

export default ContenedorFooter;
