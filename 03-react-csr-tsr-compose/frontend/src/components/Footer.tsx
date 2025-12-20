import { Link } from '@tanstack/react-router'

export function Footer() {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-2">
                        <span className="text-2xl font-bold text-sky-500">MMS Connections</span>
                        <p className="mt-4 text-gray-400 max-w-md">
                            Empowering businesses with cutting-edge software solutions. We build the future of digital connectivity.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Quick Links</h3>
                        <ul className="mt-4 space-y-4">
                            <li>
                                <Link to="/about" className="text-base text-gray-300 hover:text-white">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link to="/services" className="text-base text-gray-300 hover:text-white">
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link to="/products" className="text-base text-gray-300 hover:text-white">
                                    Products
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-base text-gray-300 hover:text-white">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Contact</h3>
                        <ul className="mt-4 space-y-4">
                            <li className="text-base text-gray-300">
                                123 Tech Avenue
                                <br />
                                Silicon Valley, CA 94025
                            </li>
                            <li className="text-base text-gray-300">
                                contact@mmsconnections.com
                            </li>
                            <li className="text-base text-gray-300">
                                +1 (555) 123-4567
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 border-t border-gray-800 pt-8 md:flex md:items-center md:justify-between">
                    <p className="text-base text-gray-400">
                        &copy; {new Date().getFullYear()} MMS Connections. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}
