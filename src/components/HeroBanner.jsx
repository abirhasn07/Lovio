import React from 'react';
const HeroBanner = () => {
	return (
		<div className="max-w-[1440px] bg-primary pb-8 lg:py-12 z-40 ">
			<div className="flex w-full mx-auto relative justify-center lg:w-[90%] isolate">
				<img
					src={
						'https://ik.imagekit.io/abirhasan/lovio_img/hero-img__2__3xOX-UXOv.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1666552194669'
					}
					alt="wedding photoshoots"
					className="-z-10 w-[50%] scale-[.9] absolute object-cover rotate-6 right-[5%] bottom-0"
					loading="lazy"
				/>

				<img
					src={
						'https://ik.imagekit.io/abirhasan/lovio_img/hero-img__1__h6793xEQl.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1666552194606'
					}
					alt="wedding photoshoots"
					className="w-[50%]  scale-105"
					loading="lazy"
				/>
				<img
					src={
						'https://ik.imagekit.io/abirhasan/lovio_img/hero-img__3__jHq7ebQRy.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1666552196141'
					}
					alt="wedding photoshoots"
					className="-z-10  w-[50%] scale-[.9] -rotate-6 absolute object-cover left-[5%] bottom-0"
					id="img"
					loading="lazy"
				/>
			</div>
		</div>
	);
};

export default HeroBanner;
