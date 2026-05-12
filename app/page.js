export default function Home() {
  const products = [
    {
      id: 1,
      name: "jai",
      price: "$10000000",
      image:
        "/jai.jpg",
    },
    {
      id: 2,
      name: "Professional Football",
      price: "₹899",
      image:
        "https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 3,
      name: "Basketball Pro",
      price: "₹799",
      image:
        "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-5 border-b border-gray-800">
        <h1 className="text-3xl font-bold text-red-500">
          JAI SPORTS
        </h1>

        <div className="flex gap-6">
          <a href="#" className="hover:text-red-500">
            Home
          </a>

          <a href="#products" className="hover:text-red-500">
            Products
          </a>

          <a href="#contact" className="hover:text-red-500">
            Contact
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center text-center">
        <img
          src="https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1600&auto=format&fit=crop"
          alt="sports"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />

        <div className="relative z-10 max-w-3xl px-5">
          <h2 className="text-5xl md:text-7xl font-extrabold mb-6">
            Best Sports Equipment
          </h2>

          <p className="text-lg md:text-2xl text-gray-300 mb-8">
            Cricket balls, footballs, basketballs and premium sports gear.
          </p>

          <button className="bg-red-500 px-8 py-4 rounded-xl text-xl font-semibold hover:bg-red-600 transition">
            Shop Now
          </button>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="py-20 px-8">
        <h2 className="text-5xl font-bold text-center mb-14">
          Featured Products
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-gray-900 rounded-3xl overflow-hidden shadow-lg hover:scale-105 transition"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-72 object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">
                  {product.name}
                </h3>

                <p className="text-red-500 text-xl mb-5">
                  {product.price}
                </p>

                <button className="w-full bg-red-500 py-3 rounded-xl font-semibold hover:bg-red-600">
                  Add To Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="bg-gray-900 py-20 px-8 text-center">
        <h2 className="text-5xl font-bold mb-8">
          About JAI SPORTS
        </h2>

        <p className="text-gray-300 text-xl max-w-4xl mx-auto leading-9">
          JAI SPORTS provides high-quality sports equipment for athletes,
          schools, clubs, and sports lovers across India.
        </p>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="py-20 px-8 text-center"
      >
        <h2 className="text-5xl font-bold mb-8">
          Contact Us
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-gray-900 p-8 rounded-3xl">
            <h3 className="text-red-500 text-2xl font-bold mb-3">
              Email
            </h3>

            <p>sportx@email.com</p>
          </div>

          <div className="bg-gray-900 p-8 rounded-3xl">
            <h3 className="text-red-500 text-2xl font-bold mb-3">
              Phone
            </h3>

            <p>+91 7599320375</p>
          </div>

          <div className="bg-gray-900 p-8 rounded-3xl">
            <h3 className="text-red-500 text-2xl font-bold mb-3">
              Location
            </h3>

            <p>Meerut,Uttar Pradesh, India</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-6 text-center text-gray-500">
        © 2026 SPORTX STORE. All rights reserved.
      </footer>
    </main>
  );
}