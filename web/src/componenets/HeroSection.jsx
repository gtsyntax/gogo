export default function HeroSection() {
    return (
      <main className="relative h-[450px] bg-brand-accent">
          {/* <img src="img/lady-smiling.jpg" className="object-cover w-full h-[450px]"/> */}
          <div className="container absolute top-0 left-1/2 -translate-x-1/2 h-full flex justify-between items-center">
                <div>
                    <h1 className="text-6xl font-bold">Order food for delivery</h1>
                    <p className="p-2">Whatever you want from local restaurants, brought right to your door.</p>
                </div>
                <div className="w-[400px] bg-white p-8 rounded-md">
                    <p className="text-brand-black font-semibold mb-2 text-center">See restaurants near you</p>
                    <form className="flex flex-col gap-y-2">
                        <input type="text" name="search" placeholder="Dudullu Mah." className="border-2 border-gray-200 outline-none p-2 rounded-md h-12 hover:border-brand-primary focus:border-brand-primary" required/>
                        <button 
                            type="submit" 
                            className="bg-brand-primary text-brand-white rounded-md h-12 hover:text-brand-yellow hover:bg-brand-secondary transition-all">Search</button>
                    </form>
                </div>
          </div>
      </main>
    )
  }
  