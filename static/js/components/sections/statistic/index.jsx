import Gallary from "./Gallary"
import { useState, useEffect, useContext } from "react";
import {useEthers} from "@usedapp/core";

import creep1 from '../../../assets/statistic/cards/creep-1.jpg'
import creep2 from '../../../assets/statistic/cards/creep-2.jpg'
import creep3 from '../../../assets/statistic/cards/creep-3.jpg'
import creep4 from '../../../assets/statistic/cards/creep-4.jpg'
import creep5 from '../../../assets/statistic/cards/creep-5.jpg'
import creep6 from '../../../assets/statistic/cards/creep-6.jpg'

import creep7 from '../../../assets/statistic/cards/creep-7.jpg'
import creep8 from '../../../assets/statistic/cards/creep-8.jpg'
import creep9 from '../../../assets/statistic/cards/creep-9.jpg'
import creep10 from '../../../assets/statistic/cards/creep-10.jpg'
import creep11 from '../../../assets/statistic/cards/creep-11.jpg'
import creep12 from '../../../assets/statistic/cards/creep-12.jpg'

import creep13 from '../../../assets/statistic/cards/creep-13.jpg'
import creep14 from '../../../assets/statistic/cards/creep-14.jpg'
import creep16 from '../../../assets/statistic/cards/creep-16.jpg'
import creep17 from '../../../assets/statistic/cards/creep-17.jpg'

import Button from '../../generic/Button';


import gif1 from '../../../assets/statistic/cards/cbc-spin-coin.json'
import gif2 from '../../../assets/statistic/cards/Trump.json'
import gif3 from '../../../assets/statistic/cards/tom-static.json'

import pipe1 from '../../../assets/statistic/pipes/pipe-1.svg'
import pipe2 from '../../../assets/statistic/pipes/pipe-2.svg'
import pipe3 from '../../../assets/statistic/pipes/pipe-3.svg'
import pipe4 from '../../../assets/statistic/pipes/pipe-4.svg'

import panel1 from '../../../assets/statistic/panels/panel-1.png'
import panel2 from '../../../assets/statistic/panels/panel-2.png'
import panel3 from '../../../assets/statistic/panels/panel-3.png'
import StatisticPanel from "./StatisticPanel"
import PopupContext from '../../../context/PopupContext';


const Statistic = ({setActiveStaking, armsSold}) => {
    const [screenW, setScreenW] = useState(0);
    const alert = useContext(PopupContext);
    const {activateBrowserWallet, account} = useEthers();

    const onError = () => {
      alert.showMetamskError();
    }

    useEffect(() => {
      const sWidth = window.innerWidth;
      setScreenW(sWidth);
    }, []);

    const cardsUpper = [
        {
            type: 'photo',
            image: creep3,
            colors: {
                border: '#5C7B7B',
                upperEffect: 'rgba(255,255,255,0.1)',
                upperInnerEffect: 'rgba(255,255,255,0.1)',
                lowerEffect: 'rgba(25, 27, 30, 0.11)',
                lowerInnerEffect: 'rgba(25, 27, 30, 0.11)'
            }
        },
        {
            type: 'photo',
            image: creep13,
            colors: {
                border: '#3A5555',
                upperEffect: 'rgba(255,255,255,0.1)',
                upperInnerEffect: 'rgba(255,255,255,0.1)',
                lowerEffect: 'rgba(25, 27, 30, 0.11)',
                lowerInnerEffect: 'rgba(25, 27, 30, 0.11)'
            }
        },

        {
            type: 'gif',
            image: [gif1, gif3],
            colors: {},
            borderGif: ['#425855', '#3D7272']

        },

        {
            type: 'photo',
            image: creep2,
            colors: {
                border: '#5C7B7B',
                upperEffect: 'rgba(255,255,255,0.1)',
                upperInnerEffect: 'rgba(255,255,255,0.1)',
                lowerEffect: 'rgba(25, 27, 30, 0.11)',
                lowerInnerEffect: 'rgba(25, 27, 30, 0.11)'
            }
        },

        {
            type: 'photo',
            image: creep14,
            colors: {
                border: '#5C7B7B',
                upperEffect: 'rgba(255,255,255,0.1)',
                upperInnerEffect: 'rgba(255,255,255,0.1)',
                lowerEffect: 'rgba(25, 27, 30, 0.11)',
                lowerInnerEffect: 'rgba(25, 27, 30, 0.11)'
            }
        },

        {
            type: 'photo',
            image: creep5,
            colors: {
                border: '#5C7B7B',
                upperEffect: 'rgba(255,255,255,0.1)',
                upperInnerEffect: 'rgba(255,255,255,0.1)',
                lowerEffect: 'rgba(25, 27, 30, 0.11)',
                lowerInnerEffect: 'rgba(25, 27, 30, 0.11)'
            }
        },

        {
          type: 'photo',
          image: creep6,
          colors: {
              border: '#5C7B7B',
              upperEffect: 'rgba(255,255,255,0.1)',
              upperInnerEffect: 'rgba(255,255,255,0.1)',
              lowerEffect: 'rgba(25, 27, 30, 0.11)',
              lowerInnerEffect: 'rgba(25, 27, 30, 0.11)'
          }
      },
    ]

    const cardsLower = [
        {
            type: 'photo',
            image: creep7,
            colors: {
                border: '#5C7B7B',
                upperEffect: 'rgba(255,255,255,0.1)',
                upperInnerEffect: 'rgba(255,255,255,0)',
                lowerEffect: 'rgba(25, 27, 30, 0.11)',
                lowerInnerEffect: 'rgba(25, 27, 30, 0.11)'
            }
        },
        {
            type: 'photo',
            image: creep8,
            colors: {
                border: '#3A5555',
                upperEffect: 'rgba(255,255,255,0.1)',
                upperInnerEffect: 'rgba(255,255,255,0)',
                lowerEffect: 'rgba(25, 27, 30, 0.11)',
                lowerInnerEffect: 'rgba(25, 27, 30, 0.11)'
            }
        },

        {
            type: 'gif',
            image: [gif2, gif3],
            colors: {},
            borderGif: ['#3D7272', '#3D7272']
        },

        {
            type: 'photo',
            image: creep17,
            colors: {
                border: '#3D7272',
                upperEffect: 'rgba(255,255,255,0.1)',
                upperInnerEffect: 'rgba(255,255,255,0)',
                lowerEffect: 'rgba(25, 27, 30, 0.11)',
                lowerInnerEffect: 'rgba(25, 27, 30, 0.11)'
            }
        },

        {
            type: 'photo',
            image: creep10,
            colors: {
                border: '#5C7B7B',
                upperEffect: 'rgba(255,255,255,0.1)',
                upperInnerEffect: 'rgba(255,255,255,0.1)',
                lowerEffect: 'rgba(25, 27, 30, 0.11)',
                lowerInnerEffect: 'rgba(25, 27, 30, 0.11)'
            }
        },

        {
            type: 'photo',
            image: creep16,
            colors: {
                border: '#5C7B7B',
                upperEffect: 'rgba(255,255,255,0.1)',
                upperInnerEffect: 'rgba(255,255,255,0.1)',
                lowerEffect: 'rgba(25, 27, 30, 0.11)',
                lowerInnerEffect: 'rgba(25, 27, 30, 0.11)'
            }
        },
        {
          type: 'photo',
          image: creep11,
          colors: {
              border: '#5C7B7B',
              upperEffect: 'rgba(255,255,255,0.1)',
              upperInnerEffect: 'rgba(255,255,255,0.1)',
              lowerEffect: 'rgba(25, 27, 30, 0.11)',
              lowerInnerEffect: 'rgba(25, 27, 30, 0.11)'
          }
      },
    ]


    const panels = [
        {title: '11,111', subtitle: 'Genesis Creepz'},
        {title: new Intl.NumberFormat('en-US').format(armsSold), subtitle: 'Reptile Armoury'},
        {title: '0', subtitle: 'Shapeshifters'},
    ]

    const additionalPanels = [
        'staking rewards',
        'conspiracy series',
        '1st ever NFT space launch',
        '700+ hand-drawn traits',
        '1/1 unique characters',
        '$100k publicity stunts',
    ]

    return (
        <section className='statistic'>
            <div className="container">


                <img className="statistic__pipe" src={pipe2} alt='pipe2'/>

                <div className="statistic__wrapper">
                      <Gallary 
                        cards={cardsUpper}
                        pipe={pipe1}
                        min={0.25}
                        max={0.34}
                        startingPoint={0}
                      />
                    <div className="statistic__info">
                        <div className="statistic__info-title">
                          Lizardnomicz
                        </div>

                        <div className="statistic__info-panels">
                            {
                                panels.map(
                                    (panel, index) =>
                                        (
                                            <StatisticPanel
                                                key={panel.subtitle + index}
                                                panel={panel}
                                            />
                                        ))
                            }


                        </div>

                        {/* <div className="statistic__info-subtitle">
                          <Button text="Stake To Yield" onClick={() => !account ? activateBrowserWallet(onError) : setActiveStaking(true)}/>
                          <Button text="Claim $loomi" onClick={() => !account ? activateBrowserWallet(onError) : setActiveStaking(true)} />
                        </div> */}

                        

                        {/* <div className="statistic__info-subtitle">
                            and so much more
                        </div>

                        <div className="statistic__info-additional-panels">
                            {
                                additionalPanels.map((panel, index) => (
                                    <div
                                        key={panel + index}
                                        className="statistic__additional-panel"
                                    >
                                        <span>{panel}</span>
                                    </div>
                                ))
                            }

                        </div> */}

{/* 
                        <div className="statistic__gallery"
                             style={{transform: `translateX(${scrolledBottom}%)`}}>
                            {
                                cardsLower.map((card, index) => (
                                    <CardOfGallery key={card.type + index} type='card' info={card}/>
                                ))
                            }

                            <img className="gallery__pipe lower" src={pipe3} alt="pipe"/>

                        </div> */}
                        <Gallary 
                        cards={cardsLower}
                        pipe={pipe3}
                        min={0.3}
                        max={0.39}
                        startingPoint={screenW < 1900 ? -50 : -20}
                      />
                    </div>
                </div>

                <img className="statistic__pipe-lower" src={pipe4} alt='pipe4'/>


            </div>
        </section>
    )
}

export default Statistic
