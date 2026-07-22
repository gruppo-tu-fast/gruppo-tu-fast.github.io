import { useState } from 'react'
import RickRoll from './RickRoll.jsx'
import twoButtons from './assets/two-buttons.png'

function RedButton({ variant, label, showHint, onPress }) {
  return (
    <button
      className={`meme-btn meme-btn--${variant}`}
      aria-label={label}
      onClick={onPress}
    >
      {showHint && <span className="btn-hint" />}
      <span className="btn-base" />
      <span className="btn-cap" />
      <span className="btn-shine" />
    </button>
  )
}

export default function App() {
  const [video, setVideo] = useState(null)
  const [pressed, setPressed] = useState(false)

  const press = (src) => {
    setPressed(true)
    setVideo({ src })
  }

  return (
    <main className="page">
      <header className="masthead">
        <h1>GTE Grievance Portal</h1>
      </header>

      <div className="meme-wrap">
        <img
          src={twoButtons}
          alt="Two buttons meme: a sweating man agonizes between pressing File Complaint and Long Pull @ 22"
          className="meme"
        />
        <RedButton
          variant="file"
          label="File Complaint"
          showHint={!pressed}
          onPress={() => press('/rick.mp4')}
        />
        <RedButton
          variant="text"
          label="Send Text"
          showHint={!pressed}
          onPress={() => press('/tears.mp4')}
        />
        <div className="watermark">Gruppo tu Fast</div>
        {video && <RickRoll {...video} onClose={() => setVideo(null)} />}
      </div>

      <footer className="fine-print">
        Complaints are processed in the order they are ignored. GTE assumes no
        liability for hurt feelings, headwinds, or getting dropped.
      </footer>
    </main>
  )
}
