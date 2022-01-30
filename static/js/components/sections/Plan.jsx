import Lottie from "lottie-react";
import rocketFire from "../../assets/plan/cbc-rocket-fire.json";

import ethCoin from '../../assets/plan/eth-coin.svg'
import divisionsVessel from '../../assets/plan/divisions-vessel.svg'

import leftRivetBlue from '../../assets/plan/rivets/left/left.svg'
import lowerRivetBlue from '../../assets/plan/rivets/left/lower.svg'

import upperRivetGreen from '../../assets/plan/rivets/center/uppper.svg'
import lowerRivetGreen from '../../assets/plan/rivets/center/lower.svg'

import rightRivetYellow from '../../assets/plan/rivets/right/right.svg'
import lowerRivetYellow from '../../assets/plan/rivets/right/lower.svg'

import creep from '../../assets/plan/creep.svg'

import card1Decor1 from '../../assets/plan/decorations/card-1/decor-1.png'
import card1Decor2 from '../../assets/plan/decorations/card-1/decor-2.png'
import card1Decor3 from '../../assets/plan/decorations/card-1/decor-3.png'
import card1Decor4 from '../../assets/plan/decorations/card-1/decor-4.png'
import card1Decor5 from '../../assets/plan/decorations/card-1/decor-4-mobile.png'

import card2Decor1 from '../../assets/plan/decorations/card-2/decor-1.png'

import card3Decor1 from '../../assets/plan/decorations/card-3/decor-1.png'

import card4Decor1 from '../../assets/plan/decorations/card-4/decor-1.svg'
import card4Decor2 from '../../assets/plan/decorations/card-4/decor-2.svg'
import card4Decor3 from '../../assets/plan/decorations/card-4/decor-3.svg'
import card4Decor4 from '../../assets/plan/decorations/card-4/decor-4.svg'

import bgPipe from '../../assets/plan/upper-pipe-bg.svg'
import bgPipeMobile from '../../assets/plan/upper-pipe-bg-mobile.svg'
import Bubbles from "../generic/Bubbles"
import {useRef} from "react";

const bubblesCenterPanel = [
    {
        size: 'big',
        value: 7,
        range: {
            min: 10,
            max: 15
        }
    },
    {
        size: 'medium',
        value: 4,
        range: {
            min: 11,
            max: 16
        }
    },
    {
        size: 'small',
        value: 5,
        range: {
            min: 15,
            max: 20
        }
    }
]

const bubblesSmallPipe = [
    {
        size: 'big',
        value: 2,
        range: {
            min: 10,
            max: 11
        }
    },
    {
        size: 'medium',
        value: 5,
        range: {
            min: 11,
            max: 12
        }
    },
    {
        size: 'small',
        value: 8,
        range: {
            min: 12,
            max: 13
        }
    }
]

const bubblesMainPipe = [
    {
        size: 'big',
        value: 5,
        range: {
            min: 21,
            max: 22
        }
    },
    {
        size: 'medium',
        value: 10,
        range: {
            min: 22,
            max: 23
        }
    },
    {
        size: 'small',
        value: 10,
        range: {
            min: 23,
            max: 24
        }
    }
]

const bubblesProgressPanel = [
    {
        size: 'big',
        value: 2,
        range: {
            min: 3,
            max: 9
        }
    },
    {
        size: 'medium',
        value: 4,
        range: {
            min: 4,
            max: 10
        }
    },
    {
        size: 'small',
        value: 6,
        range: {
            min: 3,
            max: 10
        }
    }
]


const Plan = ({shouldPlay, currentDrop}) => {
    const refCard3 = useRef()

    // const percent = 0.75

    return (
        <section className='plan'>
            <div className="container">
                <img className='plan__upper-pipe-bg' src={bgPipe} alt="bgPipes"/>
                <img className='plan__upper-pipe-bg mobile' src={bgPipeMobile} alt="bgPipes"/>


                <div className="plan__title">
                    <span>Invasion</span><br/><span> Activations</span>
                </div>

                <div className="plan__map">


                    <div className="rivet upper"/>

                    <div className="plan__pipe">


                        <div className="plan__pipe-inner">

                            <div className="inner" style={{height: `65%`}}>
                                <Bubbles bubbles={bubblesMainPipe} animationName='bubblePlanProgress'/>
                            </div>


                            <div className="plan__step step-1">
                                <div className="plan__step-progress">
                                    <div className="inner">
                                        <Bubbles bubbles={bubblesProgressPanel} animationName='bubblePlanProgressPanel'/>
                                        <span className="plan__step-progress-value">Season 1</span>
                                        <span className="plan__step-progress-note">January</span>
                                    </div>
                                </div>

                                <div className="plan__card">

                                    <div className="plan__card-text">
                                        <div className="plan__card-title">
                                        THE OVERLORD launches season 1 invasion games
                                        </div>

                                        {/* <div className="plan__card-subtitles">
                                            <div className="plan__card-subtitle">&#8226; $loomi tokens released</div>
                                            <div className="plan__card-subtitle">&#8226; Begin accumalating your tokens daily</div>
                                            <div className="plan__card-subtitle">&#8226; Token gated discord channels</div>
                                        </div> */}
                                    </div>

                                    <div className="plan__card-decoration">
                                        <img className='decor-1' src={card1Decor1} alt="decor"/>
                                        <img className='decor-3' src={card1Decor3} alt="decor"/>
                                        <img className='decor-4' src={card1Decor4} alt="decor"/>
                                        <img className='decor-5' src={card1Decor5} alt="decor"/>
                                        
                                    </div>

                                </div>


                                <div className="bg-pipes"/>

                                <div className="plan-bg__pipe yellow">
                                    <div className="circle upper"/>
                                    <div className="pipe">
                                        <div className="inner">
                                            <Bubbles bubbles={bubblesSmallPipe} animationName='bubblePlan'/>
                                        </div>
                                    </div>
                                    <div className="circle lower"/>
                                </div>

                            </div>

                            <div className="plan__step step-2">
                                <div className="plan__step-progress">
                                    <div className="inner">
                                        <Bubbles bubbles={bubblesProgressPanel} animationName='bubblePlanProgressPanel'/>
                                        <span className="plan__step-progress-value">Season 2</span>
                                        <span className="plan__step-progress-note">Q1 2022</span>
                                    </div>
                                </div>

                                <div className="plan__card">
                                    <div className="plan__card-frame" >
                                      <div className="plan__card-frame-left" style={shouldPlay ? {animation: `5s leftGate`, animationFillMode: `forwards`} : {}}></div>
                                      <div className="plan__card-frame-right" style={shouldPlay ? {animation: `5s rightGate forwards`} : {}}></div>
                                    </div>
                                    <div className="plan__card-text">
                                        <div className="plan__card-title">
                                        top secret: We Unleash Cross-creepz Breeding
                                        </div>

                                        {/* <div className="plan__card-subtitles">
                                            <div className="plan__card-subtitle">&#8226; Series of unique collabs with blue chip projects</div>
                                            <div className="plan__card-subtitle">&#8226; The mercanary drop and play-to-win game </div>
                                        </div> */}
                                    </div>

                                    <div className="plan__card-decoration">
                                        <img className='decor-1' src={card2Decor1} alt="decor"/>
                                    </div>

                                </div>


                            </div>

                            <div className="plan__step step-3">
                                <div className="plan__step-progress">
                                    <div className="inner">
                                        <Bubbles bubbles={bubblesProgressPanel} animationName='bubblePlanProgressPanel'/>
                                        <span className="plan__step-progress-value">Season 3</span>
                                        <span className="plan__step-progress-note">H1 2022</span>
                                    </div>
                                </div>

                                <div className="wrapper">
                                    <div className="plan__card" ref={refCard3}>

                                        <div className="plan__card-text">
                                            <div className="plan__card-title">
                                                <span>Cyber creepz launch at Times Square</span>
                                            </div>

                                            {/* <div className="plan__card-subtitles">
                                                <div className="plan__card-subtitle">&#8226; All Creepz displayed on famous NYC paid-for ad space</div>
                                                <div className="plan__card-subtitle">&#8226; Partnered with leading Times Square ad agent</div>
                                                <div className="plan__card-subtitle">&#8226; Earth takeover announced</div>
                                            </div> */}
                                        </div>

                                    </div>

                                    <div className="plan__card-decoration">
                                        <img className='decor-1' src={card3Decor1} alt="decor"/>
                                    </div>
                                </div>


                                <div className="bg-pipes"/>

                            </div>

                            <div className="plan__step step-4">
                                <div className="plan__step-progress">
                                    <div className="inner">
                                        <Bubbles bubbles={bubblesProgressPanel} animationName='bubblePlanProgressPanel'/>
                                        <span className="plan__step-progress-value">Season 4</span>
                                        <span className="plan__step-progress-note">H1 2022</span>
                                    </div>
                                </div>

                                <div className="plan__card">

                                    <div className="plan__card-text">
                                        <div className="plan__card-title">
                                        Space Creepz IRL space launch..yep, seriously 
                                        </div>

                                        {/* <div className="plan__card-subtitles">
                                            <div className="plan__card-subtitle">&#8226; 4K TV launched to space using high altitude balloon</div>
                                            <div className="plan__card-subtitle">&#8226; Partnered with leading space marketing company</div>
                                            <div className="plan__card-subtitle">&#8226; Live streams,live auctions and space selfies</div>
                                        </div> */}
                                    </div>

                                    <div className="plan__card-decoration">
                                        <img className='decor-1' src={card4Decor1} alt="decor"/>
                                        <img className='decor-2' src={card4Decor2} alt="decor"/>
                                        <img className='decor-3' src={card4Decor3} alt="decor"/>
                                        {/* <img className='decor-4' src={card4Decor4} alt="decor"/> */}
                                        {/* <img className='decor-5' src={card4Decor4} alt="decor"/> */}
                                        <Lottie className='right-fire' animationData={rocketFire} />
                                        <Lottie className='left-fire' animationData={rocketFire} />
                                    </div>

                                </div>

                            </div>

                            <div className="plan__step final">
                                <div className="vessel left">
                                    <div className="inner">
                                        <Bubbles animationName='bubblePlan' bubbles={bubblesCenterPanel}/>
                                        <img className='vessel__divisions' src={divisionsVessel} alt="divisionsVessel"/>
                                    </div>

                                    <img className='left-river' src={leftRivetBlue} alt="rivet"/>
                                    <img className='lower-river' src={lowerRivetBlue} alt="rivet"/>

                                    <img className='vessel__coin coin' src={ethCoin} alt="ethCoin"/>
                                </div>

                                <div className="wrapper">
                                    <div className="vessel center">
                                        <div className="inner">
                                            <Bubbles animationName='bubblePlan' bubbles={bubblesCenterPanel}/>
                                            <img className='vessel__divisions' src={divisionsVessel} alt="divisionsVessel"/>

                                            <div className="vessel__title">$1,000,000</div>
                                            <div className="vessel__subtitle">A membership club to build the Cold Blooded Creepz universal platform</div>
                                        </div>


                                        <img className='upper-rivet' src={upperRivetGreen} alt="rivet"/>
                                        <img className='lower-rivet' src={lowerRivetGreen} alt="rivet"/>


                                        <div className="vessel__button">
                                            <div className="progress">
                                                <span>warning: cash ejection imminent</span>
                                            </div>
                                        </div>
                                    </div>


                                    <img src={creep} alt="creep" className="creep"/>
                                </div>

                                <div className="vessel right">
                                    <div className="inner">
                                        <Bubbles animationName='bubblePlan' bubbles={bubblesCenterPanel}/>
                                        <img className='vessel__divisions' src={divisionsVessel} alt="divisionsVessel"/>
                                    </div>

                                    <img className='right-river' src={rightRivetYellow} alt="rivet"/>
                                    <img className='lower-river' src={lowerRivetYellow} alt="rivet"/>

                                    <img className='vessel__coin coin' src={ethCoin} alt="ethCoin"/>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="rivet lower"/>
                </div>
            </div>
        </section>
    )
}

export default Plan
