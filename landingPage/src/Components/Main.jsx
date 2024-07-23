const Main = () => {
    return (
        <div className="px-10 lg:px-44 flex flex-col-reverse lg:flex-row">
            <div className="flex flex-col justify-center lg:w-1/2">
                <h1 className="text-4xl lg:text-7xl font-bold font-[poppins] mt-10 lg:mt-20">Make</h1>
                <h1 className="text-4xl lg:text-7xl font-bold py-2 lg:py-5 font-[poppins]">remote work</h1>
                <p className="pt-8 lg:pt-16 pb-5 lg:pb-10 text-lg lg:text-xl text-customGray font-[epilogue]">
                    Get your team in sync, no matter your location.<br />
                    Streamline processes, create team rituals, and watch productivity soar.
                </p>
                <button className="bg-black text-white rounded-xl px-3 lg:px-5 py-3 lg:py-6 inline-block w-fit font-[poppins]">Learn more</button>
                <div className="grid grid-cols-2 lg:flex lg:justify-items-start lg:flex-row pt-10 lg:pt-20 pr-5 lg:pr-5">
                    <img className="w-48 lg:w-48 h-auto" src="https://i.postimg.cc/gJ9Y84m6/client-databiz.png" alt="Client Databiz" />
                    <img className="w-48 lg:w-48 h-auto" src="https://i.postimg.cc/15DDqYSD/client-audiophile.png" alt="Client Audiophile" />
                    <img className="w-48 lg:w-48 h-auto" src="https://i.postimg.cc/5ybQqfbv/client-meet.png" alt="Client Meet" />
                    <img className="w-48 lg:w-48 h-auto" src="https://i.postimg.cc/g2NsxByN/client-maker.png" alt="Client Maker" />
                </div>
            </div>
            <div className="p-4 mt-4 lg:w-1/2">
                <img className="hidden lg:block w-full h-auto" src="https://i.postimg.cc/0Nt97Bhf/image-hero-desktop.png" alt="Desktop Hero" />
                <img className="block lg:hidden w-full h-auto" src="https://i.postimg.cc/ZnYfhwwW/image-hero-mobile.png" alt="Mobile Hero" />
            </div>
        </div>
    );
}

export default Main;
