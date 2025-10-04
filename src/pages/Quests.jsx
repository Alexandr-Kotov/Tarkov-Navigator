import { Link, useSearchParams } from 'react-router-dom'
import quests from '../data/quests.json'

export default function Quests(){
  const [sp, setSp] = useSearchParams()
  const trader = sp.get('trader') || ''
  const qlist = quests.filter(q => !trader || q.trader === trader)

  const traders = [...new Set(quests.map(q=>q.trader))]

  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold">Квесты</h2>
        <select value={trader} onChange={e=>{setSp(e.target.value?{trader:e.target.value}:{})}} className="input max-w-xs">
          <option value="">Все торговцы</option>
          {traders.map(t=> <option key={t} value={t}>{t}</option>)}
        </select>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        {qlist.map(q=> (
          <Link key={q.id} to={`/quests/${q.id}`} className="card p-4 hover:border-brand-500 transition">
            <div className="text-sm uppercase text-zinc-400">{q.trader}</div>
            <div className="font-semibold">{q.title}</div>
            <div className="text-sm text-zinc-400">Локация: {q.location}</div>
          </Link>
        ))}
      </div>
    </section>
  )
}
