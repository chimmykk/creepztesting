import twitter from "../../../assets/creators/twitter.svg"

const CardOfCreator = ({card: { img, name, creator, status, twitterLink }}) => {
    return (
        <div className="creators__team-card">

            <div className="card__image">
                <img src={img} alt="creep"/>
                {status ? <div className="card__image-status">status: {status}</div> : ``}
            </div>

            <div className="card__info">
                <div className="card__info-name">{name}</div>
                <div className="card__info-creator">{creator}</div>
            </div>

            <div className="card__twitter">
                <a href={twitterLink} style={!twitterLink ? {visibility: 'hidden'} : {}} target="_blank" rel="noreferrer"><img src={twitter} alt="twitter"/></a>
            </div>
        </div>
    )
}

export default CardOfCreator
