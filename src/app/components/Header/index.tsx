import React, { ReactElement } from 'react';

export default function Header(): ReactElement {
  return (
    <header className="flex w-full justify-between items-center px-44 py-6 text-black page-header fixed top-0 bg-white z-10" style={{boxShadow: '0px 8px 16px rgba(8, 35, 48, 0.1), 0px 4px 8px rgba(8, 35, 48, 0.16)'}}>
      <a className="logo text-2xl font-bold" href="/">GEN.ART</a>
      <nav className="nav-link text-base">
        <ul className="flex">
          <li><a href="/membership">Membership</a></li>
          <li className="ml-5"><a href="/team">Team</a></li>
          <li className="ml-5"><a href="/artists">Artists</a></li>
        </ul>
      </nav>
      <button className="btn-black bg-black w-40 font-base text-white py-3">Connect Wallet</button>
    </header>
  )
}
