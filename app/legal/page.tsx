import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Copyrights and attributes - Pienteger',
    description: '...',
}
const Legal = () => {
    return (
        <>
            <div className="md:px-40 px-5 pt-10 pb-5 flex flex-col gap-2">
                <h1 className="font-bold text-3xl">Copyrights and attributes</h1>
                <p>
                    We relay on numerous open source and free products. But we believe in crediting them properly.
                </p>
                <h2 className="font-semibold text-2xl">This Website</h2>
                <p>
                    List of open source and free products used in this website:
                </p>
                <ul className="fs-1-5rem list-disc pl-4">
                    <li>
                        Sertifiket logo by <a className="font-semibold hover:underline" target="_blank" href="https://icons8.com">Icons8</a>
                    </li>
                </ul>
            </div >
        </>
    )
}
export default Legal;