
export default function Home()
{
    return(<>
    <section id="resume" className="resume section">
  {/* Section Title */}
  <div className="container section-title" data-aos="fade-up">
    <h2>Resume</h2>
  </div>{/* End Section Title */}
  <div className="container">
    <div className="row">
      <div className="col-lg-6" data-aos="fade-up" data-aos-delay={100}>
        <h3 className="resume-title">Education</h3>
        <div className="resume-item">
          <h4>Master of Computer Applications</h4>
          <h5>2024 - 2026</h5>
          <p><em>St Xavier's catholic of engineering</em></p>
          <p>Nagercoil,Kanyakumari Dt</p>
        </div>{/* Edn Resume Item */}
        <div className="resume-item">
          <h4>Bachelor of Computer Applications</h4>
          <h5>2021 - 2024</h5>
          <p><em>Don Bosco College Yelagiri hills</em></p>
          <p>Yelagiri,Tirupattur Dt</p>
        </div>{/* Edn Resume Item */}
      </div>
     
    </div>
  </div>
</section>

    
    </>)
}