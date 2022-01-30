import backgroundPyramid from '../../assets/pyramid/pyramid-background.svg'
import {useEthers} from "@usedapp/core";

import plus from '../../assets/pyramid/plus.png'
import minus from '../../assets/pyramid/minus.svg'
import logo from '../../assets/pyramid/pyramid-logo.svg'
import button from '../../assets/pyramid/button.svg'
import {useState} from "react"
import Lottie from "lottie-react"
import fire1 from '../../assets/pyramid/fires/fire 1.json'
import fire2 from '../../assets/pyramid/fires/fire 2.json'
import fire3 from '../../assets/pyramid/fires/fire 3.json'
import fire4 from '../../assets/pyramid/fires/fire 4.json'
import fire5 from '../../assets/pyramid/fires/fire 5.json'
import fire6 from '../../assets/pyramid/fires/fire 6.json'
import fire7 from '../../assets/pyramid/fires/fire 7.json'
import Button from '../generic/Button';


const technicalities = [
    {
        title: 'Reptilianz',
        subtitle: 'Socialites only, these are the creep-de-la-creep. Need help getting acquainted? Mark zuckerberg is your man.. *cough* lizard.',
        id: 0,
        logo: logo
    },
    {
        title: 'Flat Earthers',
        subtitle: 'Creepz with a horizonal disposition. this tier of members are the vips, the walk into the room dripping kinda creepz. With members all “around” the globe 👀',
        id: 1
    },
    {
        title: 'Wen moon landers',
        subtitle: 'Rub shoulders with neil armstrong by the suave martini bar. This is an exclusive bunch of inter-stellar graphic design pros.',
        id: 2
    },
    {
        title: 'The Anonymous',
        subtitle: 'We don’t know anything about them.. Ask elon at reception for details.',
        id: 3
    },
    {
        title: 'Area 51',
        subtitle: 'Is your spouse getting on your nerves.. come to area 51 and get some “space”. our tip: hit the bar and chat to someone new about global warming - it’s an icebreaker.',
        id: 4
    }

]

const Pyramid = ({setActivePopup, setPopupStep, openMintModal}) => {

    const [activePanel, setActivePanel] = useState(0)
    const { activateBrowserWallet, account } = useEthers();


    const handleActivePanel = (id) => {
        if (activePanel !== id) {
            setActivePanel(id)
        } else {
            setActivePanel(null)
        }
    }

    const onError = () => {
      setPopupStep(2)
      setActivePopup(true)
    }

    const activateWallet = async () => {
      if (!account) {
          activateBrowserWallet(onError);
        }
    }

    return (
        <div className='pyramid'>
            <div className="container">
                <div className="pyramid__title">climb the $loomi level</div>
                <div className="pyramid__figures">
                    {
                        technicalities && technicalities.map(({logo = false, title, subtitle, id}) => (
                            <div
                                key={title + id}
                                className='wrapper'>
                                <div
                                    className={`pyramid__figure figure-${id + 1} ${id === activePanel ? 'active' : ''}`}
                                    onClick={() => handleActivePanel(id)}
                                >
                                    {
                                        logo && <img className='pyramid__figure-logo' src={logo} alt="logo"/>
                                    }
                                    <div className="pyramid__figure-name">
                                        {title}
                                    </div>
                                    <img
                                        className='pyramid__figure-button'
                                        src={id === activePanel ? minus : plus} alt="+"
                                    />
                                </div>

                                {
                                    id === activePanel ? <div className="pyramid__description">
                                        {subtitle}
                                    </div> : ''
                                }
                            </div>
                        ))
                    }

                </div>

                {/* <button className='pyramid__figure-button-2' onClick={account ? () => {openMintModal(1)} : activateWallet}>
                    <span>{account ?
                        `Apply to the inner cirlce` : `Link Metamask`}
                    </span>
                </button> */}

                <Button color="#718280" hover="#718280" extraClass="pyramid__figure-button-2" 
                  text={account ? `Apply to the inner cirlce` : `Connect Wallet`}
                  onClick={account ? () => {} : activateWallet}
                />

                <div className="money">
                    <Lottie className='money__item money__item-1' animationData={fire1} />
                    <Lottie className='money__item money__item-2' animationData={fire2} />
                    <Lottie className='money__item money__item-3' animationData={fire3} />
                    <Lottie className='money__item money__item-4' animationData={fire4} />
                    <Lottie className='money__item money__item-5' animationData={fire5} />
                    <Lottie className='money__item money__item-6' animationData={fire6} />
                    <Lottie className='money__item money__item-7' animationData={fire7} />
                    <Lottie className='money__item money__item-8' animationData={fire1} />
                    <Lottie className='money__item money__item-9' animationData={fire3} />
                    <Lottie className='money__item money__item-10' animationData={fire4} />
                    <Lottie className='money__item money__item-11' animationData={fire5} />
                </div>
            </div>
        </div>
    )
}

export default Pyramid
