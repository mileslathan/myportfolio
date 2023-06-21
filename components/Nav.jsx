'use client'

import Link from 'next/link'

const Nav = () => {
  return (
    <nav className="flex-between w-full mb-16 mt-4 pt-3">
        <Link href="/"
        className="biryaniRegular">
        LOGO
        </Link>
        <Link href="/" className="flex-start gap-2">      
        <h1 className="logo_tex poppins"></h1>
        </Link>
        <div className="flex-end gap-5 poppins text-2xl">
        <Link href="/about"
        className="outline_btn biryaniRegular">
        WHO I AM
        </Link>
        <Link href="/projects"
        className="outline_btn biryaniRegular">
        MY PROJECTS
        </Link>
        <Link href="/contact"
        className="black_btn biryaniRegular">
        CONTACT ME
        </Link>
        </div>
    </nav>
  )
}

export default Nav