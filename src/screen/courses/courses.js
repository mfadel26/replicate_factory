import React, {useEffect, useState} from 'react'
const axios = require('axios')
function Courses() {
  const [Students, setStudents] = useState([])
  useEffect( async () => {
    try {
      axios
        .get(
          'https://raw.githubusercontent.com/cahyo-refactory/RSP-DataSet-SkilTest-FE/main/alumni-report.json'
        )
        .then((res) => {
           const students = res.data.data
          setStudents(students)
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
                <a className='nav-link js-scroll-trigger' href='#services'>
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
      <header className='mastheadCourse'>
        <div className='container h-8'>
          <div className='row  align-items-center justify-content-center text-center'>
            <div className='col-lg-8 mt-5 '>
              <h5 className='description'>
                Tingkatkan skill <em> pemrograman </em>
              </h5>
              <h5 className='description'>kapan pun, dimana pun.</h5>
              <p className='text-white'>
                We’re a brand of passionate software engineers and educators
                with an engaging curriculum backed by real-world software
                projects ready to boost your career.
              </p>
              <a
                className='btn btn-jb-hover btn-sm '
                href="/detail-course">
                Masuk & Memulai Belajar
              </a>
              <a
                className='btn btn-jb btn-sm'
                href="/detail-course">
                Daftar Sekarang
              </a>
            </div>
          </div>
        </div>
      </header>
      {/* Desc */}
      <section className='page-section bg-primary' id='about'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-8 text-center'>
              <div className='row align-items-left justify-content-left text-left'>
                <div className='col-lg-4 col-md-4 text-left'>
                  <div className='mt-5'>
                    <h5 className='h4 mb-2'>
                      Bagaimana Refactory Course membantu meningkatkan skill
                      anda.
                    </h5>
                    <a
                      className='btn btn-jb-hover btn-sm '
                      href="/detail-course">
                      Pelajari Lebih
                    </a>
                  </div>
                </div>
                <div className='col-lg-6 col-md-1 text-center'>
                  <div className='mt-4'>
                    <img
                      style={{width: '120%'}}
                      src='https://i0.wp.com/refactory.id/wp-content/uploads/2020/07/Frame.png?w=839&ssl=1'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Services*/}
      <section
        className='page-section'
        id='services'
        style={{backgroundColor: '#F4F5F6'}}>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-8 text-center'>
              <div className='row align-items-left justify-content-left text-left'>
                <div className='col-lg-6 col-md-4 text-left'>
                  <p className='text-muted'>
                    Refactory Course dirancang untuk memudahkan setiap orang
                    mampu meningkatkan keahlian dalam software engineering tanpa
                    dibatasi oleh kesulitan akses, kesulitan waktu, batasan
                    keahlian, ataupun usia.
                  </p>
                  <p className='text-muted'>
                    Dengan pembelajaran berdasarkan pengalaman nyata pengerjaan
                    project, bagi pelajar/mahasiswa, Refactory Course akan
                    melengkapi keahlian yang sudah diperoleh dalam studi
                    sehingga dapat membuka kesempatan tak terbatas pada karir
                    software engineering.
                  </p>
                  <p className='text-muted'>
                    {' '}
                    Bagi karyawan atau tenaga profesional, Refactory Course
                    dapat meningkatkan keahlian software engineer dalam
                    menunjang menyelesaikan tugas pekerjaannya tanpa khawatir
                    dengan keterbatasan waktu.
                  </p>
                  <p className='text-muted'>
                    {' '}
                    Masyarakat secara luas juga dapat memanfaatkan pembelajaran
                    untuk meningkatkan keahlian sehingga mampu berkarya dan
                    mendapat keuntungan karir tanpa khawatir mahalnya belajar.
                  </p>
                </div>
                <div className='col-lg-6 col-md-1 text-center'>
                  <div>
                    <img
                      style={{width: '120%'}}
                      src='https://i1.wp.com/refactory.id/wp-content/uploads/2020/01/IMG_1152-1.jpg?fit=690%2C800&ssl=1'
                    />
                  </div>
                </div>
                <div className='col-lg-6 col-md-1 text-center'>
                  <div>
                    <a
                      className='btn btn-jb-hover btn-sm '
                      href='https://startbootstrap.com/theme/creative/'>
                      Daftar Sekarang
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className='page-section'
        id='services'
        style={{backgroundColor: '#F4F5F6'}}>
        <div className='container'>
          <p className='text-muted text-center mb-0'>MEET OUR GRADUATES</p>
          <h2 className='text-center i mt-0'>Review</h2>
          <h4 className='text-center i mt-0'>
            Read what our alumni said on Course Report
          </h4>
          <div className='col-lg-12 col-md-1 text-center'>
            <p className='text-center i mt-0'> </p>
          </div>
        </div>
      </section>
      {/* AseenOn*/}
      <section className='page-section' id='services'>
        <div className='container'>
          <div className='row'>
            <div className='row justify-content-center'>
              {Students &&
                Students.map((el) => (
                  <div class='card' style={{width: '22rem', marginRight: 30}}>
                    <img
                      class='card-img-top'
                      style={{width: '100%'}}
                      src={`${el && el.user && el.user.photo_url}`}
                      alt='Card image cap'
                    />
                    <div class='card-body'>
                    <h5 class='card-title'>{el && el.user && el.user.name}</h5>
                      <span
                        class='fa fa-star '
                        style={{color: '#E48800'}}></span>
                      <span
                        class='fa fa-star '
                        style={{color: '#E48800'}}></span>
                      <span
                        class='fa fa-star '
                        style={{color: '#E48800'}}></span>
                      <span
                        class='fa fa-star '
                        style={{color: '#E48800'}}></span>
                      <span
                        class='fa fa-star '
                        style={{color: '#E48800'}}></span>
                      <h5 class='card-title'>{el.title}</h5>
                      <p class='card-text'>{el.description}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className='page-section'
        id='services'
        style={{backgroundColor: '#2499BC'}}>
        <div className='container'>
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-lg-6 text-center'>
                <div className='row align-items-center justify-content-center text-left'>
                  <div className='col-lg-6 col-md-4 text-left'>
                    <div>
                      <p className='text-white'>Ready to start Learning ?</p>
                    </div>
                  </div>
                  <div className='col-lg-4 col-md-4 text-left'>
                    <div>
                      <a
                        className='btn btn-jb-hover btn-sm '
                        href='https://startbootstrap.com/theme/creative/'>
                        Daftar Sekarang
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='page-section' id='services'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-2 col-md-4 text-center'>
              <div className='mt-1'>
                <p className='text-center mt-0'> Langkah Mudah</p>
                <p className='text-center mt-0'>
                  {' '}
                  Memulai Belajar di Refactory Course
                </p>
              </div>
            </div>
          </div>
          <div className='row justify-content-center'>
            <div className='col-lg-8 col-md-4 text-center'>
              <div className='mt-1'></div>
              <img
                style={{width: '100%'}}
                src='https://i0.wp.com/refactory.id/wp-content/uploads/2020/07/Frame-3-1.png?resize=1024%2C199&ssl=1'
              />
            </div>
          </div>
          <div className='row justify-content-center'>
            <div className='col-lg-4 col-md-4 text-center'>
              <div>
                <a
                  className='btn btn-jb-hover btn-sm '
                  href='https://startbootstrap.com/theme/creative/'>
                  Pelajari Lebih
                </a>
              </div>
            </div>
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
            <div className='col-lg-2 text-left'>
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
            <div className='col-lg-2 text-left'>
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
export default Courses
