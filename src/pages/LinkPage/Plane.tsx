import './style.scss';

const PlaneBackground = () => (
  <div className='plane-container'>
    <div className="ltop"></div>
    <div className="lbot"></div>
    <div className="rtop"></div>
    <div className="rbot"></div>
    <div className="container">
      <div id="lside"></div>
      <div id="rside"></div>
      <div id="lwing"></div>
      <div id="rwing"></div>
    </div>
    <div className="sun"></div>
    <div className="wind">
      <div id="lw1"></div>
      <div id="lw2"></div>
      <div id="lw3"></div>
      <div id="rw1"></div>
      <div id="rw2"></div>
      <div id="rw3"></div>
      <div id="rw4"></div>
      {[...Array(20)].map((_, i) => <div key={i} className="wind-part" />)}
    </div>
  </div>
)

// Haha, get it? Plane background. ;D
export default PlaneBackground;