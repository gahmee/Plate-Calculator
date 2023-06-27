const DisplayPlates = ({ totalPlates, errorMessage }) => {

    const sortedTotalPlates = Object.keys(totalPlates).sort((a, b) => a - b).reverse()

    const plateColors = {
        '45': 'blue',
        '35': 'yellow',
        '25': 'green',
        '10': 'orange',
        '5': 'red',
        '2.5': 'grey'
    }

    return (
        <div>
            {!errorMessage ? sortedTotalPlates.map((item, index) =>
                <div id="plate-row">
                    <div id="plate" style={{ background: plateColors[item] }}>
                        {item}
                        <div id="measurement">
                            lbs
                        </div>
                    </div>
                    <div id="amount-of-plates">
                        x
                        {totalPlates[item]}
                    </div>
                </div>
            ) : errorMessage}
        </div>
    )
}

export default DisplayPlates