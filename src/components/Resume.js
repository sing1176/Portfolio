
import resume from '../assets/resume.pdf'
import resumeIMG from '../assets/resumeIMG.jpg'
import React, { useState , Img } from 'react';



const Resume = () => {

  return (
		<main className="">
			<div className=" pt-5">
				<img className="mx-auto" src={resumeIMG} height="700" width="700"></img>
			</div>
		</main>
	);
}

export default Resume;