import Link from "next/link";

export default function Navbar() {
  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-8">
        {/* Logo */}
        <Link href="/" className="text-white text-2xl font-bold">
          Mohammad Hossain
        </Link>

        {/* Nav Links */}
        <nav>
          <ul className="flex items-center gap-10">
            <li>
              <Link
                href="#"
                className="text-white text-sm hover:text-[#ff7a59]"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                href="#about"
                className="text-white text-sm hover:text-[#ff7a59]"
              >
                About
              </Link>
            </li>

            <li>
              <Link
                href="#projects"
                className="text-white text-sm hover:text-[#ff7a59]"
              >
                Projects
              </Link>
            </li>

            <li>
              <Link
                href="#contact"
                className="text-white text-sm hover:text-[#ff7a59]"
              >
                Contacts
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
