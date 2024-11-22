import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold">Dacrust</h3>
            <p className="mt-4 text-gray-300">
              Experience the finest dining in town with our exquisite menu and exceptional service.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/menu" className="text-gray-300 hover:text-white">
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/book" className="text-gray-300 hover:text-white">
                  Book a Table
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-300">
              <li>123 Restaurant Street</li>
              <li>City, State 12345</li>
              <li>Phone: (123) 456-7890</li>
              <li>Email: info@dacrust.com</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-300">
            © {new Date().getFullYear()} Dacrust Restaurant. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
