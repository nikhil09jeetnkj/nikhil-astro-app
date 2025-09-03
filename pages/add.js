
import { useState } from 'react'
import { useRouter } from 'next/router'

export default function AddPerson() {
  const [name, setName] = useState('')
  const [date, setDate] = useState('2000-01-01')
  const [time, setTime] = useState('12:00')
  const [place, setPlace] = useState('')
  const router = useRouter()

  function save() {
    const people = JSON.parse(localStorage.getItem('people') || '[]')
    const id = Date.now().toString(36)
    people.push({ id, name: name.trim(), date, time, place })
    localStorage.setItem('people', JSON.stringify(people))
    router.push('/')
  }

  return (
    <div className="page">
      <header className="header simple">
        <h2>Add Person</h2>
      </header>
      <main className="main narrow">
        <div className="card">
          <label>Name<input value={name} onChange={(e)=>setName(e.target.value)} /></label>
          <label>Birth date<input type="date" value={date} onChange={(e)=>setDate(e.target.value)} /></label>
          <label>Birth time<input type="time" value={time} onChange={(e)=>setTime(e.target.value)} /></label>
          <label>Place<input value={place} onChange={(e)=>setPlace(e.target.value)} placeholder="City, Country" /></label>
          <div className="actions">
            <button className="btn" onClick={save} disabled={!name.trim()}>Save</button>
          </div>
        </div>
      </main>
    </div>
  )
}
