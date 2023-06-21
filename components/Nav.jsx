'use client'

import Link from 'next/link'

const Nav = () => {
  return (
    <nav className="flex-between w-full mb-16 pt-3">
        <Link href="/" className="flex-start gap-2">      
        <h1 className="logo_tex poppins">M I L E S L A T H A N</h1>
        </Link>
        <div className="flex-end gap-5 poppins text-2xl">
        <Link href="/"
        className="black_btn poppins">
        HOME
        </Link>
        <Link href="/about"
        className="outline_btn poppins">
        WHO I AM
        </Link>
        <Link href="/projects">
        My Projects
        </Link>
        <Link href="/contact">
        Contact Me
        </Link>
        </div>
    </nav>
  )
}

export default Nav