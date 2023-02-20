import React from 'react'

import "../style/Home.css"
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import DownloadIcon from '@mui/icons-material/Download';
import HomeIcon from '@mui/icons-material/Home';
function Home() {
    return (
        <>


            <div className="section2">
                <h2>
                    Hi,I'm <span>
                        Sudipta Mukherjee.
                    </span>
                </h2>
                <p>
                    I am a <span>
                        React js developer
                    </span> . I love to create a beautiful and functional website.

                </p>
                <h5>Building dynamic and interactive user interfaces with React JS -  where creativity meets functionality!</h5>

                <button>download cv<DownloadIcon style={{
                    fontSize: "25px",
                    color: "#562106"
                }} /></button>
            </div>

            {/* <div className='img'>
                <DeveloperModeIcon className='DeveloperModeIcon'
                    style={{
                        fontSize: "90px",
                        color: "orange",

                    }} />

            </div> */}

        </>
    )
}

export default Home
