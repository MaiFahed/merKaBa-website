import pyramidsVideo from "../assets/pyramids.mp4"
const Hero = () => {
    return (
        <div className="main">
            <div className="overlay"></div>
            <video src={pyramidsVideo} autoPlay muted loop playsInline />
            <div className="content">
                <h1>Welcome</h1>
                <p>To my site.</p>
            </div>
        </div>
    );
}
export default Hero