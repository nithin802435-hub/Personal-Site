


export default function About()
{
    return(
    <>

<section id="about" className="about section">
  {/* Section Title */}
  <div className="container section-title" data-aos="fade-up">
    <h2>About</h2>
    <p>Developer is not a role it is a passion</p>
  </div>{/* End Section Title */}
  <div className="container" data-aos="fade-up" data-aos-delay={100}>
    <div className="row gy-4 justify-content-center">
      <div className="col-lg-4">
        <img src="/unnamed.jpg" className="rounded-xl" alt="profile" />
      </div>
      <div className="col-lg-8 content">
        <h2>Python Web Developer</h2>
        <p className="fst-italic py-3">
          
        </p>
        <div className="row">
          <div className="col-lg-6">
            <ul>
              <li><i className="bi bi-chevron-right" /> <strong>Birthday:</strong> <span>20 Jan 2003</span></li>
              {/* <li><i className="bi bi-chevron-right" /> <strong>Website:</strong> <span></span></li> */}
              <li><i className="bi bi-chevron-right" /> <strong>Phone:</strong> <span>9791367099</span></li>
              <li><i className="bi bi-chevron-right" /> <strong>City:</strong> <span>Nagercoil</span></li>
            </ul>
          </div>
          <div className="col-lg-6">
            <ul>
              <li><i className="bi bi-chevron-right" /> <strong>Age:</strong> <span>22</span></li>
              <li><i className="bi bi-chevron-right" /> <strong>Degree:</strong> <span>Master</span></li>
              <li><i className="bi bi-chevron-right" /> <strong>Email:</strong> <span>nithin4593@gmail.com</span></li>
            </ul>
          </div>
        </div>
        <p className="py-3">
       
        </p>
      </div>
    </div>
  </div>
</section>

    </>)
}