import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Layout from '../components/Layout';
import Link from 'next/link';
import Modal from '../components/Modal/Modal';

const navigation = [
  { name: 'Offerings', href: '#' },
  { name: 'Shedule', href: '/schedule' },
  { name: 'Blog', href: '#' },
  { name: 'Contact', href: '/contact' },
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <Layout>
      <div className="relative isolate overflow-hidden bg-white py-24 sm:py-32">
        <img
          src="https://ipfs.filebase.io/ipfs/QmTP3TCgFH8u7Z8ogXQXeMowFwUgrRT6GUvRCcj9U3m91x"
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div
          className="absolute -top-80 left-[max(6rem,33%)] -z-10 transform-gpu blur-3xl sm:left-1/2 md:top-20 lg:ml-20 xl:top-3 xl:ml-56"
          aria-hidden="true"
        >
          <div
            className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
            style={{
              clipPath:
                'polygon(63.1% 29.6%, 100% 17.2%, 76.7% 3.1%, 48.4% 0.1%, 44.6% 4.8%, 54.5% 25.4%, 59.8% 49.1%, 55.3% 57.9%, 44.5% 57.3%, 27.8% 48%, 35.1% 81.6%, 0% 97.8%, 39.3% 100%, 35.3% 81.5%, 97.2% 52.8%, 63.1% 29.6%)',
            }}
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-right text-gray-900 sm:text-4xl">
              Know Shift Own
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-700"></p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:mt-10 lg:max-w-none lg:grid-cols-12">
            <div className="relative lg:order-last lg:col-span-5">
              <svg
                className="absolute -top-[40rem] left-1 -z-10 h-[64rem] w-[175.5rem] -translate-x-1/2 stroke-gray-900/10 [mask-image:radial-gradient(64rem_64rem_at_111.5rem_0%,white,transparent)]"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="e87443c8-56e4-4c20-9111-55b82fa704e3"
                    width={200}
                    height={200}
                    patternUnits="userSpaceOnUse"
                  >
                    <path d="M0.5 0V200M200 0.5L0 0.499983" />
                  </pattern>
                </defs>
                <rect
                  width="100%"
                  height="100%"
                  strokeWidth={0}
                  fill="url(#e87443c8-56e4-4c20-9111-55b82fa704e3)"
                />
              </svg>
              <div className="mt-40 flex gap-x-4">
                <img
                  src="https://ipfs.filebase.io/ipfs/QmR8mgHQzktxvdNw61ShtjyotzmAFE5XwMGdpgAwbYAke5"
                  alt=""
                  className=""
                />
              </div>
            </div>
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:col-span-7">
              <h2 className="mt-32 text-2xl font-bold tracking-tight text-gray-900">
                KNOW
              </h2>
              <p className="mt-8">
                Your Body - Discover the science and innate treasures of your
                well-being and be the power you and your vision need to succeed.
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                SHIFT
              </h2>
              <p className="mt-8">
                Your Mind - Transform your standard operating system into the
                unique set of habits and strategies for your exponential growth.
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                OWN
              </h2>
              <p className="mt-8">
                Your Future - Empowering you, your business, and your vision for
                sustained growth, profitability, and impact.
              </p>
            </div>
          </div>
        </div>
      </div>
      )
    </Layout>
  );
}