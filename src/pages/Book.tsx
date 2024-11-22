import { Button } from '../components/ui/button'
import { useState, FormEvent } from 'react'

interface BookingFormData {
  name: string
  email: string
  phone: string
  guests: string
  date: string
  time: string
  specialRequests: string
}

const Book = () => {
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    email: '',
    phone: '',
    guests: '2 Guests',
    date: '',
    time: '7:00 PM',
    specialRequests: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Validate date is not in the past
      const selectedDate = new Date(formData.date)
      const today = new Date()
      today.setHours(0, 0, 0, 0)

      if (selectedDate < today) {
        throw new Error('Please select a future date')
      }

      // In a real app, you would send this to your backend
      await new Promise(resolve => setTimeout(resolve, 1000))
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        guests: '2 Guests',
        date: '',
        time: '7:00 PM',
        specialRequests: ''
      })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  // Get today's date in YYYY-MM-DD format for min date attribute
  const today = new Date().toISOString().split('T')[0]

  return (
    <div className="py-12 bg-gray-100 min-h-screen" role="main" aria-label="Book a Table">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4" tabIndex={0}>Book a Table</h1>
          <p className="text-xl text-gray-800 font-medium md:text-lg sm:text-base" tabIndex={0}>
            Reserve your table for a memorable dining experience
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 mb-8">
            <div className="bg-amber-50 p-6 border-b border-amber-100 sm:p-4">
              <h2 className="text-2xl font-semibold text-amber-900 md:text-xl sm:text-lg" tabIndex={0}>Make a Reservation</h2>
              <p className="mt-2 text-amber-800 md:text-base sm:text-sm" tabIndex={0}>Fill in your details below to book your table</p>
            </div>
            
            <div className="p-8 sm:p-4">
              <form onSubmit={handleSubmit} className="space-y-6" aria-label="Booking form">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors duration-200"
                      aria-required="true"
                      aria-invalid={formData.name === ''}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors duration-200"
                      aria-required="true"
                      aria-invalid={formData.email === ''}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      pattern="[0-9]{10}"
                      placeholder="Your phone number"
                      title="Please enter a valid 10-digit phone number"
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors duration-200"
                      aria-required="true"
                      aria-invalid={formData.phone === ''}
                      aria-describedby="phone-format"
                    />
                    <span id="phone-format" className="text-sm text-gray-500 mt-1">Format: 10 digits (e.g., 1234567890)</span>
                  </div>
                  <div>
                    <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-2">
                      Number of Guests <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <select
                      id="guests"
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors duration-200"
                      aria-required="true"
                    >
                      <option>1 Guest</option>
                      <option>2 Guests</option>
                      <option>3 Guests</option>
                      <option>4 Guests</option>
                      <option>5 Guests</option>
                      <option>6+ Guests</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
                      Date <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      min={today}
                      required
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors duration-200"
                      aria-required="true"
                      aria-invalid={formData.date === ''}
                    />
                  </div>
                  <div>
                    <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-2">
                      Time <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <select
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors duration-200"
                      aria-required="true"
                    >
                      <option>11:00 AM</option>
                      <option>12:00 PM</option>
                      <option>1:00 PM</option>
                      <option>2:00 PM</option>
                      <option>5:00 PM</option>
                      <option>6:00 PM</option>
                      <option>7:00 PM</option>
                      <option>8:00 PM</option>
                      <option>9:00 PM</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="specialRequests" className="block text-sm font-medium text-gray-700 mb-2">
                    Special Requests <span className="text-gray-500">(Optional)</span>
                  </label>
                  <textarea
                    id="specialRequests"
                    name="specialRequests"
                    value={formData.specialRequests}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors duration-200"
                    placeholder="Any special requests or dietary requirements?"
                    aria-label="Special requests or dietary requirements"
                  ></textarea>
                </div>
                {submitStatus === 'success' && (
                  <div 
                    className="p-4 bg-green-50 rounded-lg text-green-700" 
                    role="alert"
                    aria-live="polite"
                  >
                    Reservation submitted successfully! We'll confirm your booking shortly.
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div 
                    className="p-4 bg-red-50 rounded-lg text-red-700" 
                    role="alert"
                    aria-live="polite"
                  >
                    Failed to submit reservation. Please try again or contact us directly.
                  </div>
                )}
                <Button 
                  type="submit" 
                  size="lg"
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 rounded-lg transition-colors duration-200 focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
                  disabled={isSubmitting}
                  aria-label={isSubmitting ? 'Submitting reservation request...' : 'Book Now'}
                >
                  {isSubmitting ? 'Submitting...' : 'Book Now'}
                </Button>
              </form>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="bg-amber-50 p-6 border-b border-amber-100 sm:p-4">
              <h2 className="text-2xl font-semibold text-amber-900 md:text-xl sm:text-lg" tabIndex={0}>Reservation Policy</h2>
            </div>
            <div className="p-6 sm:p-4">
              <ul className="space-y-4 text-gray-700" role="list" aria-label="Reservation policies">
                <li className="flex items-center space-x-3" role="listitem">
                  <span className="text-amber-600" aria-hidden="true">•</span>
                  <span>Reservations must be made at least 24 hours in advance</span>
                </li>
                <li className="flex items-center space-x-3" role="listitem">
                  <span className="text-amber-600" aria-hidden="true">•</span>
                  <span>Please arrive within 15 minutes of your reservation time</span>
                </li>
                <li className="flex items-center space-x-3" role="listitem">
                  <span className="text-amber-600" aria-hidden="true">•</span>
                  <span>For parties of 6 or more, please call us directly</span>
                </li>
                <li className="flex items-center space-x-3" role="listitem">
                  <span className="text-amber-600" aria-hidden="true">•</span>
                  <span>Cancellations must be made 4 hours before reservation time</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Book
