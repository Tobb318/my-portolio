import React from 'react'
import { social } from '../data/DummyData'
export const Footer = () => {
  return (
    <>
    <footer>
        {social.map((item) => (
            <>
            <i data-aos="zoom-in-left">{item.icon}</i>
            </>
        ))}
        <p data-aos="zoom-in-right">All Rights Reserved 2023 | Alao Michael</p>
    </footer>
    </>
  )
}
