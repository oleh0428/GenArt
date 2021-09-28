import React, { ReactElement } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Footer(): ReactElement {
  return (
    <footer className="flex w-full justify-between items-center px-40 py-24 text-black shadow-lg page-header">
      <a className="logo text-2xl font-bold" href="/">GEN.ART</a>
      <nav className="nav-link text-base">
        <ul className="flex">
          <li className="text-primaryBlue"><a href="/gallery">Gallery</a></li>
          <li className="ml-16 text-primaryBlue"><a href="/membership">Membership</a></li>
          <li className="ml-16 text-primaryBlue"><a href="/services">Services</a></li>
          <li className="ml-16 text-primaryBlue"><a href="/contacts">Contacts</a></li>
        </ul>
      </nav>
      <button className="relative bg-grey w-8 h-8" style={{borderRadius: '50%'}}>
        <FontAwesomeIcon icon={['fab', 'twitter']} />
      </button>
    </footer>
  )
}
