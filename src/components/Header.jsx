import React, { useState } from 'react';
import logo from '../assets/logo.svg';
import menu from '../assets/menu.svg';
import cart from '../assets/cart.svg';
import close from '../assets/closeMenu.svg';
import { Link } from 'react-router-dom';
const Header = () => {
	const [openMenu, setOpenMenu] = useState(false);
	return (
		<header className="max-w-[1440px] bg-primary font-secondary">
			<div className=" hidden lg:flex w-[90%] mx-auto h-[80px]  justify-center items-center gap-[4rem]">
				<nav>
					<ul className="flex justify-center gap-4 items-center">
						<Link
							to={'/'}
							className="text-secondary uppercase text-sm tracking-[2px] font-medium cursor-pointer hover:text-accent duration-300"
						>
							Home
						</Link>
						<Link
							to={'/portfolio'}
							className="text-secondary uppercase text-sm tracking-[2px] font-medium cursor-pointer hover:text-accent duration-300"
						>
							Portfolio
						</Link>
						<Link
							to={'/journal'}
							className="text-secondary uppercase text-sm tracking-[2px] font-medium cursor-pointer hover:text-accent duration-300"
						>
							Journal
						</Link>
					</ul>
				</nav>
				<div className="w-[125px]">
					<img src={logo} alt="company logo" loading="lazy" width={'125px'} />
				</div>
				<nav>
					<ul className="flex justify-center gap-4 items-center">
						<li className="text-secondary uppercase text-sm tracking-[2px] font-medium cursor-pointer hover:text-accent duration-300">
							Service
						</li>
						<li className="text-secondary uppercase text-sm tracking-[2px] font-medium cursor-pointer hover:text-accent duration-300">
							Shop
						</li>
						<li className="text-secondary uppercase text-sm tracking-[2px] font-medium cursor-pointer hover:text-accent duration-300">
							Contact
						</li>
						<li className="text-secondary uppercase text-sm tracking-[2px] font-medium cursor-pointer hover:text-accent duration-300">
							Cart
						</li>
					</ul>
				</nav>
			</div>

			{/* mobile menu  */}

			<div className="flex justify-around min-h-[60px] items-center relative lg:hidden">
				<div>
					<img src={cart} alt="cart-icon" />
				</div>
				<div>
					<img src={logo} alt="lovio" width={'100px'} />
				</div>
				<div>
					{openMenu ? (
						<img
							src={close}
							alt="close menu icon"
							onClick={() => setOpenMenu((prev) => !prev)}
						/>
					) : (
						<img
							src={menu}
							alt="open menu icon"
							onClick={() => setOpenMenu((prev) => !prev)}
						/>
					)}
				</div>

				<nav
					className={
						openMenu
							? 'absolute w-[100%] bg-primary top-[60px] left-0 duration-300 '
							: 'absolute w-[100%] bg-primary top-[-100vh] left-0'
					}
				>
					<ul className="text-center">
						<li className="text-secondary uppercase text-sm tracking-[2px] font-medium cursor-pointer hover:text-accent duration-300 py-2">
							Home
						</li>
						<li className="text-secondary uppercase text-sm tracking-[2px] font-medium cursor-pointer hover:text-accent duration-300 py-2">
							Portfolio
						</li>
						<li className="text-secondary uppercase text-sm tracking-[2px] font-medium cursor-pointer hover:text-accent duration-300 py-2">
							Journal
						</li>
						<li className="text-secondary uppercase text-sm tracking-[2px] font-medium cursor-pointer hover:text-accent duration-300 py-2">
							Service
						</li>
						<li className="text-secondary uppercase text-sm tracking-[2px] font-medium cursor-pointer hover:text-accent duration-300 py-2">
							Shop
						</li>
						<li className="text-secondary uppercase text-sm tracking-[2px] font-medium cursor-pointer hover:text-accent duration-300 py-2">
							Contact
						</li>
						<li className="text-secondary uppercase text-sm tracking-[2px] font-medium cursor-pointer hover:text-accent duration-300 py-2">
							Cart
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
