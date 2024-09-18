// import React from 'react'
import Navbar from "../../Header/Navbar";
import { BackButtonStyle } from "../Posts/PostForm";
import BackButton from "../../../Helpers/BackButton1";


const Attendence = () => {
  return (
    <div>
      <Navbar
      pageName="Attendence"
      />
      <BackButtonStyle>
        <BackButton/>
      </BackButtonStyle>
    </div>
  )
}

export default Attendence
