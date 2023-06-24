const DisplayPlates = ({ totalPlates }) => {

    const sortedTotalPlates = Object.keys(totalPlates).sort((a, b) => a - b).reverse()

    return (
        <div>
            {sortedTotalPlates.map((item, index) =>
                <div id="plate-row">
                    <div id="plate">
                        {item}
                    </div>
                    <div id="amount-of-plates">
                        x
                        {totalPlates[item]}
                    </div>
                </div>
            )}
        </div>
    )
}

export default DisplayPlates