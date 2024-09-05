import Image from "next/image";

const HomePageHero = () => {
    return (
        <div className="bg-blue relative py-[90px] w-full h-fit hero-desktop">
            <Image src={"/pipe-hero-desktop.svg"} alt={""} width={967} height={203}
                className="absolute left-0 bottom-0" />
            <div className="flex flex-col gap-6 ml-[80px] z-10">
                <span className="text-white text-[64px]">
                    Elevate Your Business with
                    <br />
                    Bespoke Software Solution
                </span>
                <span className="text-white text-xl font-normal">
                    We are committed to providing you with the best software solutions for your business
                </span>
                <span className="flex gap-6">
                    <button className="cta-btn-filled">
                        Contact Us
                    </button>
                    <button className="cta-btn">
                        Start Free
                    </button>
                </span>
            </div>
            <Image src={"/pattern-hero-desktop.svg"} alt="" height={473} width={475} className="absolute right-0 bottom-0" />
        </div>
    );
}



export default HomePageHero;