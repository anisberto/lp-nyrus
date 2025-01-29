import AboutUs from "./components/AboutUs";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";

export default function Home() {
  return (
   <>
    <Header></Header>
    <Hero></Hero>
    <AboutUs></AboutUs>
    <Services></Services>
    <ContactForm></ContactForm>
    <Footer></Footer></>
  );
}
