import { Button } from '../components/ui/button'

interface MenuItem {
  id: number
  name: string
  description: string
  price: string
  category: string
}

const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Classic Burger",
    description: "Juicy beef patty with fresh lettuce, tomatoes, and our special sauce",
    price: "$12.99",
    category: "Main Course"
  },
  {
    id: 2,
    name: "Caesar Salad",
    description: "Crisp romaine lettuce, parmesan cheese, croutons, and Caesar dressing",
    price: "$8.99",
    category: "Starters"
  },
  {
    id: 3,
    name: "Grilled Salmon",
    description: "Fresh Atlantic salmon with seasonal vegetables and lemon butter sauce",
    price: "$24.99",
    category: "Main Course"
  },
  {
    id: 4,
    name: "Chocolate Lava Cake",
    description: "Warm chocolate cake with a molten center, served with vanilla ice cream",
    price: "$7.99",
    category: "Desserts"
  }
]

const Menu = () => {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Menu</h1>
          <p className="text-xl text-gray-800 font-medium">
            Discover our carefully curated selection of dishes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className={`border rounded-lg p-6 hover:shadow-lg transition-all duration-300 ${
                item.id === 1 ? 'bg-amber-50 hover:bg-amber-100' :
                item.id === 2 ? 'bg-emerald-50 hover:bg-emerald-100' :
                item.id === 3 ? 'bg-sky-50 hover:bg-sky-100' :
                'bg-rose-50 hover:bg-rose-100'
              }`}
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{item.name}</h3>
                  <p className="text-sm text-gray-500 mt-1">{item.category}</p>
                </div>
                <span className="text-lg font-semibold text-gray-900">{item.price}</span>
              </div>
              <p className="mt-4 text-gray-600">{item.description}</p>
              <Button className="mt-4" variant="outline">
                Order Now
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Menu
