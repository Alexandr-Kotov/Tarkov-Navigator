import { Link } from 'react-router-dom'
import locations from '../data/locations.json'

export default function Locations(){
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">Карты</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {locations.map(l=>(
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
