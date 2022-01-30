import CardOfGallery from "./CardOfGallery"
import { useEffect, useState } from "react"


const StatisticPanel = ({cards, pipe, min, max, startingPoint }) => {
  const [scrolled, setScrolled] = useState(0);
  const [scroll, setScroll] = useState(0);
  const scrollListener = () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight
  
    const scrolled = winScroll / height
    setScroll(scrolled);
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollListener)
  }, []);

  useEffect(() => {
    if (scroll > min && scroll < max) {
      setScrolled(startingPoint+scroll*100);
    }
  }, [scroll]);

    return (
      <div className="statistic__gallery" style={{transform: `translateX(${startingPoint == 0 ? `-` : ``}${scrolled}%)`}}>
      {
          cards.map((card, index) => (
              <CardOfGallery key={card.type + index} type='card' info={card}/>
          ))
      }
      <img className="gallery__pipe" src={pipe} alt="pipe"/>
  </div>
    )
};

export default StatisticPanel
