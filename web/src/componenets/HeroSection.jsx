export default function HeroSection() {
    return (
      <main className="relative">
          <img src="img/lady-smiling.jpg" className="object-cover w-full h-[500px]"/>
          <div className="container absolute top-0 left-1/2 -translate-x-1/2 h-full flex justify-end items-center">
              <div className="w-[400px] bg-white p-8 rounded-md">
                  <p className="text-brand-primary font-semibold mb-2 text-center">See restaurants near you</p>
                  <form className="flex flex-col gap-y-2">
                      <input type="text" name="search" placeholder="Dudullu Mah." className="border-2 border-gray-200 outline-none p-2 rounded-md h-12 hover:border-brand-primary focus:border-brand-primary" required/>
                      <button 
                          type="submit" 
                          className="bg-brand-yellow text-brand-primary rounded-md h-12 hover:text-brand-yellow hover:bg-brand-secondary transition-all">Search</button>
                  </form>
              </div>
          </div>
      </main>
    )
  }
  