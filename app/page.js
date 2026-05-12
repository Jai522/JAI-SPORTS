export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">

      {/* NAVBAR */}
      <nav className="flex items-center justify-between px-6 md:px-10 py-6 border-b border-white/10 backdrop-blur bg-black/40 sticky top-0 z-50">
        <h1 className="text-2xl md:text-3xl font-black tracking-[0.2em]">
          JAI SPORTS
        </h1>

        <div className="hidden md:flex gap-10 text-sm tracking-wide text-gray-300">
          <a href="#" className="hover:text-white transition">New</a>
          <a href="#collection" className="hover:text-white transition">Collection</a>
          <a href="#featured" className="hover:text-white transition">Featured</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </div>

        <button className="bg-white text-black px-5 py-2 rounded-full text-sm font-bold hover:scale-105 transition">
          Shop Now
        </button>
      </nav>

      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center text-center">

        <img
          src="https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=2000&auto=format&fit=crop"
          alt="sports"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black" />

        <div className="relative z-10 max-w-5xl px-6">

          <p className="text-gray-300 tracking-[0.3em] text-sm mb-6">
            PERFORMANCE • POWER • SPEED
          </p>

          <h1 className="text-5xl md:text-8xl font-black leading-none tracking-tight mb-8">
            UNLEASH <br /> YOUR GAME
          </h1>

          <p className="text-gray-300 text-lg md:text-2xl max-w-2xl mx-auto mb-10">
            Premium sports gear crafted for athletes who never stop pushing limits.
          </p>

          <div className="flex flex-col md:flex-row gap-5 justify-center">
            <button className="bg-white text-black px-8 py-4 rounded-full font-bold hover:scale-105 transition">
              Explore Collection
            </button>

            <button className="border border-white/30 px-8 py-4 rounded-full font-bold hover:bg-white hover:text-black transition">
              Watch Story
            </button>
          </div>
        </div>
      </section>

      {/* FEATURE STRIP */}
      <section className="grid md:grid-cols-3 border-y border-white/10 text-center py-16">

        <div>
          <h3 className="text-2xl font-bold mb-2">Elite Quality</h3>
          <p className="text-gray-400">Built for professionals</p>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-2">Modern Design</h3>
          <p className="text-gray-400">Luxury sports aesthetics</p>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-2">Maximum Performance</h3>
          <p className="text-gray-400">Engineered for speed</p>
        </div>

      </section>

      {/* COLLECTION */}
      <section id="collection" className="px-6 md:px-12 py-24">

        <div className="flex items-end justify-between mb-14">
          <div>
            <p className="text-gray-400 mb-2">LATEST COLLECTION</p>

            <h2 className="text-4xl md:text-6xl font-black">
              Featured Gear
            </h2>
          </div>

          <button className="hidden md:block border border-white/20 px-6 py-3 rounded-full hover:bg-white hover:text-black transition">
            View All
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {/* CARD 1 */}
          <div className="group bg-zinc-900 rounded-3xl overflow-hidden">
            <div className="overflow-hidden">
              <img
                src="/jai.jpg"
                alt="cricket bat"
                className="w-full h-[450px] object-cover group-hover:scale-110 transition duration-500"
              />
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">
                Jai Premium Cricket Bat
              </h3>

              <p className="text-gray-400 mb-4">
                Built for explosive power and perfect balance.
              </p>

              <div className="flex items-center justify-between">
                <p className="text-xl font-bold">₹10,000</p>

                <button className="bg-white text-black px-5 py-2 rounded-full font-semibold">
                  Buy
                </button>
              </div>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="group bg-zinc-900 rounded-3xl overflow-hidden">
            <div className="overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=1200&auto=format&fit=crop"
                alt="football"
                className="w-full h-[450px] object-cover group-hover:scale-110 transition duration-500"
              />
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">
                Professional Football
              </h3>

              <p className="text-gray-400 mb-4">
                Precision control with premium grip technology.
              </p>

              <div className="flex items-center justify-between">
                <p className="text-xl font-bold">₹899</p>

                <button className="bg-white text-black px-5 py-2 rounded-full font-semibold">
                  Buy
                </button>
              </div>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="group bg-zinc-900 rounded-3xl overflow-hidden">
            <div className="overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=1200&auto=format&fit=crop"
                alt="basketball"
                className="w-full h-[450px] object-cover group-hover:scale-110 transition duration-500"
              />
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">
                Basketball Pro
              </h3>

              <p className="text-gray-400 mb-4">
                Designed for next-level indoor & outdoor play.
              </p>

              <div className="flex items-center justify-between">
                <p className="text-xl font-bold">₹799</p>

                <button className="bg-white text-black px-5 py-2 rounded-full font-semibold">
                  Buy
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* FEATURED */}
      <section
        id="featured"
        className="relative py-32 text-center overflow-hidden"
      >

        <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 via-black to-blue-600/20" />

        <div className="relative z-10 px-6">

          <p className="tracking-[0.3em] text-gray-400 mb-4">
            BUILT FOR ATHLETES
          </p>

          <h2 className="text-5xl md:text-7xl font-black mb-8">
            SPEED. POWER. DOMINANCE.
          </h2>

          <p className="text-gray-300 max-w-2xl mx-auto text-lg mb-10">
            Experience elite-level performance gear inspired by modern sports culture.
          </p>

          <button className="bg-white text-black px-10 py-4 rounded-full font-bold hover:scale-105 transition">
            Discover More
          </button>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="py-24 border-t border-white/10 text-center px-6"
      >

        <h2 className="text-4xl md:text-6xl font-black mb-12">
          Contact Us
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          <div className="bg-zinc-900 rounded-3xl p-10">
            <h3 className="text-xl font-bold mb-3">Email</h3>
            <p className="text-gray-400">sportx@email.com</p>
          </div>

          <div className="bg-zinc-900 rounded-3xl p-10">
            <h3 className="text-xl font-bold mb-3">Phone</h3>
            <p className="text-gray-400">+91 7599320375</p>
          </div>

          <div className="bg-zinc-900 rounded-3xl p-10">
            <h3 className="text-xl font-bold mb-3">Location</h3>
            <p className="text-gray-400">Meerut, Uttar Pradesh</p>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-8 text-center text-gray-500 text-sm">
        © 2026 JAI SPORTS — Built for champions
      </footer>

    </main>
  );
}