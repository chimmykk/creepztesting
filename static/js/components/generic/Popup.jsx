import {useRef, useContext} from "react"
import PopupContext from '../../context/PopupContext';
import Button from './Button';

const Popup = ({resetPopup}) => {
    const refBackground = useRef()
    const alert = useContext(PopupContext);

    if (alert.alert) {
      return (
        <>
          <div ref={refBackground}
              onClick={() => alert.clear()}
              className={`popup`}
          >
              <div className="popup__panel">
                  <div onClick={() => alert.clear()} className="popup__button-close">
                      <div className="wrapper"/>
                  </div>

                  <div className="popup__panel-wrapper">

                      {
                        (
                          <div className="popup__success">
                              {alert.alertContent.title} {alert.alertContent.title ? <br /> : ``}
                              {alert.alertContent.text}
                          </div>
                        )
                      }

                  </div>
                  {
                    alert.alertContent.buttonType === 'internal' ?
                      ( 
                        <Button extraClass="popup__button" onClick={() => resetPopup()} text={alert.alertContent.buttonText}/>
                      ) : 
                      (
                        <a href={alert.buttonLink}>
                          <Button extraClass="popup__button" text={alert.alertContent.buttonText}/>
                        </a>
                      )
                  }
              </div>
            </div>
        </>
      )
    } else {
      return null;
    }

}

export default Popup;
