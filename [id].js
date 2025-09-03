
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Link from 'next/link'

function mockChart(person) {
  const seed = [...person.id].reduce((s,c)=>s + c.charCodeAt(0), 0)
  const planets = ['Sun','Moon','Mercury','Venus','Mars','Jupiter','Saturn','Rahu','Ketu']
  return planets.map((p,i)=>({ name: p, longitude: (seed*7 + i*40) % 360, sign: Math.floor(((seed*7 + i*40)%360)/30)+1 }))
}

export default function PersonDetail() {
  const router = useRouter()
  const { id } = router.query
  const [person, setPerson] = useState(null)
  const [chart, setChart] = useState(null)

  useEffect(()=>{
    if (!id) return
    const people = JSON.parse(localStorage.getItem('people') || '[]')
    const p = people.find(x=>x.id === id)
    setPerson(p)
    if (p) setChart(mockChart(p))
  }, [id])

  if (!person) return <div className="page"><main className="main narrow"><div className="card">Loading...</div></main></div>

  return (
    <div className="page">
      <header className="header simple">
        <Link href="/"><a className="btn">◀ Back</a></Link>
        <h2>{person.name}</h2>
      </header>
      <main className="main narrow">
        <div className="card">
          <h3>Details</h3>
          <p><strong>Date:</strong> {person.date} <strong>Time:</strong> {person.time}</p>
          <p><strong>Place:</strong> {person.place}</p>
          <hr />
          <h3>Mock Chart</h3>
          <div className="planets">
            {chart && chart.map(p=>(
              <div key={p.name} className="planet">
                <div className="pn">{p.name}</div>
                <div className="pv">Lon: {Math.round(p.longitude)}° — Sign #{p.sign}</div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
