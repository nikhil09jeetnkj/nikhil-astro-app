
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function PersonList(){
  const [people, setPeople] = useState([])
  useEffect(()=>{
    setPeople(JSON.parse(localStorage.getItem('people') || '[]'))
    const onStorage = ()=> setPeople(JSON.parse(localStorage.getItem('people') || '[]'))
    window.addEventListener('storage', onStorage)
    return ()=> window.removeEventListener('storage', onStorage)
  },[])

  if (people.length === 0) return <div className="empty">No profiles yet — tap Add Person</div>

  return (
    <div className="list">
      {people.map(p=> (
        <Link key={p.id} href={'/person/' + p.id}><a className="row">
          <div className="left">
            <div className="name">{p.name}</div>
            <div className="meta">{p.date} • {p.time} • {p.place}</div>
          </div>
          <div className="right">▶</div>
        </a></Link>
      ))}
    </div>
  )
}
