import { useState } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = ["base", "Profile", "powers", "quests", "summon"];

  return (
    <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-lg border-b border-white/10 z-50">
      <div className="flex justify-between items-center px-6 md:px-20 py-4">
        <h1 className="text-xl font-bold text-blue-500">Vineetha</h1>

        <ul className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <li key={item}>
              <Link
                to={item}
                smooth
                duration={500}
                className="capitalize cursor-pointer hover:text-blue-500 transition"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        <div className="md:hidden">
          {open ? (
            <X onClick={() => setOpen(false)} />
          ) : (
            <Menu onClick={() => setOpen(true)} />
          )}
        </div>
      </div>

      {open && (
        <ul className="md:hidden flex flex-col items-center gap-6 py-6 bg-slate-900">
          {navItems.map((item) => (
            <li key={item}>
              <Link
                to={item}
                smooth
                duration={500}
                onClick={() => setOpen(false)}
                className="capitalize cursor-pointer hover:text-blue-500 transition"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}  