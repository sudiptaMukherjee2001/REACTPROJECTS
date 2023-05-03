import React from 'react'
import "../Home/Home.scss";
import { AiFillHome } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { BiMessageRounded } from "react-icons/bi";
import { Link } from "react-router-dom"
function Home() {
	return (
		<>
			<div className="HomeCon">
				<h2>SUDIPTA</h2>
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
				<div className="leftPart">

					<div className="content">
						<h2>
							<span>I'M SUD<p>IPTA</p> </span>
							<span>REACT.JS <p>DEVELOPER</p> </span>
						</h2>
						<p className='para'>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde pariatur vero illo excepturi molestiae esse perspiciatis. Sint velit quia, autem aliquam culpa dicta possimus eligendi dolore, dolorum quod ab molestiae.
						</p>
						<div className="Homebtn">
							<button>Download cxv</button>
						</div>
					</div>


				</div>


			</div>

		</>

	)
}

export default Home