import { useEffect, useState } from 'react'
import './Github.css'

const { REACT_APP_API_KEY } = process.env




const Git = () => {

    //set use state to array
    const [info, setInfo] = useState(0)

    //use set data to allow us to use the info variable to display information retrived from the api
    useEffect(() => {
        fetch("https://github-contributions-api.jogruber.de/v4/lilkahuna")
            .then((result) => result.json())
            .then((data) => {
                console.log(data)
                setInfo(data)
            })

    }, [])


    //? is a safty operator
    return (
        
        <>
            <div className='git-div'>
                <h1 className='main-head'>How Active Am I?</h1>

                <h2 className='sec-head'>Total Contributions</h2>
                <p className='text'>{info?.total}</p>

            </div>
            

            
        </>

    )
}

export default Git;