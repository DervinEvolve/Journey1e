import React from 'react'
import Link from 'next/link'

const Footer: React.FC = () => {
  return (
    <footer className="w-full p-4 fixed bottom-0 flex justify-center bg-white shadow">
      <Link
        href="https://github.com/DervinEvolve/Journey1e"
        target="_blank"
        rel="noopener noreferrer"
        className="text-xl font-bold text-gray-700 hover:text-gray-900"
      >
        Almanac
      </Link>
    </footer>
  )
}

export default Footer
