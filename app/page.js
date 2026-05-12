export default function Home() {
  return (
    <main className="bg-black text-white overflow-hidden">

      {/* HERO */}
      <section className="relative h-screen flex items-center">

        <img
          src="https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=2000&auto=format&fit=crop"
          alt="sports"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />

        <div className="relative z-10 px-8 md:px-20 max-w-5xl">

          <p className="uppercase tracking-[0.4em] text-gray-400 mb-6">
            Jai Sports 2026
          </p>

          <h1 className="text-6xl md:text-9xl font-black leading-none mb-8">
            PLAY
            <br />
            FEARLESS
          </h1>

          <p className="text-gray-300 text-lg md:text-2xl max-w-xl mb-10">
            Premium sports gear inspired by elite athletes and modern performance culture.
          </p>

          <button className="bg-white text-black px-8 py-4 rounded-full font-bold hover:scale-105 transition">
            Shop Collection
          </button>

        </div>
      </section>

      {/* IMAGE SECTION */}
      <section className="grid md:grid-cols-2">

        <div className="relative h-[500px] overflow-hidden">
          <img
            src="/jai.jpg"
            alt="bat"
            className="w-full h-full object-cover hover:scale-105 transition duration-700"
          />
        </div>

        <div className="flex items-center px-10 md:px-20 py-20 bg-zinc-950">

          <div>
            <p className="text-gray-500 uppercase tracking-[0.3em] mb-4">
              Featured Product
            </p>

            <h2 className="text-5xl font-black mb-6">
              Jai Premium Bat
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Crafted for power, balance, and precision.
              Designed for players who dominate every match.
            </p>

            <p className="text-3xl font-bold mb-8">
              ₹10,000
            </p>

            <button className="bg-white text-black px-8 py-4 rounded-full font-bold">
              Buy Now
            </button>
          </div>

        </div>
      </section>

      {/* FULL WIDTH STATEMENT */}
      <section className="py-32 text-center px-8">

        <p className="text-gray-500 tracking-[0.4em] uppercase mb-6">
          Performance Driven
        </p>

        <h2 className="text-5xl md:text-8xl font-black leading-tight max-w-6xl mx-auto">
          BUILT FOR ATHLETES
          <br />
          WHO NEVER STOP.
        </h2>

      </section>

      {/* PRODUCTS */}
      <section className="px-8 md:px-20 pb-32">

        <div className="grid md:grid-cols-2 gap-10">

          <div className="group relative overflow-hidden rounded-3xl">

            <img
              src="https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=1200&auto=format&fit=crop"
              alt="football"
              className="w-full h-[600px] object-cover group-hover:scale-105 transition duration-700"
            />

            <div className="absolute bottom-10 left-10">
              <h3 className="text-4xl font-black mb-3">
                Football Pro
              </h3>

              <p className="text-lg text-gray-200 mb-4">
                ₹899
              </p>

              <button className="bg-white text-black px-6 py-3 rounded-full font-bold">
                Shop
              </button>
            </div>

          </div>

          <div className="group relative overflow-hidden rounded-3xl">

            <img
              src="https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=1200&auto=format&fit=crop"
              alt="basketball"
              className="w-full h-[600px] object-cover group-hover:scale-105 transition duration-700"
            />

            <div className="absolute bottom-10 left-10">
              <h3 className="text-4xl font-black mb-3">
                Basketball Pro
              </h3>

              <p className="text-lg text-gray-200 mb-4">
                ₹799
              </p>

              <button className="bg-white text-black px-6 py-3 rounded-full font-bold">
                Shop
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-8 text-center text-gray-500">
        © 2026 JAI SPORTS
      </footer>

    </main>
  );
}