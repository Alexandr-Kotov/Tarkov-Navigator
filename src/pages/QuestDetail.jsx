import { useParams, Link } from 'react-router-dom'
import quests from '../data/quests.json'

export default function QuestDetail(){
  const { id } = useParams()
  const quest = quests.find(q=>String(q.id)===String(id))
  if(!quest) return <div className="text-zinc-400">Квест не найден</div>

  return (
    <section className="space-y-4">
      <Link to="/quests" className="link">← Назад к квестам</Link>
      <h1 className="text-3xl font-bold">{quest.title}</h1>
      <div className="text-zinc-400">Торговец: {quest.trader} • Локация: {quest.location}</div>
      <div className="card p-4">
        <h3 className="font-semibold mb-2">Условия</h3>
        <ul className="list-disc list-inside text-zinc-300">
          {quest.objectives.map((o,i)=>(<li key={i}>{o}</li>))}
        </ul>
      </div>
      <div className="card p-4">
        <h3 className="font-semibold mb-2">Награды</h3>
        <div className="text-zinc-300">{quest.rewards.join(', ')}</div>
      </div>
      <div className="card p-4">
        <h3 className="font-semibold mb-2">Гайд</h3>
        <ol className="list-decimal list-inside space-y-1 text-zinc-300">
          {quest.guide.map((g,i)=>(<li key={i}>{g}</li>))}
        </ol>
      </div>
    </section>
  )
}
