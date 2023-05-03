import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { storeToskillArray } from '../../feature/SkillSlice';
import { BiCoinStack } from "react-icons/bi";
import { AiFillHome } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { BiMessageRounded } from "react-icons/bi";
import { Link } from "react-router-dom"
import "../Projects/Projects.scss";
function Projects() {
    let [allSkill, setAllSkill] = useState(true);
    let [apiBased, setapiBasedSkill] = useState(false);
    let [uiCloneSkill, setuiCloneSkill] = useState(false);
    let [reduxskill, setreduxSkill] = useState(false);
    let [otherSkill, setotherSkill] = useState(false);

    //skillName e category and technogy dutoi ache
    const { skillName } = useSelector((state) => state.storeSkill);
    // console.log("My all skill", skillName);

    //GET ALL TECHSTACK
    let techStack = skillName.map((value) => value.techStack);
    // console.log("all techStack", techStack)

    //filter all category
    let category = skillName.filter((value) => value.category);
    // console.log("My all category", category);

    // filter all api projects
    let apiProject = category.filter((value) => value.category === "api based")

    //filter all ui clone projects
    let uiClone = category.filter((value) => value.category === "ui based")
    // console.log("only ui clone based project", uiClone);

    //filter all others project
    let otherProject = category.filter((value) => value.category === "others")


    //filter all technology
    let technology = skillName.filter((value) => value.technology);
    // console.log("My all technology", technology);

    // filter   all redux project
    let redux = technology.filter((value) => value.technology === "redux-toolkit")

    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(storeToskillArray(skillName))
    }, [dispatch, skillName])

    let displayAllProject = () => {
        setAllSkill(true)
        setapiBasedSkill(false)
        setreduxSkill(false);
        setotherSkill(false);
        setuiCloneSkill(false)
    }
    let displayApiProject = () => {
        setapiBasedSkill(true)
        setAllSkill(false)
        setreduxSkill(false);
        setotherSkill(false);
        setuiCloneSkill(false)
    }
    let displayUiProject = () => {
        setuiCloneSkill(true)
        setAllSkill(false)
        setapiBasedSkill(false);
        setreduxSkill(false);
        setotherSkill(false)
    }

    let displayReduxProject = () => {
        setreduxSkill(true);
        setuiCloneSkill(false)
        setAllSkill(false)
        setapiBasedSkill(false);
        setotherSkill(false)
    }


    let displayOtherProject = () => {
        setotherSkill(true)
        setreduxSkill(false);
        setuiCloneSkill(false)
        setAllSkill(false)
        setapiBasedSkill(false);
    }
    return (
        <>
            <div className="projectCon">
                <div className="navigateIcons">
                    <div className="icon">
                        <Link to="/">
                            <AiFillHome />
                            <span className="text">Home</span>
                        </Link>
                    </div>
                    <div className="icon">
                        <Link to="/aboutme">
                            <FaUserAlt />
                            <span className="text">About</span>
                        </Link>
                    </div>
                    <div className="icon">
                        <Link to="/Project">
                            <BsFillBriefcaseFill />
                            <span className="text">Project</span>
                        </Link>
                    </div>
                    <div className="icon">
                        <Link to="/Contact">
                            <BiMessageRounded />
                            <span className="text">Enquiry</span>
                        </Link>
                    </div>
                </div>
                <h1>WORKING</h1>
                <div className="topBtn">
                    <button onClick={displayAllProject}>ALL</button>
                    <button onClick={displayApiProject}>API BASED</button>
                    <button onClick={displayUiProject}>UI CLONE</button>
                    <button onClick={displayReduxProject}>REDUX</button>
                    <button onClick={displayOtherProject}>OTHERS</button>
                </div>
                {allSkill && <div className="allSkill">
                    {
                        skillName.map((skill) => {
                            return (
                                <div className="skillCard">
                                    <div className="hoverDiv">
                                        <div className="techStack">
                                            <span className='firstSpan'>
                                                <p>
                                                    <BiCoinStack />
                                                </p>
                                                <p>
                                                    Techstack
                                                </p>
                                            </span>
                                            <p className='secondSpan'>
                                                <ul>
                                                    <li>{skill.techStack}</li>
                                                </ul>
                                            </p>
                                        </div>
                                        <div className="url">http</div>
                                    </div>
                                    <div className="projectName">{skill.name}</div>

                                </div>
                            )
                        })
                    }


                </div>}
                {apiBased && <div className="allSkill">
                    {
                        apiProject.map((skill) => {
                            return (
                                <div className="skillCard">
                                    <div className="hoverDiv">
                                        <div className="techStack">
                                            <span className='firstSpan'>
                                                <p>
                                                    <BiCoinStack />
                                                </p>
                                                <p>
                                                    Techstack
                                                </p>
                                            </span>
                                            <p className='secondSpan'>
                                                <ul>
                                                    <li>{skill.techStack}</li>
                                                </ul>
                                            </p>
                                        </div>
                                        <div className="url">http</div>
                                    </div>
                                    <div className="projectName">{skill.name}</div>

                                </div>
                            )
                        })
                    }


                </div>}
                {uiCloneSkill && <div className="allSkill">
                    {
                        uiClone.map((skill) => {
                            return (
                                <div className="skillCard">
                                    <div className="hoverDiv">
                                        <div className="techStack">
                                            <span className='firstSpan'>
                                                <p>
                                                    <BiCoinStack />
                                                </p>
                                                <p>
                                                    Techstack
                                                </p>
                                            </span>
                                            <p className='secondSpan'>
                                                <ul>
                                                    <li>{skill.techStack}</li>
                                                </ul>
                                            </p>
                                        </div>
                                        <div className="url">http</div>
                                    </div>
                                    <div className="projectName">{skill.name}</div>

                                </div>
                            )
                        })
                    }


                </div>}
                {reduxskill && <div className="allSkill">
                    {
                        redux.map((skill) => {
                            return (
                                <div className="skillCard">
                                    <div className="hoverDiv">
                                        <div className="techStack">
                                            <span className='firstSpan'>
                                                <p>
                                                    <BiCoinStack />
                                                </p>
                                                <p>
                                                    Techstack
                                                </p>
                                            </span>
                                            <p className='secondSpan'>
                                                <ul>
                                                    <li>{skill.techStack}</li>
                                                </ul>
                                            </p>
                                        </div>
                                        <div className="url">http</div>
                                    </div>
                                    <div className="projectName">{skill.name}</div>

                                </div>
                            )
                        })
                    }


                </div>}
                {otherSkill && <div className="allSkill">
                    {
                        otherProject.map((skill) => {
                            return (
                                <div className="skillCard">
                                    <div className="hoverDiv">
                                        <div className="techStack">
                                            <span className='firstSpan'>
                                                <p>
                                                    <BiCoinStack />
                                                </p>
                                                <p>
                                                    Techstack
                                                </p>
                                            </span>
                                            <p className='secondSpan'>
                                                <ul>
                                                    <li>{skill.techStack}</li>
                                                </ul>
                                            </p>
                                        </div>
                                        <div className="url">http</div>
                                    </div>
                                    <div className="projectName">{skill.name}</div>

                                </div>
                            )
                        })
                    }


                </div>}
            </div>
        </>
    )
}

export default Projects