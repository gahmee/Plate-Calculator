const DisplayPlates = ({ totalPlates }) => {
    return (
        <div>
            {Object.entries(totalPlates).map(([key, value]) =>
                <div id="plate-row">
                    <div id="plate">
                        {key}
                    </div>
                    <div id="amount-of-plates">
                        x
                        {value}
                    </div>
                </div>
            )}
        </div>
    )
}

export default DisplayPlates