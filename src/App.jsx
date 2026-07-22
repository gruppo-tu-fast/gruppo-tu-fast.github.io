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

// Long Pull @ 22 rotates through these on every press. Add more videos here
// and the rotation grows automatically.
const LONG_PULL_VIDEOS = ['/chase.mp4', '/cortado-coffee-shop.mp4', '/tears.mp4']

export default function App() {
  const [video, setVideo] = useState(null)
  const [pressed, setPressed] = useState(false)
  const [longPullIndex, setLongPullIndex] = useState(() =>
    Math.floor(Math.random() * LONG_PULL_VIDEOS.length)
  )

  const press = (src) => {
    setPressed(true)
    setVideo({ src })
  }

  const pressLongPull = () => {
    press(LONG_PULL_VIDEOS[longPullIndex])
    setLongPullIndex((i) => (i + 1) % LONG_PULL_VIDEOS.length)
  }

  return (
    <main className="page">
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
          onPress={() => press('/chase.mp4')}
        />
        <RedButton
          variant="text"
          label="Long Pull @ 22"
          showHint={!pressed}
          onPress={pressLongPull}
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
