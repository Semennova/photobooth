import React from 'react'
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavbarComponent } from './components/navbar/NavbarComponent';
import { Friends } from './components/Friends/Friends';
import  ProfilePageContainer  from './components/profilePage/profilePageContainer';





export default class App extends React.Component {
  render() {
    return <>
   
      <div className='app_wrapper'>
          <NavbarComponent />
        <div className='routes_content'>
          <Routes className='routes'>

            <Route path='/profile' element={<ProfilePageContainer />} />
            <Route path='/friends' element={<Friends />} />
            
          </Routes>
        </div>


      </div>
    </>
  }

}

