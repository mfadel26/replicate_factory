import React, {useEffect, useState} from 'react'
const axios = require('axios')
function Home() {
  // Declare a new state variable, which we'll call "count"
  const [Partners, setPartners] = useState([])
  const [AseeOn, setAseeOn] = useState([])
  useEffect(async () => {
    try {
      axios
        .get(
          'https://raw.githubusercontent.com/cahyo-refactory/RSP-DataSet-SkilTest-FE/main/partner.json'
        )
        .then((res) => {
          const Partner = res.data.data
          setPartners(Partner)
        })
    } catch (error) {
      console.log(error)
    }
  }, [])
  useEffect(async () => {
    try {
      axios
        .get(
          'https://raw.githubusercontent.com/cahyo-refactory/RSP-DataSet-SkilTest-FE/main/seen_on.json'
        )
        .then((res) => {
          const Asee = res.data.data
          setAseeOn(Asee)
        })
    } catch (error) {
      console.log(error)
    }
  }, [])
  return (
    <div>
      <nav
        className='navbar navbar-expand-lg navbar-light fixed-top py-3'
        id='mainNav'>
        <div className='container'>
          <img
            style={{width: '110px'}}
            src='https://i0.wp.com/refactory.id/wp-content/uploads/2020/01/refactory-hd.png?resize=125%2C52&ssl=1'
          />
          <button
            className='navbar-toggler navbar-toggler-right'
            type='button'
            data-toggle='collapse'
            data-target='#navbarResponsive'
            aria-controls='navbarResponsive'
            aria-expanded='false'
            aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon' />
          </button>
          <div className='collapse navbar-collapse' id='navbarResponsive'>
            <ul className='navbar-nav ml-auto my-2 my-lg-0'>
              <li className='nav-item'>
                <a className='nav-link js-scroll-trigger' href='#about'>
                  Home
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link js-scroll-trigger' href='/courses'>
                  Courses
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link js-scroll-trigger' href='#portfolio'>
                  Custom Trainings
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link js-scroll-trigger' href='#contact'>
                  CaseStudies
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link js-scroll-trigger' href='#contact'>
                  Blog
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* HeadNav*/}
      <header className='masthead'>
        <div className='container h-90'>
          <div className='row  align-items-left justify-content-center text-left'>
            <div
              className='col-lg-6 mt-4 '
               style={{marginRight: '30%'}}
              >
              <h2 className='description'>
                Empowering <em> People </em>
              </h2>
              <h2 className='description'>Through Programming</h2>
              <h5 className='text-white'>
                Refactory adalah perusahaan edukasi dan teknologi yang
                menyediakan layanan lengkap berupa course maupun custom training
                yang materinya dapat disesuaikan dengan kebutuhan teknologi dan
                bisnis perusahaan Anda.
              </h5>
              <a
                className='btn btn-jb-hover btn-sm '
                href="/list-course">
                Temukan Solusi anda
              </a>
              <a
                className='btn btn-jb btn-sm'
                href="/courses">
                Tingkatkan Skill Anda
              </a>
            </div>
            <div className='col-lg-10 align-self-end'>
              <p className='text-white-75 font-weight-light text-center mt-2 mb-5'>
                {' '}
                PARTNER EKSKLUSIF KAMI
              </p>
              <div className='row h-100 align-items-center justify-content-center text-center'>
                {Partners &&
                  Partners.map((el) => (
                    <div className='col-lg-3 col-md-4 text-center'>
                      <div className='mt-5'>
                        <img className='h4 mb-2' src={`${el.photo_url}`} />
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Desc */}
      <section className='page-section bg-primary' id='about'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-8 text-center'>
              <h2 className='text-dark'>Apa Yang Refactory Dapat Bantu?</h2>
              <div className='row align-items-center justify-content-center text-center'>
                <div className='col-lg-6 col-md-4 text-center'>
                  <div className='mt-5'>
                    <img
                      style={{width: '40px'}}
                      src='https://i1.wp.com/refactory.id/wp-content/uploads/2020/01/material_approval.png?fit=50%2C48&ssl=1'
                    />
                    <h3 className='h4 mb-2'>Memperkuat Tim Engineer Anda</h3>
                    <p className='text-muted mb-0'>
                      Bisnis di jaman modern membutuhkan keterampilan
                      pengembangan terbaik untuk meningkatkan skala produk. Kami
                      dapat mempersiapkan course dan juga dapat menyediakan tim
                      yang menangani kebutuhan digital Anda.
                    </p>
                  </div>
                </div>
                <div className='col-lg-6 col-md-1 text-center'>
                  <div className='mt-4'>
                    <img
                      style={{width: '25px'}}
                      src='https://i2.wp.com/refactory.id/wp-content/uploads/2020/01/material_bolt.png?fit=28%2C48&ssl=1'
                    />
                    <h3 className='h4 mb-2'>Wujudkan Software Impian Anda</h3>
                    <p className='text-muted mb-0'>
                      Kami adalah perusahaan One-Stop IT Solution untuk proyek
                      Anda, membantu di setiap tahap mulai dari menyusun ide,
                      melalui desain dan pengembangan aplikasi seluler, situs
                      web dan aplikasi desktop, hingga peluncuran produk.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Services*/}
      <section className='page-section' id='services'>
        <div className='container'>
          <p className='text-muted text-center mb-0'>INSIGHT TERBARU</p>
          <h3 className='text-center i mt-0'>Knowledge Sharing</h3>
          <div className='col-lg-12 col-md-1 text-center'>
            <p className='text-center i mt-0'> </p>
          </div>
        </div>
        <div className='container'>
          <div className='col-lg-12 col-md-1 text-center'>
            <p className='text-center i mt-0'>Lihat Semua</p>
          </div>
        </div>
      </section>
      {/* AseenOn*/}
      <section
        className='page-section'
        id='services'
        style={{backgroundColor: '#F4F5F6'}}>
        <div className='container'>
          <h2 className='text-center mt-0'> AS SEEN ON</h2>
          <div className='row'>
            {AseeOn &&
              AseeOn.map((el) => (
                <div className='col-lg-4 col-md-4 text-center'>
                  <div className='mt-1'>
                    <a href={`${el.link_url}`}>
                      <img style={{width: '30%'}} src={`${el.photo_url}`} />
                    </a>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Contact*/}
      <section
        className='page-section'
        id='contact'
        style={{backgroundColor: '#0C162A'}}>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-3 align-items-left'>
              <h5 className='mt-0 text-white'>Site Map</h5>
              <p className='text-muted'>Home</p>
              <p className='text-muted'>Bootcamp</p>
              <p className='text-muted'>Software Development</p>
              <p className='text-muted'>Courses</p>
              <p className='text-muted'>Custom Trainings</p>
              <p className='text-muted'>Blog</p>
            </div>
            <div className='col-lg-2 align-items-left'>
              <h5 className='mt-0 text-white'>Company</h5>
              <p className='text-muted'>About Us</p>
              <p className='text-muted'>Career We’re Hiring</p>
              <p className='text-muted'>Press Kit</p>
              <p className='text-muted'>FAQ</p>
            </div>
            <div className='col-lg-2 align-items-left'>
              <h5 className='mt-0 text-white'>Connect</h5>
              <p className='text-muted'>Facebook</p>
              <p className='text-muted'>Instagram</p>
              <p className='text-muted'>Youtube</p>
              <p className='text-muted'>LinkedIn</p>
            </div>
            <div className='col-lg-2 text-center'>
              <button type='button' class='butonsocials'>
                <i class='fab fa-facebook-f'></i>
              </button>
              <button type='button' class='butonsocials'>
                <i class='fab fa-linkedin'></i>
              </button>
              <button type='button' className='butonsocials'>
                <i class='fab fa-youtube'></i>
              </button>
              <button className='butonsocials'>
                <i className='fab fa-instagram'></i>
              </button>
              <p className='mb-4 mt-4 text-white'>Company Address</p>
              <p className='text-muted '>
                {' '}
                Jln. Palagan Tentara Pelajar Km. 9,8 Ngaglik, Kab. Sleman DI
                Yogyakarta 55581
              </p>
            </div>
            <div className='col-lg-2 text-center'>
              <p className='mt-5 mb-2 text-white'>Contact</p>
              <p className='text-muted mb-4'>
                marketing@refactory.id +62 8122 8203 381 Dewita: 0857 2582 7222
                Septin: 0878 2080 0206
              </p>
            </div>
          </div>

          <div className='row'>
            <div className='align-items-left mt-5 text-white'>
              <div>
                © 2020 Refactory - All Rights Reserved - Terms of Services /
                Privacy Policy
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default Home
