import Link from "next/link"
import Image from "next/image"
import Logo from "@/public/images/logo.png"

export default function Navbar() {
    return (
        <div className="fixed top-0 flex justify-between items-center bg-transparent w-full px-5 py-5 z-20">
            <div>
                <Link
                    href="#cards"
                    className="text-2xl lg:text-6xl font-semibold flex items-center gap-x-2"
                >
                    <Image
                        src={Logo}
                        alt="Logo"
                        className="h-[60px] lg:h-[100px] w-auto"
                    />
                    <p className="text-[0px] lg:text-5xl">Herdcards</p>
                </Link>
            </div>
            <div className="flex items-center gap-x-5 ">
                <Link
                    href="#cards"
                    className="text-lg lg:text-3xl font-semibold"
                >
                    Cards
                </Link>
                <Link
                    href="#about"
                    className="text-lg lg:text-3xl font-semibold"
                >
                    About
                </Link>
            </div>
        </div>
    )
}
