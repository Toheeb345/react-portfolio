import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
    return(
    <footer className="h-64 bg-red pt-10">
        <div className=" w-5/6 mx-auto">
            <SocialMediaIcons />
            <div className="md:flex justify-center md:justify-between text-center">
                <p className="font-playfair font-semibold text-yellow text-2xl">OMOTOSHO TOHEEB</p>
                <p className=" font-playfair text-xl text-yellow">©2023 TOHEEB. All Rights reserved.</p>
            </div>
        </div>
    </footer>
    )
    
}
 
export default Footer;