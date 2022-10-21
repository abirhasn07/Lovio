import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper';
import { clientData } from '../data/client';
const Testimonial = () => {
	return (
		<section className="bg-primary py-12">
			<div className="flex justify-center items-center flex-col gap-2">
				<img
					src="https://ik.imagekit.io/abirhasan/lovio_img/leaf_YoaiVXOvH.png?ik-sdk-version=javascript-1.4.3&updatedAt=1666330546647"
					alt="green leaf"
					width={'50px'}
				/>
				<p className="text-secondary ">TESTIMONIALS</p>
				<h2 className="text-[42px] text-secondary text-center leading-none font-primary w-[95%] mx-auto mb-4 lg:text-[62px] lg:w-[70%] ">
					What our clients say
				</h2>
			</div>
			<Swiper
				pagination={true}
				modules={[Pagination, Autoplay]}
				className="w-[70%] bg-slate-50"
				autoplay={{
					delay: 3500,
					disableOnInteraction: true,
				}}
				loop={true}
			>
				{clientData.map((item, index) => {
					return (
						<SwiperSlide
							className="text-center p-4 flex flex-col justify-center items-center py-4"
							key={index}
						>
							<img src={item.imgUrl} alt="leaf" width={'50px'} />
							<p className="text-secondary w-[80%]">{item.dialog}</p>
							<p className="text-accent">{item.name}</p>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</section>
	);
};

export default Testimonial;
