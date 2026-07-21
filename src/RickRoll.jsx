export default function RickRoll({ src, onClose }) {
  return (
    <div className="rickroll" onClick={onClose}>
      <p className="escalation">
        Your complaint has been escalated to our senior grievance officer:
      </p>
      <div className="video-frame" onClick={(e) => e.stopPropagation()}>
        <video src={src} autoPlay playsInline controls />
      </div>
      <p className="dismiss-hint">tap anywhere to file another complaint</p>
    </div>
  )
}
