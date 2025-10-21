import Navbar from "@/component/composite/Navbar";
import Hero from "@/component/composite/Hero"
import Footer from "@/component/composite/Footer"
export default function Home(){
  return(
    <div>
    <Navbar></Navbar>
    <Hero/>
    <Footer></Footer>
    </div>
  )
}