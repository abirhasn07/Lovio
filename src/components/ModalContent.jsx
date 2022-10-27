import React from 'react';
import { formatCurrency } from '../utilities/formatCurrency';

const ModalContent = () => {
	return (
		<div className=" flex items-center justify-between w-[80%] mx-auto mt-8">
			<div className="">
				<img
					src="https://ik.imagekit.io/abirhasan/tr:w-80/lovio_img/611c6759c2644dd568c6c504_shop_2-p-500_5wsBf2x6d.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1666702177420"
					alt="product-image"
					width={60}
				/>
			</div>
			<div>
				<p className="text-lg">Lovio Lisette</p>
				<strong className="text-base text-accent block my-2">
					USD{formatCurrency(1499)}
				</strong>
				<button className="text-accent uppercase text-sm tracking-[5px] ">
					remove
				</button>
			</div>
			<form action="" className="bg-secondary">
				<input
					type="number"
					name=""
					id=""
					className="border-[3px] text-secondary border-secondary w-[50px] h-[50px] text-lg text-center"
				/>
			</form>
		</div>
	);
};

export default ModalContent;
