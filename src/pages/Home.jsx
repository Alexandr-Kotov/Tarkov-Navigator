import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import SearchBar from '../components/SearchBar'
import items from '../data/items.json'
import quests from '../data/quests.json'
import locations from '../data/locations.json'

export default function Home() {
  const [q, setQ] = useState('')
  const results = useMemo(()=>{
    if(!q.trim()) return []
    const ql = q.toLowerCase()
    const loc = locations.filter(l => l.name.toLowerCase().includes(ql) || l.tags?.some(t=>t.includes(ql)))
    const its = items.filter(i => i.name.toLowerCase().includes(ql))
    const qst = quests.filter(k => k.title.toLowerCase().includes(ql) || k.trader.toLowerCase().includes(ql))
    return [
      ...loc.map(l=>({type:'map', label:l.name, to:`/maps/${l.slug}`})),
      ...its.map(i=>({type:'item', label:i.name, to:`/items?focus=${encodeURIComponent(i.name)}`})),
      ...qst.map(k=>({type:'quest', label:`${k.trader}: ${k.title}`, to:`/quests/${k.id}`})),
    ].slice(0,8)
  },[q])

  return (
    <section className="py-16">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2">Найди путь через Тарков</h1>
        <p className="text-zinc-400">Карты, квесты, предметы и всё, что нужно для выживания</p>
      </div>
      <SearchBar value={q} onChange={setQ} placeholder="Поиск по квестам, картам или предметам..." />
      {q && (
        <div className="max-w-2xl mx-auto mt-4 space-y-2">
          {results.length ? results.map((r,i)=>(
            <Link key={i} to={r.to} className="block card p-3 hover:border-brand-500 transition">
              <div className="text-sm uppercase text-zinc-400">{r.type}</div>
              <div className="font-medium">{r.label}</div>
            </Link>
          )): (
            <div className="text-center text-zinc-500">Ничего не найдено</div>
          )}
        </div>
      )}
      <div className="grid md:grid-cols-3 gap-6 mt-12">
        {locations.slice(0,3).map(l=>(
          <Link key={l.slug} to={`/maps/${l.slug}`} className="card overflow-hidden hover:border-brand-500 transition">
            <img src={l.image} alt={l.name} className="w-full h-40 object-cover"/>
            <div className="p-4">
              <div className="font-semibold">{l.name}</div>
              <p className="text-sm text-zinc-400">{l.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
