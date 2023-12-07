import Navigation from "./Navigation";
import Timer from "./Timer";

const StressSpace = () => {
  return (
  <>
  <Navigation />
  <div className="main">
    <video autoPlay muted loop><source src={fv} type="video/mp4"/></video>
      <div className="hover-text"> 
      <Timer />
      </div>
      <div>
        <iframe style={{borderRadius:12}} title="spotifyplaylistembed"
            src="https://open.spotify.com/embed/track/7bJAQD5AAq9zxQz1nal7tp?utm_source=generator" 
            width="50%" height="152" frameBorder="0" allowFullScreen="" 
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            loading="lazy">
        </iframe>
      </div>
  </div>
  </>
    )
}

export default StressSpace