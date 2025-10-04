import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/logo.svg'

const nav = [
  { to: '/maps', label: 'Карты' },
  { to: '/quests', label: 'Квесты' },
  { to: '/items', label: 'Предметы' },
]

export default function Header() {
  return (
    <header className="sticky top-0 z-10 bg-zinc-950/70 backdrop-blur border-b border-zinc-800">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-bold text-xl text-brand-500">
          <img src={logo} alt="Logo" className="w-7 h-7" />
          Tarkov Navigator
        </Link>
        <nav className="flex gap-6 text-zinc-300">
          {nav.map(n => (
            <NavLink key={n.to} to={n.to} className={({isActive}) => 
              `hover:text-brand-400 ${isActive ? 'text-brand-500' : ''}`}>
              {n.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
