import Image from "next/image";
import Home from "./home/new/page";
import About from "./home/new/page1";
import Resume from "./home/new/page2";
import Contact from "./home/new/page3";

export default function page(){
    return(
        <>
        <Home/>
        <About/>
        <Resume/>
        <Contact/>
        </>
        

    );
}