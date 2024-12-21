import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import Button from '../StyledComponents'
import './popup.css'

const ReactPopup = () => (
  <Popup
    modal
    trigger={
      <Button type="button" className="rulesBtn">
        Rules
      </Button>
    }
  >
    {close => (
      <div className="col">
        <button type="button" onClick={() => close()} className="close">
          <RiCloseLine />
        </button>
        <img
          src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
          alt="rules"
          className="popupImg"
        />
      </div>
    )}
  </Popup>
)
export default ReactPopup
