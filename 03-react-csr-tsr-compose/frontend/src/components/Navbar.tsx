import { Link } from '@tanstack/react-router'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    const links = [
        { to: '/', label: 'Home' },
        { to: '/about', label: 'About Us' },
        { to: '/services', label: 'Our Services' },
        { to: '/products', label: 'Products' },
        { to: '/contact', label: 'Contact Us' },
    ]

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link to="/" className="flex-shrink-0 flex items-center">
                            <span className="text-2xl font-bold text-sky-600">MMS Connections</span>
                        </Link>
                    </div>
                    <div className="hidden md:flex items-center space-x-8">
                        {links.map((link) => (
                            <Link
                                key={link.to}
                                to={link.to}
                                className="text-gray-700 hover:text-sky-600 px-3 py-2 rounded-md text-sm font-medium transition-colors [&.active]:text-sky-600 [&.active]:font-bold"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                    <div className="flex items-center md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-sky-600 focus:outline-none"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-100">
                        {links.map((link) => (
                            <Link
                                key={link.to}
                                to={link.to}
                                onClick={() => setIsOpen(false)}
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-sky-600 hover:bg-gray-50 [&.active]:text-sky-600 [&.active]:font-bold"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    )
}
