import React, { useEffect, useState } from 'react'
import Navbar from './Navbar';
import "../style/Skill.css"
function Skill() {
    let [counter1, setCounter1] = useState();
    let [counter2, setCounter2] = useState();
    let [counter3, setCounter3] = useState();
    let [counter4, setCounter4] = useState();
    useEffect(() => {
        setTimeout(() => {
            setCounter1(60)
        }, 1900);
    }, [])
    useEffect(() => {
        setTimeout(() => {
            setCounter2(60)
        }, 1900);
    }, [])
    useEffect(() => {
        setTimeout(() => {
            setCounter3(60)
        }, 1900);
    }, [])
    useEffect(() => {
        setTimeout(() => {
            setCounter4(60)
        }, 1900);
    }, [])
    return (
        <article>

            <h1>My Skills</h1>
            <div className="animatedProgressBar">
                <div className="Skill">
                    <h2 className='html'>Html</h2>
                    <div className="progressBar">
                        <div className="outer">
                            <div className="inner">
                                <span>{counter1}</span>
                            </div>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                            <defs>
                                <linearGradient id="GradientColor">
                                    <stop offset="0%" stop-color=" #FAD7A1" />
                                    <stop offset="100%" stop-color="#E96D71" />
                                </linearGradient>
                            </defs>
                            <circle cx="80" cy="61.5" r="55.9" stroke-linecap="round" />
                        </svg>
                    </div>

                </div>
                <div className="Skill1">
                    <h2 className='css'>css</h2>
                    <div className="progressBar1">
                        <div className="outer1">
                            <div className="inner1">
                                <span>{counter2}</span>
                            </div>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                            <defs>
                                <linearGradient id="GradientColor">
                                    <stop offset="0%" stop-color=" #FAD7A1" />
                                    <stop offset="100%" stop-color="#E96D71" />
                                </linearGradient>
                            </defs>
                            <circle cx="80" cy="61.5" r="55.9" stroke-linecap="round" />
                        </svg>
                    </div>

                </div>
                <div className="Skill2">
                    <h2 className='js'>javascript</h2>
                    <div className="progressBar2">
                        <div className="outer2">
                            <div className="inner2">
                                <span>{counter3}</span>
                            </div>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                            <defs>
                                <linearGradient id="GradientColor">
                                    <stop offset="0%" stop-color=" #FAD7A1" />
                                    <stop offset="100%" stop-color="#E96D71" />
                                </linearGradient>
                            </defs>
                            <circle cx="80" cy="61.5" r="55.9" stroke-linecap="round" />
                        </svg>
                    </div>

                </div>
                <div className="Skill3">
                    <h2 className='react'>React</h2>
                    <div className="progressBar3">
                        <div className="outer3">
                            <div className="inner3">
                                <span>{counter4}</span>
                            </div>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                            <defs>
                                <linearGradient id="GradientColor">
                                    <stop offset="0%" stop-color=" #FAD7A1" />
                                    <stop offset="100%" stop-color="#E96D71" />
                                </linearGradient>
                            </defs>
                            <circle cx="80" cy="61.5" r="55.9" stroke-linecap="round" />
                        </svg>
                    </div>

                </div>
            </div>
            <div className="tools">
                <h2>Tools</h2>
                <div className="tool">
                    <div className="vscode">Vs code</div>
                    <div className="codeBlock">Code Block</div>
                    <div className="intellijIDEA">intellijIDEA</div>
                    <div className="cssPeeper">CSS Peeper</div>
                    <div className="reactDevTools">React Dev Tools</div>
                </div>

            </div>

        </article>

    )
}

export default Skill