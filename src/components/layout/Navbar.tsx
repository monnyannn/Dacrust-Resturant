import { Link } from 'react-router-dom'
import { Button } from '../ui/button'

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-bold text-gray-900">
              Dacrust
            </Link>
          </div>
          <div className="hidden sm:flex sm:items-center sm:space-x-8">
            <div className="flex space-x-8">
              <Link
                to="/"
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900"
              >
                Home
              </Link>
              <Link
                to="/menu"
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900"
              >
                Menu
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900"
              >
                Contact
              </Link>
            </div>
            <Link to="/book">
              <Button variant="default" className="ml-4">
                Book a Table
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
