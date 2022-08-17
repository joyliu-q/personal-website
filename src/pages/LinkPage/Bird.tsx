import './bird.scss';

const BirdBackground = () => (
  <div className="container">
    <div id='sky'>
      <div className="bird">
        {[...Array(20)].map((_, i) => <div key={i} className="wind" />)}
        <div className="bird_body">
          <div className="bird_head" />
          <div className="bird_wing_left">
            <div className="bird_wing_left_top" />
          </div>
          <div className="bird_wing_right">
            <div className="bird_wing_right_top" />
          </div>
          <div className='bird_tail_left' />
          <div className='bird_tail_right' />
        </div>
      </div>
    </div>
  </div>
)

export default BirdBackground;