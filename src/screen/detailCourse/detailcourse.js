import React, {useEffect, useState} from 'react'
const axios = require('axios')
function DetailCourse() {
  const [Detail, setDetail] = useState([])
  
  useEffect(() => {
    try {
        axios.get('https://raw.githubusercontent.com/cahyo-refactory/RSP-DataSet-SkilTest-FE/main/detail-course.json')
          .then((res) => {
            const detail = res.data
            if(detail !==undefined){
              setDetail(detail? detail[ 'materi course' ]:[])
            }
          })
      } catch (error) {
        console.log(error)
      }
  }, [])

  return (
    <div>
      <nav
        className='navbar navbar-expand-lg navbar-light  py-3'
        id='mainNav'
        style={{backgroundColor:'#3091AA'}}
        >
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
                  Courses
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link js-scroll-trigger' href='#services'>
                  Road Map
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link js-scroll-trigger'>
                Login
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* Desc */}
      <header className='mastheadDetailCourse'>
        <div className='container h-8'>
          <div className='row  align-items-center justify-content-center text-center'>
            <div className='col-lg-8 mt-1 '>
              <h5 className='description'>
              HTML & CSS Introduction
              </h5>
              <p className='description'>HTML dan CSS adalah materi dasar untuk pengembangan web. Setiap web developer harus memiliki pengetahuan dasar setidaknya HTML dan CSS.</p>
              <a
                className='btn btn-jb-hover btn-xl '
                href='/list-course'>
                Mulai Belajar
              </a>
            </div>
          </div>
        </div>
      </header>
      {/* Contact*/}
      <section className='page-section' id='services'>
        <div className='container'>
          <h3 className='text-center i mt-0'>Tentang Course</h3>
          <div className='col-lg-12 col-md-1 text-center'>
            <p className='text-center i mt-0'> </p>
          </div>
        </div>
        <div className='container'>
          <div className='col-lg-12 col-md-1 text-center'>
            <p className='text-center i mt-0'></p>
          </div>
        </div>
      </section>
      <section className='page-section' id='services' >
        <div className='container'>
          <h3 className='text-center i mt-0'>Materi Course</h3>
          <div className='col-lg-12 col-md-1 text-center'>
            <p className='text-center i mt-0'> </p>
          </div>
        </div>
        <div className='container'>
            {Detail && Detail.map((el)=>
         <ul className="list-group mb-3" style={{backgroundColor: '#DCDDDD'}}>  
        <ul> <li>{el.section}</li></ul>
        {el.data.map((element) =>
         <ul className="list-group" style={{backgroundColor: '#DCDDDD'}}>
        <li className="list-group-item justify-content-between align-items-center" style={{backgroundColor: '#F0F0F0 '}}>      
        <button type='button' className='butonsocials ml-2'>
            <i class='fab fa-youtube'></i>
        </button>
        <a className='ml-2'> { element.title } </a> 
        <a href={`${element.url}`}> <span className="badge badge-warning badge-pill ml-5"> Start</span></a>
        </li>
        </ul> 
        )}  
      </ul>
        )}
        </div>
      </section>
      <section
        className='page-section'
        id='contact'
        style={{backgroundColor: '#3091AA'}}>
        <div className='container'>
          <div className='row justify-content-center align-items-center'>
          <div className='col-lg-8 align-items-left text-white'>
              <div>
              © Refactory 2020
              </div>
            </div>
            <div className='col-lg-2 flex-end text-white'>
              <div>
              Terms of Services Privacy Policy
              </div>
            </div>
          
          </div>
        </div>
      </section>
    </div>
  )
}
export default DetailCourse
