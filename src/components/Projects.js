import React, { useEffect, useState } from 'react';
import cryptoTracker from '../assets/cryptoTracker.png';


const Projects = () => {
	let projectsData = [
		{
			id: 1,
			img: cryptoTracker,
			title: 'Crypto Price Tracker',
			description:
				'Crypto price tracker to track all your crypto assets built using React Native and CoinGeko API',
			link: '#',
		},
		{
			id: 2,
			img: cryptoTracker,
			title: 'Smart Tenant App',
			description:
				'Social Media and Tenant Management app, Built using Expo,Firestore for iOS an for Android',
			link: 'https://www.algonquincollege.com/arie/2022/03/smart-tenant/',
		},
		{
			id: 3,
			img: cryptoTracker,
			title: 'Crypto Price Tracker',
			description:
				'Simple crypto price tracker to track all your crypto assets built using React Native and CoinGeko API',
			link: '#',
		},
	];

	return (
		<section className="container mx-auto text-white font-mono">
			<h1 className=" text-center">Here are some of Recent Projects</h1>

			<div class="grid justify-center w-full md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7 my-10">
				{projectsData.map((project) => {
					return (
						<div
							key={project.id}
							class="bg-white/5 backdrop-blur-sm h-min  rounded-xl mx-6  my- md:max-w-none overflow-hidden "
						>
							<img class=" mx-auto py-5 h-5/6" src={project.img} alt="" />
							<div class="">
								<h3 class="font-semibold text-xl leading-6 underline my-4 text-center">
									{project.title}
								</h3>
								<p class="p-2">{project.description}</p>
								<p className="text-right px-2 py-2">
									<a href={project.link}> Learn More</a>									
								</p>
							</div>
						</div>
					);

				})}
			</div>
		</section>
	);
};

export default Projects;
