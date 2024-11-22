import { Button } from '../components/ui/button'
import { useState, FormEvent } from 'react'

interface FormData {
  name: string
  email: string
  message: string
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // In a real app, you would send this to your backend
      await new Promise(resolve => setTimeout(resolve, 1000))
      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600">
            We'd love to hear from you
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="bg-amber-50 p-6">
                <h2 className="text-2xl font-semibold text-amber-900">Visit Us</h2>
              </div>
              <div className="p-6 space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Address</h3>
                  <p className="text-gray-600">123 Restaurant Street</p>
                  <p className="text-gray-600">City, State 12345</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Contact</h3>
                  <p className="text-gray-600">(123) 456-7890</p>
                  <p className="text-gray-600">info@dacrust.com</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Hours</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Mon - Fri</span>
                      <span className="text-gray-900 font-medium">11:00 AM - 10:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Saturday</span>
                      <span className="text-gray-900 font-medium">10:00 AM - 11:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Sunday</span>
                      <span className="text-gray-900 font-medium">10:00 AM - 9:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl font-semibold text-gray-900 mb-8">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors duration-200"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors duration-200"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors duration-200"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-50 rounded-lg text-green-700">
                    Message sent successfully! We'll get back to you soon.
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-50 rounded-lg text-red-700">
                    Failed to send message. Please try again.
                  </div>
                )}
                <Button 
                  type="submit" 
                  size="lg"
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 rounded-lg transition-colors duration-200"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
