import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Slide1 from "../../../../assets/Slider/slide-1.webp";
import Slide2 from "../../../../assets/Slider/slide-2.webp";
import Slide3 from "../../../../assets/Slider/slide-3.webp";
import Slide4 from "../../../../assets/Slider/slide-4.webp";
import Slide5 from "../../../../assets/Slider/slide-5.webp";
import Slide6 from "../../../../assets/Slider/slide-6.webp";
import Slide8 from "../../../../assets/Slider/slide-8.webp";
import Slide10 from "../../../../assets/Slider/slide-10.webp";
import Slide11 from "../../../../assets/Slider/slide-11.webp";
import Slide12 from "../../../../assets/Slider/slide-12.webp";
import Slide13 from "../../../../assets/Slider/slide-13.webp";
import Slide14 from "../../../../assets/Slider/slide-14.webp";
import Slide15 from "../../../../assets/Slider/slide-15.webp";
import Slide17 from "../../../../assets/Slider/slide-17.webp";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function HomeSliderNew(props) {
	return (
		<Swiper
			spaceBetween={30}
			centeredSlides={true}
			loop={true}
			autoplay={{
				delay: 2500,
				disableOnInteraction: false,
			}}
			pagination={{
				clickable: true,
			}}
			navigation={true}
			modules={[Autoplay, Navigation,Pagination]}
			className="mySwiper"
		>
			<SwiperSlide>
				<img
					src={Slide1}
					style={{ height: "100%", width: "100%" }}
				></img>
			</SwiperSlide>
			<SwiperSlide>
				<img
					src={Slide2}
					style={{ height: "100%", width: "100%" }}
				></img>
			</SwiperSlide>
            <SwiperSlide>
				<img
					src={Slide3}
					style={{ height: "100%", width: "100%" }}
				></img>
			</SwiperSlide>
            <SwiperSlide>
				<img
					src={Slide4}
					style={{ height: "100%", width: "100%" }}
				></img>
			</SwiperSlide>
            <SwiperSlide>
				<img
					src={Slide5}
					style={{ height: "100%", width: "100%" }}
				></img>
			</SwiperSlide>
            <SwiperSlide>
				<img
					src={Slide6}
					style={{ height: "100%", width: "100%" }}
				></img>
			</SwiperSlide>
            <SwiperSlide>
				<img
					src={Slide8}
					style={{ height: "100%", width: "100%" }}
				></img>
			</SwiperSlide>
            <SwiperSlide>
				<img
					src={Slide10}
					style={{ height: "100%", width: "100%" }}
				></img>
			</SwiperSlide>
            <SwiperSlide>
				<img
					src={Slide11}
					style={{ height: "100%", width: "100%" }}
				></img>
			</SwiperSlide>
            <SwiperSlide>
				<img
					src={Slide12}
					style={{ height: "100%", width: "100%" }}
				></img>
			</SwiperSlide>
            <SwiperSlide>
				<img
					src={Slide13}
					style={{ height: "100%", width: "100%" }}
				></img>
			</SwiperSlide>
            <SwiperSlide>
				<img
					src={Slide14}
					style={{ height: "100%", width: "100%" }}
				></img>
			</SwiperSlide>
            <SwiperSlide>
				<img
					src={Slide15}
					style={{ height: "100%", width: "100%" }}
				></img>
			</SwiperSlide>
            <SwiperSlide>
				<img
					src={Slide17}
					style={{ height: "100%", width: "100%" }}
				></img>
			</SwiperSlide>

			{/* <SwiperSlide>Slide 3</SwiperSlide>
					<SwiperSlide>Slide 4</SwiperSlide>
					<SwiperSlide>Slide 5</SwiperSlide>
					<SwiperSlide>Slide 6</SwiperSlide>
					<SwiperSlide>Slide 7</SwiperSlide>
					<SwiperSlide>Slide 8</SwiperSlide>
					<SwiperSlide>Slide 9</SwiperSlide> */}
		</Swiper>
	);
}

export default HomeSliderNew;
