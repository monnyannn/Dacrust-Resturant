import { Link } from 'react-router-dom'
import { Button } from '../components/ui/button'
import { useEffect, useRef } from 'react'

const Home = () => {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (video) {
      video.addEventListener('timeupdate', () => {
        if (video.currentTime >= 56) {
          video.currentTime = 0 // Reset to start
          video.play() // Start playing again
        }
      })
    }
  }, [])

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[90vh] bg-black">
        <div className="absolute inset-0">
          <video
            ref={videoRef}
            autoPlay
            muted
            playsInline
            className="w-full h-full object-cover opacity-60"
          >
            <source src="/assets/video2.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="max-w-3xl px-4">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Welcome to Dacrust Restaurant
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Experience the finest dining with our exquisite menu and exceptional service
            </p>
            <div className="space-x-4">
              <Link to="/menu">
                <Button size="lg" variant="default">
                  View Menu
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Fine Dining</h3>
              <p className="text-gray-600">
                Experience culinary excellence with our carefully crafted dishes
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Expert Chefs</h3>
              <p className="text-gray-600">
                Our world-class chefs create unforgettable dining experiences
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Perfect Ambiance</h3>
              <p className="text-gray-600">
                Enjoy your meal in our beautifully designed restaurant
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* All Time Favourites Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">ALL TIME FAVOURITES</h2>
            <p className="text-lg text-gray-600">Discover our most loved dishes that keep our customers coming back</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Grid Item 1 */}
            <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img 
                src="/assets/chicken-burger.jpeg" 
                alt="Signature Chicken Burger" 
                className="w-full h-72 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white mb-2">Signature Chicken Burger</h3>
                <p className="text-gray-200">Our bestselling burger with premium chicken fillet</p>
              </div>
            </div>

            {/* Grid Item 2 */}
            <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img 
                src="/assets/crunchy-fries.jpeg" 
                alt="Crispy Fries" 
                className="w-full h-72 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white mb-2">Crispy Fries</h3>
                <p className="text-gray-200">Golden and perfectly seasoned</p>
              </div>
            </div>

            {/* Grid Item 3 */}
            <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img 
                src="/assets/waffle-strawberry.jpeg" 
                alt="Strawberry Waffle" 
                className="w-full h-72 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white mb-2">Strawberry Waffle</h3>
                <p className="text-gray-200">Sweet and fluffy with fresh strawberries</p>
              </div>
            </div>

            {/* Grid Item 4 */}
            <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img 
                src="/assets/chicken-bucket.jpeg" 
                alt="Family Chicken Bucket" 
                className="w-full h-72 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white mb-2">Family Chicken Bucket</h3>
                <p className="text-gray-200">Perfect for sharing with family</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Experience Dacrust?</h2>
          <Link to="/book">
            <Button size="lg" variant="default">
              Make a Reservation
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home
