import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";


const Link = ({ page, selectedPage, setSelectedPage}) => {
    const lowerCasePage = page.toLowerCase();
    return (
        <AnchorLink
            className={ `${selectedPage === lowerCasePage ? "text-yellow" : ""} hover:text-yellow transition duration-500`} href={`#${lowerCasePage}`} onClick={() => setSelectedPage(lowerCasePage)}
        >{page}</AnchorLink>
    )
}


const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
    const [isMenuToggled, setIsMenuToggled] = useState(false);
    const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");
    const navbarBackground = isTopOfPage ? "" : "bg-[#120026]";

    return (<nav className={`${navbarBackground} z-40 w-full fixed top-0 py-6`}>
        <div className="flex items-center justify-between mx-auto w-5/6">
            <h4 className="font-playfair text-3xl font-bold ">Toheeb</h4>

            {/* desktop nav */}

            {isAboveSmallScreens ? (
                <div className="flex justify-between gap-16 font-opensans text-sm font-semibold">
                    <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                    <Link page="Skills" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                    <Link page="Projects" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                    {/* <Link page="Testimonials" selectedPage={selectedPage} setSelectedPage={setSelectedPage} /> */}
                    <Link page="Contact" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                </div>
            ) : (<button className="rounded-full bg-[#090026] p-2" onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <img alt="menu-icon" src="../assets/menu-icon.svg" />
            </button>)}

            {/* MOBILE MENU POPUP */}
            {!isAboveSmallScreens && isMenuToggled && (

<motion.div
className="fixed right-0 bottom-0 h-full bg-blue w-[300px]"
initial={{
    opacity: 0,
    x: 50,
}}
animate={{
    opacity: 1,
    x: 0,
    transition: {
        duration: 0.8,
        ease: [0, 0.71, 0.2, 1.01]
    },
}}
exit={{
    opacity: 0,
    x: 50,
    transition: {
        duration: 0.8,
        ease: [0, 0.71, 0.2, 1.01]
    }
}}
>

                <div className="">
                        {/* CLOSE ICON  */}
                        <div className="flex justify-end p-12">
                            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                            <img alt="close-icon" src="../assets/close-icon.svg" />
                            </button>
                        </div>

                        {/* MENU ITEMS */}
                    <div className="flex flex-col gap-10 ml-[33%] text-2xl text-deep-blue justify-between space-y-5">
                        <div className="" onClick={() => setIsMenuToggled(!isMenuToggled)} >
                        <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                        </div>

                        <div className="" onClick={() => setIsMenuToggled(!isMenuToggled)} >
                        <Link page="Skills" selectedPage={selectedPage} setSelectedPage={setSelectedPage} onClick={() => setIsMenuToggled(!isMenuToggled)} />
                        </div>

                        <div className="" onClick={() => setIsMenuToggled(!isMenuToggled)} >
                        <Link page="Projects" selectedPage={selectedPage} setSelectedPage={setSelectedPage} onClick={() => setIsMenuToggled(!isMenuToggled)} />
                        </div>
                        {/* <Link page="Testimonials" selectedPage={selectedPage} setSelectedPage={setSelectedPage} onClick={() => setIsMenuToggled(!isMenuToggled)} /> */}

                        <div className="" onClick={() => setIsMenuToggled(!isMenuToggled)} >
                        <Link page="Contact" selectedPage={selectedPage} setSelectedPage={setSelectedPage} onClick={() => setIsMenuToggled(!isMenuToggled)} />
                        </div>
                    </div>
                </div>
                </motion.div>
            )}
        </div>
        </nav>);
};
 
export default Navbar;