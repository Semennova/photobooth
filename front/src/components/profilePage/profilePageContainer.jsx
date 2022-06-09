import React from 'react'
import { ProfilePage } from './ProfilePage'
import { connect } from 'react-redux';

 const ProfilePageContainer = (props) =>  {
  return (
    <ProfilePage posts={props.posts}/>
  )
}


let mapStateToProps = (state) => {
  return state
}

const v = mapStateToProps()

console.log(v);

connect(mapStateToProps)(ProfilePageContainer)
export default ProfilePageContainer