import axios from 'axios';
import React, { useEffect, useState } from 'react';

/**
 * A React component that represents the Home page of the app.
 * @param {*} param0 an object holding any props passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */
const AboutUs = props => {
    const [data, setData] = useState({ content: [], image: "" })

    useEffect(() => {
        axios
            .get("http://localhost:5002/aboutUs")
            .then(res => {
                setData(res.data)
            })
            .catch(err => console.error(err))
    }, [])

    return (
        <div style={{ display: 'flex', marginTop: '1.5em' }}>
            <div style={{ width: '80%' }}>
                <h1 style={{ textAlign: 'left', marginLeft: '0.5em', marginBottom: '1em' }}>About Me</h1>

                {data.content.map((text, index) => (
                    <p key={index} style={{ margin: '1em', textAlign: 'left', lineHeight: '1.5em' }}>{text}</p>
                ))}
            </div>

            <div>
                {data.image && <img src={data.image} alt="Me at the Highline in February 2024" width="1081" height="1440" style={{ width: '70%', height: 'auto' }} />}
            </div>
        </div>

    )
}

// make this component available to be imported into any other file
export default AboutUs
