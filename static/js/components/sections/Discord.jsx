import Typewriter from 'typewriter-effect'
import Bubbles from "../generic/Bubbles"

import discord1 from '../../assets/discord/discord-1.svg'
import discord2 from '../../assets/discord/discord-2.svg'
import Button from '../generic/Button';


const Discord = ({ shouldType }) => {

    const bubbles = [
        {
            size: 'big',
            value: 2,
            range: {
                min: 8,
                max: 12
            }
        },
        {
            size: 'medium',
            value: 5,
            range: {
                min: 10,
                max: 13
            }
        },
        {
            size: 'small',
            value: 8,
            range: {
                min: 13,
                max: 14
            }
        }
    ]

    const panels = [
        'Global IRL parties. Kanye’s a lizard. They all f*ckin’ are ',
        'Live experimental experiences. We got interstellar tech yo ',
        'Member-only fashion brand. Cover your scalez in sexy drip ',
        'Welcome to the future: Creepz gunna flip BAYC..they’re sooo 2021 '
    ]

    return (
        <section className='discord'>
            <div className="container">
                <div className="discord__titles">
                    <div className="discord__title">
                    Creepz membership
                    </div>
                    <div className="discord__subtitle">Membership perks that make you hiss</div>
                </div>
                <div className="discord__content">
                    <div className="discord__pipe cyan">
                        <div className="circle upper"/>
                        <div className="pipe">
                            <div className="inner">
                                <Bubbles bubbles={bubbles} animationName='bubbleDiscord'/>
                                <img className='discord__logo logo-1' src={discord1} alt="discord"/>
                                <img className='discord__logo logo-2' src={discord2} alt="discord"/>
                            </div>
                        </div>
                        <div className="circle lower"/>
                    </div>

                    <div className="discord__panels">
                        {
                            panels.map((text, index) => (
                                <div key={text + index} className="discord__panel">
                                    <div className="inner">

                                    <span>

                                        {shouldType ? (
                                          <Typewriter
                                            options={{
                                                loop: false,
                                                autoStart: true,
                                                delay: 40,
                                                cursorClassName: 'cursor'
                                            }}
                                            onInit={(typewriter) => {
                                                typewriter
                                                    .typeString(text)
                                                    .start()
                                            }}
                                          />
                                        ) : ``}

                                    </span>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                    <div className="discord__pipe yellow">
                        <div className="circle upper"/>
                        <div className="pipe">
                            <div className="inner">
                                <Bubbles bubbles={bubbles} animationName='bubbleDiscord'/>
                                <img className='discord__logo logo-1' src={discord1} alt="discord"/>
                                <img className='discord__logo logo-2' src={discord2} alt="discord"/>
                            </div>
                        </div>
                        <div className="circle lower"/>
                    </div>

                </div>
                
                <a href="http://www.discord.gg/ColdBloodedCreepz" target="_blank" rel="noreferrer" >
                  <Button extraClass="discord__button" text="Join the Creephouse"/>
                </a>

            </div>
        </section>
    )
}

export default Discord;
