import Lottie from "lottie-react";
const CardOfGallery = ({info: {image, type, colors, borderGif}}) => {

    const {border, upperEffect, upperInnerEffect, lowerEffect, lowerInnerEffect } = colors

    return (
        type === 'photo'
            ?
            <div
                className='statistic__gallery-card'
                style={{backgroundColor: border}}
            >
                <img className='card__photo' src={image} alt=""/>

                <div className="gallery-border-effect">
                    <div
                        className="upper-line"
                        style={{backgroundColor: upperEffect}}
                    >
                        <div
                            className="upper-inner-line"
                            style={{backgroundColor: upperInnerEffect}}
                        />
                    </div>
                    <div
                        className="lower-line"
                        style={{backgroundColor: lowerEffect}}
                    >
                        <div
                            className="lower-inner-line"
                            style={{backgroundColor: lowerInnerEffect}}
                        />
                    </div>
                </div>

            </div>
            : <div className='statistic__gallery-cards gif'>

                {
                    image.map((item, index) => (
                        <div key={item + index}
                             className='statistic__gallery-card gif'
                             style={{backgroundColor: borderGif[index]}}
                        >
                             <Lottie className='card__photo' animationData={item} />
                        </div>
                    ))
                }
            </div>
    )
}

export default CardOfGallery
