import { useState } from 'react'
import DisplayPlates from '../components/DisplayPlates'
import { Button } from '@mui/material'



const HomePage = () => {
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
            <div className="home-container">
                <div className='container-title'>
                    BAR
                </div>
                <div>
                    <input
                        type="number"
                        pattern="/d"
                        label="Enter Bar Weight"
                        variant="filled"
                        value={barWeight} onChange={(e) => handleBarWeight(e.target.value)}
                    />
                </div>
                <div className='bar-buttons-container'>
                    <Button style={{ backgroundColor: '#2a2c2b' }} variant="contained" onClick={() => handleBarWeight(0)}>0</Button>
                    <Button style={{ backgroundColor: '#2a2c2b' }} variant="contained" onClick={() => handleBarWeight(20)}>20</Button>
                    <Button style={{ backgroundColor: '#2a2c2b' }} variant="contained" onClick={() => handleBarWeight(35)}>35</Button>
                    <Button style={{ backgroundColor: '#2a2c2b' }} variant="contained" onClick={() => handleBarWeight(45)}>45</Button>
                </div>

            </div>
            <div className="home-container">
                <div className='container-title'>
                    WEIGHT
                </div>
                <div>
                    <input
                        type="number"
                        pattern="/d"
                        onChange={(e) => calculateWeight(e.target.value, barWeight)}
                    />
                </div>
            </div>
            <div className="home-container" id="test">
                <div className='container-title'>
                    PLATES (PER SIDE)
                </div>
                <div id="plate-container">
                    <DisplayPlates totalPlates={totalPlates} errorMessage={errorMessage} />
                </div>
            </div>
        </div>
    )
}

export default HomePage