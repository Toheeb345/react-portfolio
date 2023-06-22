import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
    return(
    <footer className=" bg-[#120026] py-8">
        <div className=" w-5/6 mx-auto md:flex md:flex-col justify-evenly items-center">
            {/* <SocialMediaIcons /> */}
            <div className="flex justify-center text-center">
                <p className=" font-playfair text-xl text-yellow">Copyright ©2023. All Rights reserved.</p>
            </div>
        </div>
    </footer>
    )
    
}
 
export default Footer;