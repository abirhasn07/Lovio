import React, { useState } from 'react';
import logo from '../assets/logo.svg';
import menu from '../assets/menu.svg';
import cart from '../assets/cart.svg';
import close from '../assets/closeMenu.svg';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';

import ModalContent from './ModalContent';

const Header = () => {
	const [openMenu, setOpenMenu] = useState(false);

	// MODAL
	const customStyles = {
		content: {
			top: '50%',
			left: '50%',
			right: 'auto',
			bottom: 'auto',
			marginRight: '-50%',
			transform: 'translate(-50%, -50%)',
			width: '70%',
			height: '70%',
			zIndex: '99',
		},
	};
	let subtitle;
	const [modalIsOpen, setIsOpen] = useState(false);

	function openModal() {
		setIsOpen(true);
	}

	function afterOpenModal() {
		// references are now sync'd and can be accessed.
		// subtitle.style.color = '#f00';
	}

	function closeModal() {
		setIsOpen(false);
	}
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
						<Link
							to={'/about'}
							className="text-secondary uppercase text-sm tracking-[2px] font-medium cursor-pointer hover:text-accent duration-300"
						>
							About
						</Link>
					</ul>
				</nav>
				<div className="w-[125px] cursor-pointer">
					<Link to="/">
						<img src={logo} alt="company logo" loading="lazy" width={'125px'} />
					</Link>
				</div>
				<nav>
					<ul className="flex justify-center gap-4 items-center">
						<Link
							to={'/service'}
							className="text-secondary uppercase text-sm tracking-[2px] font-medium cursor-pointer hover:text-accent duration-300"
						>
							Service
						</Link>
						<Link
							to="/shop"
							className="text-secondary uppercase text-sm tracking-[2px] font-medium cursor-pointer hover:text-accent duration-300"
						>
							Shop
						</Link>
						<Link
							to="/contact"
							className="text-secondary uppercase text-sm tracking-[2px] font-medium cursor-pointer hover:text-accent duration-300"
						>
							Contact
						</Link>
						<li
							className="text-secondary uppercase text-sm tracking-[2px] font-medium cursor-pointer hover:text-accent duration-300 flex gap-1"
							onClick={openModal}
						>
							Cart <img src={cart} alt="" className="w-[20px] " />
						</li>
					</ul>
				</nav>
			</div>
			{/* MODAL  */}

			<div>
				<Modal
					isOpen={modalIsOpen}
					onAfterOpen={afterOpenModal}
					onRequestClose={closeModal}
					style={customStyles}
					contentLabel="Example Modal"
					ariaHideApp={false}
				>
					<div className="flex justify-between px-4  items-center">
						<h4 className="text-[38px] text-secondary">Your Cart</h4>
						<div>
							<img
								src={close}
								alt=""
								className="w-[50px] cursor-pointer"
								onClick={closeModal}
							/>
						</div>
					</div>
					<ModalContent />
				</Modal>
			</div>
			{/* MODAL  */}
			{/* mobile menu  */}

			<div className="flex justify-around min-h-[60px] items-center relative lg:hidden z-50">
				<div onClick={openModal}>
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
						<Link
							to="/"
							className="text-secondary block uppercase text-sm tracking-[2px] font-medium cursor-pointer hover:text-accent duration-300 py-2"
						>
							Home
						</Link>
						<Link
							to="/portfolio"
							className="text-secondary block uppercase text-sm tracking-[2px] font-medium cursor-pointer hover:text-accent duration-300 py-2"
						>
							Portfolio
						</Link>
						<Link
							to="/journal"
							className="text-secondary block uppercase text-sm tracking-[2px] font-medium cursor-pointer hover:text-accent duration-300 py-2"
						>
							Journal
						</Link>
						<Link
							to="/service"
							className="text-secondary block uppercase text-sm tracking-[2px] font-medium cursor-pointer hover:text-accent duration-300 py-2"
						>
							Service
						</Link>
						<Link
							to={'/shop'}
							className="text-secondary block uppercase text-sm tracking-[2px] font-medium cursor-pointer hover:text-accent duration-300 py-2"
						>
							Shop
						</Link>
						<Link
							to="/contact"
							className="text-secondary block uppercase text-sm tracking-[2px] font-medium cursor-pointer hover:text-accent duration-300 py-2"
						>
							Contact
						</Link>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
