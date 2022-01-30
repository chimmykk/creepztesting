import Lottie from "lottie-react";
import {useState} from "react"
import CardOfCreator from "./CardOfCreator"

import bgPlayer from '../../../assets/creators/cbc-large-screen-static.json'
import creep1 from '../../../assets/creators/creeps/creep-1.jpg'
import creep2 from '../../../assets/creators/creeps/creep-2.jpg'
import creep3 from '../../../assets/creators/creeps/creep-3.jpg'
import creep4 from '../../../assets/creators/creeps/creep-4.png'
import creep5 from '../../../assets/creators/creeps/creep-5.jpg'
import creep6 from '../../../assets/creators/creeps/creep-6.jpg'
import creep7 from '../../../assets/creators/creeps/creep-7.jpg'
import creep8 from '../../../assets/creators/creeps/creep-8.jpg'
import creep9 from '../../../assets/creators/creeps/creep-9.jpg'
import creep10 from '../../../assets/creators/creeps/creep-10.jpg'
import dato from '../../../assets/creators/creeps/dato.png'
import eth from '../../../assets/creators/creeps/eth.png'
import ong from '../../../assets/creators/creeps/ong.png'
import pipe1 from '../../../assets/creators/video/pipe-1.svg'
import pipe2 from '../../../assets/creators/video/pipe-2.svg'

import twitter from "../../../assets/creators/twitter.svg"


import bgPipe1 from '../../../assets/creators/pipes/pipe-1.svg'
import bgPipe2 from '../../../assets/creators/pipes/pipe-2.svg'
import bgPipe3 from '../../../assets/creators/pipes/pipe-3.svg'

const cards = [
    {
        img: creep1,
        name: 'dom3xyz',
        creator: 'CBC Creator',
        status: '',
        twitterLink: 'https://twitter.com/dom3xyz'
    },
    {
        img: creep2,
        name: 'SHARKBAIT',
        creator: 'CBC Creator',
        status: '',
        twitterLink: 'https://twitter.com/jo3car'
    },
    // {
    //     img: creep5,
    //     name: 'ohDotss',
    //     creator: 'Kaiju Kingz Founder',
    //     status: '',
    //     twitterLink: 'https://twitter.com/ohDotss'
    // },
    {
      img: creep3,
      name: 'Chairman Ape',
      creator: 'Memberships',
      status: '',
      twitterLink: 'https://twitter.com/Chairman_Ape'
    },
    {
        img: creep4,
        name: 'CRYPTOJACK',
        creator: 'Advisor',
        status: '',
        twitterLink: 'https://twitter.com/Crypt0jacked'
    },
    {
        img: ong,
        name: 'JOSH ONG',
        creator: 'Advisor',
        status: '',
        twitterLink: 'https://twitter.com/beijingdou'
    },
    {
        img: eth,
        name: 'VONDOOM.ETH',
        creator: 'Advisor',
        status: '',
        twitterLink: 'https://twitter.com/CryptoVonDoom'
    },
    // {
    //     img: dato,
    //     name: 'DATO',
    //     creator: 'Generative Engineer',
    //     status: '',
    //     twitterLink: 'https://twitter.com/OphirStudio'
    // },
        {
        img: creep5,
        name: 'Wizard',
        creator: 'Engineering',
        status: '',
        twitterLink: ''
    },
    {
        img: creep10,
        name: 'AUGMINTED LABS',
        creator: 'Blockchain Advisors',
        status: '',
        twitterLink: 'https://twitter.com/ohDotss'
    },
    {
        img: creep9,
        name: 'Vik',
        creator: 'Lead Engineer',
        status: '',
        twitterLink: 'https://twitter.com/viktor_fed'
    }
]

const Creators = () => {

    const [isActiveVideo, setIsActiveVideo] = useState(false)


    const onClickVideo = () => {
        setIsActiveVideo(isActiveVideo => !isActiveVideo)

    }

    return (
        <section className='creators'>
            <div className="container">
                <div className="creators__video">
                    <div className="creators__video-title">The invasion HQ</div>

                    <div className="wrapper">
                        <div
                            onClick={() => onClickVideo()}
                            className="creators__video-player"
                        >
                            {/* <img className='video__background' src={bgPlayer} alt="video-background"/> */}
                            <Lottie className='video__background' animationData={bgPlayer} />

                            <img className='video__player-pipe left' src={pipe1} alt="pipe-1"/>
                            <img className='video__player-pipe right' src={pipe2} alt="pipe-2"/>
                            <div className="card__info creator">
                                <div className="card__info-name">{`PSYCHROME`}</div>
                                <div className="card__info-creator">{`CBC artist`}</div>
                                <div className="card__twitter creator-twitter">
                                  <a href={`https://twitter.com/psychrome`} target="_blank" rel="noreferrer"><img src={twitter} alt="twitter"/></a>
                                </div>
                            </div>
                            
                            <div className="creators__video-lamps">
                                <div className={`lamp blue ${isActiveVideo ? 'active' : ''}`}/>
                                <div className={`lamp red ${!isActiveVideo ? 'active' : ''}`}/>
                            </div>
                        </div>

                        <img className='bg__pipe-1' src={bgPipe1} alt="pipe"/>
                    </div>
                </div>

                <div className="creators__team">
                    <img className='bg__pipe-2' src={bgPipe2} alt="pipe"/>

                    <div className="creators__team-title">The cold blooded creepz</div>

                    <div className="creators__team-cards">
                        {
                            cards.map((card, index) => (
                                <CardOfCreator key={card.name + index} card={card}/>
                            ))
                        }
                    </div>

                </div>

                {/* <div className="creators__video-title">& more</div> */}

                <img className='bg__pipe-3' src={bgPipe3} alt="pipe"/>

            </div>
        </section>
    )
}

export default Creators
