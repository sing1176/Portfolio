import { Fragment } from 'react';
import { Disclosure} from '@headlessui/react';
import {MenuIcon, XIcon } from '@heroicons/react/outline';
import { NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

const navigation = [
	{ name: 'Sandeep Saini', href: '/', current: true },
	{ name: 'Resume', href: '/resume', current: false },
];

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

const NavigationBar = () => {
	let buttonStyle =
		'text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-xl';
	let activeButtonStyle =
		'bg-gray-900/70 text-white block px-3 py-2 rounded-md text-xl';

	return (
		<>
			<Disclosure as="nav" className="font-mono sticky top-0 z-50">
				{({ open }) => (
					<>
						<div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 ">
							<div className="relative flex items-center justify-between h-16">
								<div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
									{/* Mobile menu button*/}
									<Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
										<span className="sr-only">Open main menu</span>
										{open ? (
											<XIcon className="block h-6 w-6" aria-hidden="true" />
										) : (
											<MenuIcon className="block h-6 w-6" aria-hidden="true" />
										)}
									</Disclosure.Button>
								</div>

								{/* Navigation  */}
								<div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
									<div className="hidden sm:block sm:ml-6">
										<div className="flex space-x-4">
											{navigation.map((item) => (
												<NavLink
													key={item.name}
													to={item.href}
													className={({ isActive }) =>
														isActive ? activeButtonStyle : buttonStyle
													}
												>
													{item.name}
												</NavLink>
											))}
										</div>
									</div>
								</div>

								{/* Social Icons */}
								<div>
									<SocialIcon
										url="https://www.linkedin.com/in/sandeep-saini-7b235910b/"
										className=" mr-7"
										target="_blank"
										fgColor="#fff"
										bgColor="light-gray"
										style={{ height: 40, width: 40 }}
									/>
									<SocialIcon
										url="https://github.com/sing1176"
										className=""
										target="_blank"
										fgColor="#fff"
										bgColor="light-gray"
										style={{ height: 40, width: 40 }}
									/>
								</div>
							</div>
						</div>

						{/* Mobile Navigation */}

						<Disclosure.Panel className="sm:hidden">
							<div className="px-2 pt-2 pb-3 space-y-1">
								{navigation.map((item) => (
									<Disclosure.Button
										key={item.name}
										className={({ isActive }) =>
											isActive ? activeButtonStyle : buttonStyle
										}
									>
										<NavLink key={item.name} to={item.href}>
											{item.name}
										</NavLink>
									</Disclosure.Button>
								))}
							</div>
						</Disclosure.Panel>
					</>
				)}
			</Disclosure>
		</>
	);
};

export default NavigationBar;
