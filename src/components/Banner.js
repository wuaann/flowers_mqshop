import {Swiper, width, SwiperSlide} from 'swiper/react';
import '../assets/css/banner.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Banner() {
    return (
        <>
            <div className="banner">

                <Swiper
                    spaceBetween={100}
                    slidesPerView={1}

                >

                    <SwiperSlide><img
                        src={'https://cdn.shopify.com/s/files/1/0781/4423/files/bloomthis-home-21-mobile_e42673c9-eaa9-4b0b-bafd-ea8995e2344e_x800.jpg?v=1684226739'}
                        alt=""/></SwiperSlide>
                    <SwiperSlide><img
                        src={'https://cdn.shopify.com/s/files/1/0781/4423/files/bloomthis-home-21-mobile_e42673c9-eaa9-4b0b-bafd-ea8995e2344e_x800.jpg?v=1684226739'}
                        alt=""/></SwiperSlide>
                    <SwiperSlide><img
                        src={'https://cdn.shopify.com/s/files/1/0781/4423/files/bloomthis-home-21-mobile_e42673c9-eaa9-4b0b-bafd-ea8995e2344e_x800.jpg?v=1684226739'}
                        alt=""/></SwiperSlide>
                    <SwiperSlide><img
                        src={'https://cdn.shopify.com/s/files/1/0781/4423/files/bloomthis-home-21-mobile_e42673c9-eaa9-4b0b-bafd-ea8995e2344e_x800.jpg?v=1684226739'}
                        alt=""/></SwiperSlide>

                </Swiper>
            </div>

        </>
    )
}

export default Banner;