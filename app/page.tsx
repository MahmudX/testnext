import Image from "next/image";
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'My Page Title',
  description: 'This is the meta description for My Page',
  keywords: ['keyword1', 'keyword2', 'keyword3'],
}

export default function Home() {
  return (
    <>
      <h1>
        <Image src="https://ahrefs.com/blog/wp-content/themes/Ahrefs-4/images/promo/evolve-2024.png" alt="Picture of the author" width={500} height={500} />
      </h1>

    </>
  );
}

