import React, { useEffect } from 'react'
import "../LEFT_SIDE_OF_FEED/Leftside.scss"
import { categories } from "../../../utils/Utils"
import { useNavigate } from 'react-router-dom'

function Leftside({ selectCategory, setSelectCategory }) {

    const Navigate = useNavigate();

    const chooseCategory = (name) => {
        // console.log("it is choosecategory", name)
        setSelectCategory(name);

    }
    useEffect(() => {

        Navigate("/")
    }, [Navigate])

    // Navigate(`/videoDetails/${selectCategory}`)
    console.log("select category", selectCategory)

    return (
        <>

            <div className="leftSide">

                {

                    categories.map((item, index) => {
                        return (

                            <div className='left_Side_icons_name' key={index} onClick={() => { chooseCategory(item.name) }} >
                                {
                                    (item.type === "home" || item.type === "category") &&
                                    <div className='Upper_Part_of_icon_name'>
                                        {/* {console.log("item is", item.type)} */}

                                        <span> {item.icon}</span>
                                        <span>{item.type === 'home' ? "Home" : item.name} </span>

                                    </div>
                                }

                                <div className="divider">
                                    {item.divider &&
                                        <hr />
                                    }
                                </div>
                                {
                                    (item.type === `menu`) &&
                                    <div className="lower_Part_of_icons">
                                        <span> {item.icon}</span>
                                        <span>{item.name} </span>
                                    </div>
                                }
                                <div className="divider">
                                    {item.Divider &&
                                        <hr />
                                    }
                                </div>




                            </div>


                        )
                    })

                }
                <span>
                    Youtube Clone by Sudipta
                </span>



            </div>
        </>
    )
}

export default Leftside