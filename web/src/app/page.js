import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen">
      <nav className='container mx-auto flex justify-between items-center mt-4'>
        <ul className='flex items-center'>
          <li className='font-bold text-5xl py-4'><Link href="/">Gogo</Link></li>
          <li className='text-xl py-4 pl-8'><Link href="/partner/register">Become a partner</Link></li>
          <li className='text-xl py-4 pl-4'><Link href="/">Become a courier</Link></li>
        </ul>
        <ul className='flex'>
          <li className='py-4 px-8 text-xl'>
            <Link href="/customer/login">Log in</Link></li>
          <li className='py-4 px-8 text-xl bg-black text-white rounded-full'>
            <Link href="/customer/register">Create account</Link>
          </li>
        </ul>
      </nav>

      <section className='h-[700px] flex flex-col justify-center gap-4 container mx-auto'>
        <h1 className='font-bold text-9xl'>Order food<br/>for delivery</h1>
        <p className='text-2xl'>Whatever you want from stores you know, brought right to your door.</p>
        <Link href="/stores" className='font-light text-2xl underline'>See stores near you</Link>
      </section>
    </main>
  )
}
