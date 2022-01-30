import {useEthers} from "@usedapp/core";

import discord from '../../assets/footer/discord.svg'
import twitter from '../../assets/footer/twitter.svg'
import union from '../../assets/footer/union.svg'

import pipe1 from '../../assets/footer/pipes/pipe-1.svg'
import pipe2 from '../../assets/footer/pipes/pipe-2.svg'
import pipe3 from '../../assets/footer/pipes/pipe-3.svg'
import pipe4 from '../../assets/footer/pipes/pipe-4.svg'

import bgPipe1 from '../../assets/footer/pipes-bg/pipe-1.svg'
import bgPipe2 from '../../assets/footer/pipes-bg/pipe-2.svg'
import Bubbles from "../generic/Bubbles"
import Button from '../generic/Button';


const bubbles = [
    {
        size: 'big',
        value: 19,
        range: {
            min: 10,
            max: 20
        }
    },
    {
        size: 'medium',
        value: 12,
        range: {
            min: 15,
            max: 21
        }
    },
    {
        size: 'small',
        value: 14,
        range: {
            min: 16,
            max: 22
        }
    }
]

const Footer = ({setActivePopup, setPopupStep, openMintModal}) => {
  const { activateBrowserWallet, account } = useEthers();

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
        <footer className="footer">
            <div className="container">
                <img className='bg__pipe-1' src={bgPipe1} alt="pipe"/>
                <img className='bg__pipe-2' src={bgPipe2} alt="pipe"/>

                <div className="footer__panel">


                    <div className="footer__panel-text">
                        <Bubbles animationName='bubbleFooter' bubbles={bubbles}/>
                        <span>Join the most powerful token in the metaverse</span>
                    </div>

                    <div className="footer__panel-pipes">
                        <img className="pipe pipe-1" src={pipe1} alt="pipe-1"/>
                        <img className="pipe pipe-2" src={pipe2} alt="pipe-2"/>
                        <img className="pipe pipe-3"  src={pipe3} alt="pipe-3"/>
                        <img className="pipe pipe-4"  src={pipe4} alt="pipe-4"/>
                    </div>

                    <a href="https://discord.com/invite/ColdBloodedCreepz" target="_blank"><Button extraClass="footer__panel-button" text={`join Us`}></Button></a>
                </div>

                <div className="footer__info">

                    <div className="footer__info-logos">
                        <a href="https://twitter.com/CBCreepz" target="_blank"><img src={twitter} alt="twitter"/></a>
                        <a href="https://discord.com/invite/ColdBloodedCreepz" target="_blank"><img src={discord} alt="discord"/></a>
                        <a href="https://opensea.io/collection/genesis-creepz" target="_blank"><img src={union} alt="union"/></a>
                    </div>
                </div>
                <div className="footer__copy">
                    <div className="footer__info-author">
                      licensing agreement
                    </div>
                    <div className="footer__info-author">
                      ColdBloodedCreepz 2021
                    </div>
                    <div className="footer__info-contract">
                        Smart contract: <a href="https://etherscan.io/address/0xfe8c6d19365453d26af321d0e8c910428c23873f" target="_blank">0xfE8...3873F</a>
                    </div>
                </div>

            </div>
        </footer>
    )
}

export default Footer
