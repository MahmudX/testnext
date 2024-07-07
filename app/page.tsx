
import Image, { StaticImageData } from "next/image";
import React from 'react';
import full_dhaka_poster from '../assets/full_dhaka_poster.jpg';
import kk_icon from '../assets/kk_icon.png';

import reactlogo from "../assets/react.svg";
import dotnetlogo from "../assets/dotnet.jpeg";
import pythonlogo from "../assets/python.svg";
import sqlserverlogo from "../assets/sqlserver.svg";
import vuelogo from "../assets/vue.svg";
import javascriptlogo from "../assets/javascript.svg";
import wordpresslogo from "../assets/wordpress.svg";
import azurelogo from "../assets/azure.svg";
import ProductCard from "@/components/ProductCard";

import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Pienteger® - A software company that you can trust.",
  description: "A software company that you can trust.",
};

const Home: React.FC = () => {

  return (
    <>
      <div id="mainHero" className="relative flex items-center justify-center h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 md:px-8 lg:px-16">
          <h2 className="text-white mb-6">
            <span className="block text-6xl lg:text-9xl font-bold mb-4">Tailored</span>
            <span className="block text-2xl lg:text-4xl">Software development</span>
            <span className="block text-6xl lg:text-9xl font-bold mt-4">for your</span>
            <span className="block text-6xl lg:text-9xl font-bold mt-4">specific<br /> need</span>
          </h2>
          <p className="text-white text-lg lg:text-xl mb-8 max-w-3xl">
            Here at Pienteger®, we are committed to providing you with the best software solutions for your business.
            <br />
            Agile, secure, scalable, and reliable.
          </p>
          <a href="mailto:pienteger@gmail.com" className="flex items-center justify-center gap-2 px-6 py-3 bg-yellow-400 text-gray-900 rounded-full font-bold hover:bg-yellow-500 transition duration-300 ease-in-out">
            Start for free
          </a>
        </div>
      </div>



      <div className="w-full min-h-screen bg-gradient-to-r from-purple-400 to-pink-500 flex items-center justify-center p-8">
        <div className="max-w-3xl bg-white p-10 rounded-lg shadow-lg">
          <p className="font-cal-sans text-center mb-6">
            <span className="text-9xl block text-purple-700">Say goodbye</span>
            <span className="text-5xl block mt-4 text-gray-800">to your grandpa-looking application.</span>
          </p>
          <p className="text-xl text-gray-600 text-center">
            Our UI/UX experts will make sure your application looks modern and user-friendly.
          </p>
        </div>
      </div>


      <div className='px-2 md:px-40 py-10'>
        <h1>Our Products -</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <ProductCard name="Sertifiket&trade;"
            icon="https://sertifiket.com/favicon.png"
            tagline="Proof of you"
            description="Comprehensive solution for digital identity, certificates, and documents."
            link='https://sertifiket.com'
            linkText='Visit Website' />

          <ProductCard name="Kothakunjo&trade;"
            icon={kk_icon.src}
            tagline="Learn more, digitally"
            description="All-in-one digital platform for e-books, audiobooks, and courses."
            link='https://kothakunjo.com'
            linkText='Visit Website' />

          <ProductCard name="Placeia&trade;"
            icon="https://placeia.com/favicon.svg"
            tagline="Find a place, make it home"
            description="One-stop solution for real estate, rental, and property management."
            link='https://placeia.com'
            linkText='Visit Website' />
        </div>
      </div>

      <div className='px-2 md:px-40 py-10'>
        <h1>Open source -</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <ProductCard name="QuranLib"
            icon="https://www.nuget.org/Content/gallery/img/default-package-icon.svg"
            tagline=".NET Lib for Quran app development"
            description="A portable Quran library that gives read-only access to the entire Holy Quran."
            link='https://www.nuget.org/packages/Pienteger.QuranLib/7.0.1' />
        </div>
      </div>
      <div className='px-2 md:px-40 py-10'>
        <h1>Technologies we work with</h1>
        <div className='flex flex-row justify-between items-center'>
          <Image src={dotnetlogo} className='brand-icon-28' width="0" height="0" sizes="100vw"
            alt='Dotnet' title='Dotnet' />
          <Image src={sqlserverlogo} className='brand-icon-28' width="0" height="0" sizes="100vw"
            alt='Microsoft SQL Server' title='Microsoft SQL Server' />
          <Image src={azurelogo} className='brand-icon-28' width="0" height="0" sizes="100vw"
            alt='Azure' title='Azure' />
          <Image src={javascriptlogo} className='brand-icon-28' width="0" height="0" sizes="100vw"
            alt='JavaScript' title='JavaScript' />
          <Image src={vuelogo} className='brand-icon-28' width="0" height="0" sizes="100vw"
            alt='Vue.js' title='Vue.js' />
          <Image src={reactlogo} className='brand-icon-28' width="0" height="0" sizes="100vw"
            alt='React' title='React' />
          <Image src={pythonlogo} className='brand-icon-28' width="0" height="0" sizes="100vw"
            alt='Python' title='Python' />
          <Image src={wordpresslogo} className='brand-icon-28' width="0" height="0" sizes="100vw"
            alt='Wordpress' title='wordpress' />
        </div>
      </div>
    </>
  );
}


export default Home;