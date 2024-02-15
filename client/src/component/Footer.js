import React from 'react';
import '../style/footer.css';

import { BsLinkedin } from 'react-icons/bs'
import { FiInstagram } from 'react-icons/fi'
import { GrYoutube } from 'react-icons/gr'
import { FaTwitter } from 'react-icons/fa';

const BottomNav = () => {
  return (
    <>
         <div className="Main_page-bottomNav">
            <h2>Curd</h2>
            <ul className='nav_item-list'>
               <li><a href='#'>Home</a></li>
               <li><a href='#about'>About</a></li>
               <li><a href='#experiance'>Experiance</a></li>
               <li><a href='#contact'>Contact</a></li>
            </ul>

            <div className='footer_socials_MainPage'>
               <a href="https://www.linkedin.com/" target="_blank"><BsLinkedin /></a>
               <a href="https://www.instagram.com/" target="_blank"><FiInstagram /></a>
               <a href="https://www.youtube.com/" target="_blank"><GrYoutube /></a>
               <a href="https://www.youtube.com/" target="_blank"><FaTwitter/></a>
            </div>
            <div className="line"></div>

            <div className='footer_copyright_MainPage'>
               <small>&copy; Durgesh. ALL rights reserved</small>
            </div>
         </div>
    </>
  )
}

export default BottomNav
