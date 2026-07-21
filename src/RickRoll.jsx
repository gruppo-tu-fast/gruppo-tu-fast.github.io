export default function RickRoll() {
  return (
    <div className="rickroll">
      <p className="escalation">
        Your complaint has been escalated to our senior grievance officer:
      </p>
      <div className="video-frame">
        <iframe
          src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1&playsinline=1&rel=0"
          title="GTE Senior Grievance Officer"
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  )
}
