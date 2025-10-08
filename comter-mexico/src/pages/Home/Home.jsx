import Hero from "../../components/NavbarHero/Hero";
import HeroSection from "../../components/HeroSection/HeroSection";

const Home = () => {
    return (
        <div style={{ margin: 0, padding: 0, minHeight: '100vh' }}>
            <HeroSection />
            <Hero />

            {/* Otros componentes de la página de inicio */}
        </div>
    );
};

export default Home;