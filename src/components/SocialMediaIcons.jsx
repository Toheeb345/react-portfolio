const SocialMediaIcons = () => {
    return (
        <div className="flex justify-center md:justify-start md:my-10 my-5 md:gap-7 xs:gap-10">
            <a href="#" className=" hover:opacity-50 transition duration-500" target="_blank" rel="noreferrer">
                <img src="../assets/linkedin.png" alt="linkedin-link" />
            </a>
            <a href="#" className=" hover:opacity-50 transition duration-500" target="_blank" rel="noreferrer">
                <img src="../assets/twitter.png" alt="twitter-link" />
            </a>
            <a href="#" className=" hover:opacity-50 transition duration-500" target="_blank" rel="noreferrer">
                <img src="../assets/facebook.png" alt="facebook-link" />
            </a>
            <a href="#" className=" hover:opacity-50 transition duration-500" target="_blank" rel="noreferrer">
                <img src="../assets/instagram.png" alt="instagram-link" />
            </a>
        </div>
    );
}
 
export default SocialMediaIcons;