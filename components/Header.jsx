// "use client";

// import { useRouter } from "next/navigation"
import Link from "next/link";

export default function Header() {
    // const router = useRouter();

    // const home = () => {
    //     router.push('/');
    // }

    // const about = () => {
    //     router.push('/about');
    // }

    // const contact = () => {
    //     router.push('/contact');
    // }
    return (
        <header className="bg-black text-white flex justify-between px-5 py-8 sticky top-0 left-0 right-0">
            <div>
                <Link href="/" className="font-medium text-2xl tracking-wide">Blog</Link>
            </div>
            <nav>
                <div className="space-x-5 flex text-lg">
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                    <Link href="/contact">Contact</Link>
                </div>
            </nav>
        </header>
    )
}