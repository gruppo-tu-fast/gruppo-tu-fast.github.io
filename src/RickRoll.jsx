export default function RickRoll({ src }) {
  return (
    <div className="rickroll">
      <p className="escalation">
        Your complaint has been escalated to our senior grievance officer:
      </p>
      <div className="video-frame">
        <video src={src} autoPlay playsInline controls />
      </div>
    </div>
  )
}
