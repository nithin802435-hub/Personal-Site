import { MonitorSmartphone } from "lucide-react";
import Image from "next/image";

export default function ServiceCard(props)
{
    return(<>
  <section id="hero" className="hero section dark-background">
  <img src="assets/img/hero-bg.jpg" alt data-aos="fade-in"  />
  <div className="container" data-aos="fade-up" data-aos-delay={100}>
    <h2>Alex Smith</h2>
    <p>I'm <span className="typed" data-typed-items="Designer, Developer, Freelancer, Photographer">Designer</span><span className="typed-cursor typed-cursor--blink" aria-hidden="true" /><span className="typed-cursor typed-cursor--blink" aria-hidden="true" /></p>
  </div>
</section>

    
    </>)
}