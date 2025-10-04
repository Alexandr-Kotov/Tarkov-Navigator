import { useParams } from 'react-router-dom'
import locations from '../data/locations.json'
import quests from '../data/quests.json'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'

const pin = new L.Icon({ iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png', iconSize: [25,41], iconAnchor:[12,41] })

export default function LocationDetail(){
  const { slug } = useParams()
  const loc = locations.find(l=>l.slug===slug)
  const locQuests = quests.filter(q => q.location === loc?.slug)

  if(!loc) return <div className="text-zinc-400">Локация не найдена</div>

  return (
    <section className="space-y-6">
      <header className="flex items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">{loc.name}</h1>
          <p className="text-zinc-400">{loc.description}</p>
        </div>
        <img src={loc.image} className="w-52 h-28 object-cover rounded-xl border border-zinc-800" alt={loc.name}/>
      </header>

      <div className="h-[420px] rounded-2xl overflow-hidden border border-zinc-800">
        <MapContainer center={loc.center} zoom={loc.zoom || 13} style={{height:'100%', width:'100%'}}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="&copy; OpenStreetMap" />
          {loc.points?.map((p,i)=>(
            <Marker key={i} position={p.coords} icon={pin}>
              <Popup>
                <div className="font-semibold">{p.title}</div>
                <div className="text-sm text-zinc-700">{p.type}</div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-3">Квесты на локации</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {locQuests.length ? locQuests.map(q=> (
            <a key={q.id} href={`/quests/${q.id}`} className="card p-4 hover:border-brand-500 transition">
              <div className="text-sm uppercase text-zinc-400">{q.trader}</div>
              <div className="font-semibold">{q.title}</div>
              <div className="text-sm text-zinc-400">Награды: {q.rewards.join(', ')}</div>
            </a>
          )) : <div className="text-zinc-400">Нет квестов</div>}
        </div>
      </div>
    </section>
  )
}
