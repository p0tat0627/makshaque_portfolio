import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub}  from 'react-icons/bs'
import {SiLeetcode}  from 'react-icons/si'
import {BsFacebook} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://linkedin.com/in/potato627/" target='_blank'><BsLinkedin/></a>
        <a href="https://github.com/p0tat0627" target='_blank'><BsGithub/></a>
        <a href="https://leetcode.com/maksudulhaque/" target='_blank'><SiLeetcode/></a>
        <a href="https://www.facebook.com/profile.php?id=100008050365439" target='_blank'><BsFacebook/></a>
    </div>
  )
}

export default HeaderSocials