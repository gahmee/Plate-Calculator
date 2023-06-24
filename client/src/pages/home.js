import { useState } from 'react'
import DisplayPlates from '../components/DisplayPlates'


const Home = () => {
    const [barWeight, SetBarWeight] = useState(45)
    const [totalPlates, setTotalPlates] = useState({})

    const calculateWeight = (weight, barWeight) => {

        if (weight > 1000) {
            setTotalPlates('Too Heavy')
            return
        }

        weight = (weight - barWeight) / 2

        const plates = [45, 35, 25, 10, 5, 2.5]

        let platesToAdd = {}

        let i = 0;
        while (weight > 0) {
            if (plates[i] <= weight) {
                platesToAdd[plates[i]] = platesToAdd[plates[i]] + 1 || 1
                weight -= plates[i];
            } else {
                i++;
            }
        }

        setTotalPlates(platesToAdd)
    }

    const handleBarWeight = (weight) => {
        SetBarWeight(weight)
    }

    return (
        <div>
            <div>
                <h2>BAR WEIGHT</h2>
                {barWeight}
                <div>
                    <button onClick={() => handleBarWeight(0)}>0</button>
                    <button onClick={() => handleBarWeight(20)}>20</button>
                    <button onClick={() => handleBarWeight(35)}>35</button>
                    <button onClick={() => handleBarWeight(45)}>45</button>
                </div>
            </div>
            <div>
                <h2>WEIGHT</h2>
                <input type="number" onChange={(e) => calculateWeight(e.target.value, barWeight)}></input>
            </div>
            <div>
                <h2>PLATES (PER SIDE)</h2>
                <DisplayPlates totalPlates={totalPlates} />
            </div>
        </div>
    )
}

export default Home