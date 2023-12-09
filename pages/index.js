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
        <div className="grid grid-cols-3 grid-rows-3">
          <div className="max-w-xl text-base leading-7 text-gray-700 lg:col-span-5 px-12">
            <h2 className="mt-14 text-2xl font-bold tracking-tight text-gray-900">
              KNOW Your Body
            </h2>
            <p className="mt-8">
              Discover the science and innate treasures of your
              well-being and be the power you and your vision need to succeed.
            </p>
          </div>
          <div className="col-start-2 px-12">
            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
              SHIFT Your Mind
            </h2>
            <p className="mt-8">
              Transform your standard operating system into the
              unique set of habits and strategies for your exponential growth.
            </p>
          </div>
          <div className="row-start-3 col-start-3 px-12">
            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
              OWN Your Future
            </h2>
            <p className="mt-8">
              Empowering you, your business, and your vision for
              sustained growth, profitability, and impact.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <img
            className="mt-20 md:h-2xl md:w-2xl object-cover"
            src=""
            alt=""
          />
        </div>
      </div>
      <div className="bg-white px-6 py-32 lg:px-8">
        <img
          className="rounded-xl bg-gray-50 object-cover"
          src="https://ipfs.filebase.io/ipfs/QmNqMvaABnFo2QnkDLzhsaD3NDHWwo7x9GTTmevmm4sr8t"
          alt=""
        />
      </div>
    </Layout>
  );
}
