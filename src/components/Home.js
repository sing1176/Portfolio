import React from 'react';
import '../index.css';
import { NavLink } from 'react-router-dom';

const Home = () => {
	return (
		<>
			<main className="w-full height-screen  text-white font-mono ">
				<div className="headerText">
					<div class=" my-40 text-center text-2xl md:text-3xl lg:text-4xl ">
						<h1 className="">
							Welcome to my Portfolio
						</h1>
						<h2 class="my-6 px-4">
							I am a Full Stack developer and UI/UX Designer.
						</h2>
					</div>
				</div>
				<div className="skill text-center">
					<div>
						<h3 className="bg-gray-700/40 p-2 my-2 mx-12 rounded-md text-2xl">
							Current Skill Set
						</h3>
					</div>

					<div class=" mx-12 grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-7 py-5">
						<div className="languages bg-gray-700/20 rounded-md p-2 ">
							<h1 className="text-xl underline my-3 bg-gray-700/10 rounded-md ">
								Languages
							</h1>
							<ul className="px-2 ">
								<li>Javascript</li>
								<li>Java</li>
								<li>C++</li>
								<li>C#</li>
							</ul>
						</div>
						<div className="languages bg-gray-700/20 rounded-md p-2 ">
							<h1 className="text-xl underline my-3 bg-gray-700/10 rounded-md ">
								Web
							</h1>
							<ul className="px-2">
								<li>SPAs</li>
								<li>PWAs</li>
								<li>Html</li>
								<li>Css</li>
								<li>Sass</li>
								<li>WordPress</li>
							</ul>
						</div>
						<div className="languages bg-gray-700/20 rounded-md p-2 ">
							<h1 className="text-xl underline my-3 bg-gray-700/10 rounded-md ">
								Frameworks
							</h1>
							<ul className="px-2">
								<li>React</li>
								<li>ReactNative</li>
								<li>Bootstrap</li>
								<li>Tailwind</li>
								<li>MUI</li>
								<li>Next</li>
							</ul>
						</div>
						<div className="languages bg-gray-700/20 rounded-md p-2 ">
							<h1 className="text-xl underline my-3 bg-gray-700/10 rounded-md ">
								Mobile
							</h1>
							<ul className="px-2">
								<li>Kotlin</li>
								<li>Swift</li>
								<li>Cordova</li>
							</ul>
						</div>
						<div className="languages bg-gray-700/20 rounded-md p-2 ">
							<h1 className="text-xl underline my-3 bg-gray-700/10 rounded-md ">
								BackEnd
							</h1>
							<ul className="px-2">
								<li>Node.js</li>
								<li>Firestore</li>
								<li>Express</li>
								<li>Docker</li>
								<li>AWS</li>
							</ul>
						</div>
						<div className="languages bg-gray-700/20 rounded-md p-2 ">
							<h1 className="text-xl underline my-3 bg-gray-700/10 rounded-md ">
								Others
							</h1>
							<ul className="px-2">
								<li>Content Creator</li>
								<li>Social Media Management</li>
								<li>Photographer/Videographer</li>
							</ul>
						</div>
					</div>
				</div>
			</main>
		</>
	);
};

export default Home;

