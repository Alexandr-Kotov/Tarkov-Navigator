import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import items from '../data/items.json'

export default function Items(){
  const [sp] = useSearchParams()
  const focus = sp.get('focus')||''
  const [q,setQ] = useState(focus)

  const filtered = useMemo(()=>{
    const ql = q.toLowerCase()
    return items.filter(i => !ql || i.name.toLowerCase().includes(ql) || i.type.toLowerCase().includes(ql))
  },[q])

  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">Предметы</h2>
      <input className="input mb-4" placeholder="Фильтр по названию или типу" value={q} onChange={e=>setQ(e.target.value)} />
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filtered.map(i=> (
          <div key={i.id} className="card p-4">
            <div className="font-semibold">{i.name}</div>
            <div className="text-sm text-zinc-400">Тип: {i.type}</div>
            {i.usedIn?.length ? <div className="text-xs text-zinc-500 mt-2">Нужно для: {i.usedIn.join(', ')}</div> : null}
          </div>
        ))}
      </div>
    </section>
  )
}
