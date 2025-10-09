import Hero from "../../components/NavbarHero/Hero";
import VideoCarousel from "../../components/VideoCarousel/VideoCarousel";

const Home = () => {
    return (
        <div style={{ margin: 0, padding: 0, minHeight: '100vh', backgroundColor: '#000' }}>
            <Hero />
            <VideoCarousel />
            {/* Otros componentes de la página de inicio */}
        </div>
    );
};

export default Home;