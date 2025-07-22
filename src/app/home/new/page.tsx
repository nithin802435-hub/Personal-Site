import { MonitorSmartphone } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section id="hero" className="hero section dark-background">
        <Image
          src="/hero-bg.jpg"
          alt="Hero image"
          width={1200} // You can adjust width and height to your design
          height={600}
          className="w-full h-auto object-cover"
        />
        <div className="container" data-aos="fade-up" data-aos-delay={100}>
          <h2>Nithin S</h2>
          <p>
            I'm{" "}
            <span
              className="typed"
              data-typed-items="Designer, Developer, Freelancer, Photographer"
            >
              Developer
            </span>
            <span
              className="typed-cursor typed-cursor--blink"
              aria-hidden="true"
            />
            <span
              className="typed-cursor typed-cursor--blink"
              aria-hidden="true"
            />
          </p>
        </div>
      </section>
    </>
  );
}
