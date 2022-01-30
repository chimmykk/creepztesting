import Typewriter from 'typewriter-effect'

const Armoury = ({sholdArmoryType}) => {

    const panels = [
        {
          title: 'play-to-earn',
          subtitle: ``,
          paragraphs: [`Stake your allegiance to the OVERLORD & yield $loomi`],
          paragraphToType: `• Multi character game mechanics - you decide your strategy, risk & reward`
        },
        {
          title: '$loomi',
          subtitle: ``,
          paragraphs: [`Use $loomi to purchase future drops, characters and upgrades`],
          paragraphToType: `• $loomi is the utility token for the Creepz ecosystem. Hold it tight as you will need it!`
        },
        {
          title: 'membership',
          subtitle: ``,
          paragraphs: [`Million dollar membership club on a mission to build Creepz into a globally recognised brand`],
          paragraphToType: `• Member led activations, rewarding $loomi holders based on ranking`
        }
    ];
    
    return (
        <section className='armoury'>
            <div className="container">
                <div className="discord__titles">
                    <div className="discord__title">
                    Why creepztopia? 
                    </div>
                    {/* <div className="city__info-text">At CBC we are world builders. We are building a Creepz ecosystem and economy that lives both in the real world and in the metaverse. Tons of opportunities for fun games, creativity and earning, with further expansion into other worlds and narratives</div> */}
                </div>

                <div className="armoury__content">
                  <div className="armoury__content-inner">
                    <div className="inner-panel">
                      <div className="light light_right"></div>
                      <div className="light light_left"></div>
                      <div className="ufo"></div>
                    </div>
                    <div className="inner-panel">
                      <div className="light light_right"></div>
                      <div className="light light_left"></div>
                      <div className="ufo"></div>
                    </div>
                    <div className="inner-panel">
                      <div className="light light_right"></div>
                      <div className="light light_left"></div>
                      <div className="ufo"></div>
                    </div>
                  </div>

                  <div className="armoury__panels">
                        {
                            panels.map((text, index) => (
                                <div key={text.text + index} className="armoury_panel">
                                    <div className="inner">
                                    <div className="title text">{text.title}</div>
                                    <div className="subtitle text">{text.subtitle}</div>
                                    {text.paragraphs.map((point) => (
                                      <div>
                                        <span className="text">&#8226; {point}</span><br />
                                      </div>
                                    ))}
                                    <br/>
                                    <span className="text">
                                      
                                      {sholdArmoryType ? (
                                          <Typewriter
                                            options={{
                                                loop: false,
                                                delay: 40,
                                                deleteSpeed: 20,
                                                cursorClassName: 'cursor'
                                            }}
                                            onInit={(typewriter) => {
                                                typewriter
                                                    .typeString(text.paragraphToType)
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
                </div>

                    
                </div>
        </section>
    )
}

export default Armoury;
