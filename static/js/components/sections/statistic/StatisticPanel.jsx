import React from "react"
import Bubbles from "../../generic/Bubbles"
const bubbles = [
    {
        size: 'big',
        value: 2,
        range: {
            min: 8,
            max: 10
        }
    },
    {
        size: 'medium',
        value: 3,
        range: {
            min: 10,
            max: 11
        }
    },
    {
        size: 'small',
        value: 6,
        range: {
            min: 11,
            max: 12
        }
    }
]

const StatisticPanel = React.memo(({panel: {title, subtitle}}) => {
    return (
        <div className="statistic__panel">
            <div className="wrapper">
                <Bubbles animationName='bubbleStatistic' bubbles={bubbles}/>
                <div className="statistic__panel-title">
                    {title}
                </div>

                <div className="statistic__panel-subtitle">
                    {subtitle}
                </div>
            </div>
        </div>
    )
});

export default StatisticPanel
