import { useState } from 'react'
import DisplayPlates from '../components/DisplayPlates'
import { TextField, Button } from '@mui/material'



const Home = () => {
    const [barWeight, SetBarWeight] = useState(45)
    const [totalPlates, setTotalPlates] = useState({})
    const [errorMessage, setErrorMessage] = useState(false)

    const calculateWeight = (weight, barWeight) => {

        setErrorMessage(false)

        if (weight > 1000) {
            setErrorMessage('Too heavy')
            return
        }

        if (weight % 5 !== 0 || weight <= barWeight) {
            setErrorMessage('Invalid weight')
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
        <div id="home">
            <div>
                <h2>BAR</h2>
                <div id="bar-weight-container">
                    <TextField type="number" label="Enter Bar Weight" variant="filled" value={barWeight} onChange={(e) => handleBarWeight(e.target.value)} />
                </div>
                <div>
                    <Button variant="outlined" onClick={() => handleBarWeight(0)}>0 lbs</Button>
                    <Button variant="outlined" onClick={() => handleBarWeight(20)}>20 lbs</Button>
                    <Button variant="outlined" onClick={() => handleBarWeight(35)}>35 lbs</Button>
                    <Button variant="outlined" onClick={() => handleBarWeight(45)}>45 lbs</Button>
                </div>

            </div>
            <div id="weight-container">
                <h2>WEIGHT</h2>
                <TextField type="number" onChange={(e) => calculateWeight(e.target.value, barWeight)} />
            </div>
            <div id="plate-display-container">
                <h2>PLATES (PER SIDE)</h2>
                <DisplayPlates totalPlates={totalPlates} errorMessage={errorMessage} />
            </div>
        </div>
    )
}

export default Home