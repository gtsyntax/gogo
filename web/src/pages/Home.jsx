import Header from "../componenets/Header"
import HeroSection from "../componenets/HeroSection"
import Categories from "../componenets/Categories"
import CardSection from "../componenets/CardSection"
import Footer from "../componenets/Footer"

export default function Home() {
    return (
        <main className="font-inter">
            <Header />
            <HeroSection />
            <Categories />
            <CardSection />
            <Footer />
        </main>
    )
}