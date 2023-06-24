const DisplayPlates = ({ totalPlates, errorMessage }) => {

    const sortedTotalPlates = Object.keys(totalPlates).sort((a, b) => a - b).reverse()

    return (
        <div>
            {!errorMessage ? sortedTotalPlates.map((item, index) =>
                <div id="plate-row">
                    <div id="plate">
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