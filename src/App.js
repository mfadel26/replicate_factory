import React from 'react'
import  { 
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import './App.css';
import Home from './screen/home/home'
import Courses from './screen/courses/courses'
import ListCourse from './screen/listcourse/listcourse';
import DetailCourse from './screen/detailCourse/detailcourse';

function App() {
  return (
    <Router>
        <Route exact path ={'/'} component={Home}/>
        <Route exact path ={'/courses'} component={Courses}/>
        <Route exact path ={'/list-course'} component={ListCourse}/>
        <Route exact path ={'/detail-course'} component={DetailCourse}/>
    </Router>
  );
}

export default App;
