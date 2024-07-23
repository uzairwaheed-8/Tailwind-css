import React from 'react';

const Header = () => {
    const [open, setOpen] = React.useState(false);
    const handleClick = () => {
        setOpen(!open);
    }

    return (
        <>
            <header className="sticky top-0 flex justify-between p-4 border-b shadow-md min-w-max lg:p-10 bg-white">
                <div className="flex flex-row gap-4 lg:gap-10 flex-grow">
                    <h1 className="text-4xl lg:text-4xl font-bold pr-10 pt-2 font-[poppins] lg:pr-20 pl-2 lg:pl-5">snap</h1>
                    <nav className="hidden lg:flex justify-between pt-1.5 gap-4 lg:gap-10">
                        <div className="group relative">
                            <button className="text-customGray">Features{'\u2B9F'}</button>
                            <div className="absolute left-0 hidden group-hover:block bg-white shadow-lg rounded-md mt-2">
                                <a href="#" className="block px-4 py-2 text-customGray hover:bg-gray-100">Feature 1</a>
                                <a href="#" className="block px-4 py-2 text-customGray hover:bg-gray-100">Feature 2</a>
                            </div>
                        </div>
                        <div className="group relative">
                            <button className="text-customGray">Company{'\u2B9F'}</button>
                            <div className="absolute left-0 hidden group-hover:block bg-white shadow-lg rounded-md mt-2">
                                <a href="#" className="block px-4 py-2 text-customGray hover:bg-gray-100">CEO</a>
                                <a href="#" className="block px-4 py-2 text-customGray hover:bg-gray-100">Our Team</a>
                            </div>
                        </div>
                        <a href="#" className="text-customGray">Careers</a>
                        <a href="#" className="text-customGray">About</a>
                    </nav>
                </div>
                <div className="flex gap-2 lg:gap-10">
                    <button className="bg-transparent text-customGray px-2 lg:px-8">Login</button>
                    <button className="bg-transparent text-customGray border-2 border-customGray px-3 lg:px-6 py-1 rounded-xl">Register</button>
                </div>
                <div className='block ml-16 lg:hidden '>
                    <button onClick={handleClick} className='text-5xl'>
                        {!open ? "\u2630" : "\u00D7"}
                    </button>
                </div>
            </header>
            {open && (
                <nav className="absolute grid grid-cols-2 w-[540px]  w-min-full mt-6 top-16 left-0 right-0 z-50 bg-gray-900 text-white p-4 lg:hidden">
                    <div className="group relative">
                        <button className="block text-[#4BB1DA] py-2 px-4">Features{'\u2B9F'}</button>
                        <div className="absolute left-0 hidden group-hover:block bg-black shadow-lg rounded-md mt-2">
                            <a href="#" className="block px-4 py-2 text-[#4BB1DA] hover:bg-black">Feature 1</a>
                            <a href="#" className="block px-4 py-2 text-[#4BB1DA] hover:bg-black">Feature 2</a>
                        </div>
                    </div>
                    <div className="group relative">
                        <button className="block text-[#4BB1DA] py-2 px-4">Company{'\u2B9F'}</button>
                        <div className="absolute left-0 hidden group-hover:block bg-black shadow-lg rounded-md mt-2">
                            <a href="#" className="block px-4 py-2 text-[#4BB1DA] hover:bg-black">CEO</a>
                            <a href="#" className="block px-4 py-2 text-[#4BB1DA] hover:bg-black">Our Team</a>
                        </div>
                    </div>
                    <a href="#" className="block text-[#4BB1DA] py-2 px-4">Careers</a>
                    <a href="#" className="block text-[#4BB1DA] py-2 px-4">About</a>
                </nav>
            )}
        </>
    );
}

export default Header;
