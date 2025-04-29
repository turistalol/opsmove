import { Hero } from '@/components/home/Hero';
import { Features } from '@/components/home/Features';
import { HowItWorks } from '@/components/home/HowItWorks';
import { Security } from '@/components/home/Security';
import { Testimonials } from '@/components/home/Testimonials';
import { DownloadApp } from '@/components/home/DownloadApp';

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      <Security />
      <Testimonials />
      <DownloadApp />
    </>
  );
}