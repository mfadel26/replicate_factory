import React, {useEffect, useState} from 'react'
import {ListData} from './dummy'
function ListCourse() {
  const [List, setList] = useState([])
  useEffect( async () => {
   if(ListData !== undefined){
       setList(ListData)
   }
  }, [ListData])
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
      {/* Desc */}
      
      <section className='page-section bg-primary' id='about'>
      <div className='container'>
      <div className="input-group md-form form-sm form-2 pl-0">
        <input className="form-control " type="text" placeholder="Search" aria-label="Search" />
        <div className="input-group-append">
          <span className="input-group-text" id="basic-text1"><i className="fas fa-search text-grey" aria-hidden="true" /></span>
        </div>
      </div>
          <div className='row'>
            <div className='row justify-content-center mb-5'>
              {List &&
                List.map((el) => (
                  <div class='card mb-5' style={{width: '30rem', marginRight: 30}}>
                    <img
                      class='card-img-top'
                      style={{width: '100%'}}
                      src={`${el &&el.photo_url}`}
                      alt='Card image cap'
                    />
                    <div class='card-body'>
                    
                    <h5 class='card-title'>{el && el.title}</h5>
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
                      <p class='card-title'>{el.short_description}</p>
                      <img src={`${el && el.user && el.user.photo_url}`} alt="Avatar" class="avatars"/>
                    </div>
                  </div>
                ))}
            </div>

          </div>
        </div>
      </section>
      {/* Contact*/}
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
export default ListCourse
