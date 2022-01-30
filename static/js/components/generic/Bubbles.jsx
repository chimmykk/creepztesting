
const Bubbles = ({bubbles, animationName}) => {

    const bubblesArray = []

    bubbles && bubbles.forEach(({size, value}) => {
        for (let i = 0; i < value; i++) {
            bubblesArray.push(size)
        }
    })

    const getRandomSpeed = (size) => {
        const range = {}

        switch (size) {
            case 'small':
                range.min = bubbles[0].range.min
                range.max = bubbles[0].range.max
                break
            case 'medium':
                range.min = bubbles[1].range.min
                range.max = bubbles[1].range.max
                break
            case 'big':
                range.min = bubbles[2].range.min
                range.max = bubbles[2].range.max
                break
            default:
                range.min = 1
                range.max = 5
        }

        const {max, min} = range
        return (Math.random() * (max - min) + min).toFixed(2)
    }

    return (
        <div className='bubbles'>
            {
                bubblesArray.map((size, index) => (
                    <div
                        style={{
                            animation: `${animationName} ${getRandomSpeed(size)}s linear infinite`
                        }}
                        key={size + index}
                        className={`bubble-${index} bubble ${size}`}
                    />
                ))
            }
        </div>
    )
}

export default Bubbles


