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
