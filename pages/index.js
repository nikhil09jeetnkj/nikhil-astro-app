
import Link from 'next/link'
import { useEffect, useState } from 'react'
import PersonList from '../src/components/PersonList'

export default function Home() {
  return (
    <div className="page">
      <header className="header">
        <div className="brand">
          <div className="logo">✦</div>
          <div>
            <h1>Your Astrology Guide</h1>
            <p className="sub">A simple, private astrology PWA</p>
          </div>
        </div>
        <nav>
          <Link href="/add"><a className="btn">+ Add Person</a></Link>
        </nav>
      </header>
      <main className="main">
        <section className="card">
          <h2>Profiles</h2>
          <PersonList />
        </section>
        <section className="card note">
          <h3>Next steps</h3>
          <ul>
            <li>Install to Home Screen: Share → Add to Home Screen</li>
            <li>Charts use mock positions for now — we can plug real calculations later</li>
            <li>Your data stays in your device (localStorage)</li>
          </ul>
        </section>
      </main>
      <footer className="footer">Made with ✨ for Nikhil</footer>
    </div>
  )
}
