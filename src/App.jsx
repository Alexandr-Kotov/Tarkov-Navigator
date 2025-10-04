import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Locations from './pages/Locations'
import LocationDetail from './pages/LocationDetail'
import Quests from './pages/Quests'
import QuestDetail from './pages/QuestDetail'
import Items from './pages/Items'

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/maps" element={<Locations />} />
          <Route path="/maps/:slug" element={<LocationDetail />} />
          <Route path="/quests" element={<Quests />} />
          <Route path="/quests/:id" element={<QuestDetail />} />
          <Route path="/items" element={<Items />} />
        </Routes>
      </main>
      <footer className="text-center py-8 text-zinc-600 border-t border-zinc-800">
        © 2025 Tarkov Navigator — фан‑проект для игроков Escape from Tarkov.
      </footer>
    </div>
  )
}
