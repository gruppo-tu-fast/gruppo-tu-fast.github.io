import { useState } from 'react'
import RickRoll from './RickRoll.jsx'
import twoButtons from './assets/two-buttons.png'

export default function App() {
  const [videoId, setVideoId] = useState(null)

  return (
    <main className="page">
      <header className="masthead">
        <h1>Official GTE Grievance Intake Portal</h1>
      </header>

      <div className="meme-wrap">
        <img
          src={twoButtons}
          alt="Two buttons meme: a sweating man agonizes between pressing File Complaint and Send Text"
          className="meme"
        />
        {/* invisible tap targets over the two red buttons */}
        <button
          className="hotspot"
          style={{ left: '4%', top: '6%', width: '40%', height: '32%' }}
          onClick={() => setVideoId('dQw4w9WgXcQ')}
          aria-label="File Complaint"
        />
        <button
          className="hotspot"
          style={{ left: '44%', top: '5%', width: '42%', height: '31%' }}
          onClick={() => setVideoId('XXYlFuWEuKI')}
          aria-label="Send Text"
        />
        {videoId && <RickRoll videoId={videoId} />}
      </div>

      <footer className="fine-print">
        Complaints are processed in the order they are ignored. GTE assumes no
        liability for hurt feelings, headwinds, or getting dropped.
      </footer>
    </main>
  )
}
