import Image from "next/image";

const HomePageHero = () => {
    return (
        <>
            <div className="hidden md:block bg-blue relative py-[90px] w-full h-fit grad-bar-t">
                <Image src={"/pipe-hero-desktop.svg"} alt={""} width={967} height={203}
                    className="absolute left-0 bottom-0" />
                <div className="flex flex-col gap-6 ml-[80px] z-10">
                    <span className="text-white text-7xl">
                        Elevate Your Business with
                        <br />
                        Bespoke Software Solution
                    </span>
                    <span className="text-white text-lg font-normal">
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


            <div className="flex flex-col gap-2 md:hidden bg-blue w-full relative h-fit grad-bar-t">
                <div className="px-5 pt-10 flex flex-col gap-6 relative">
                    <Image src={"/pipe-hero-mobile.svg"} alt={""} width={385} height={295} className="absolute left-0 bottom-5" />
                    <span className="text-white text-3xl">
                        Elevate Your Business <br />
                        with Bespoke Software <br />
                        Solution
                    </span>
                    <span className="text-white text-lg font-normal">
                        We are committed to providing you with the best software solutions for your business
                    </span>
                    <div className="flex gap-3 mx-auto">
                        <button className="cta-btn-filled">
                            <span>Contact Us</span>
                        </button>
                        <button className="cta-btn">
                            <span>Start Free</span>
                        </button>
                    </div>
                </div>
                <Image src={"/pattern-hero-mobile.svg"} alt="" height={374} width={375} className="mx-auto" />
            </div>
        </>

    );
}



export default HomePageHero;