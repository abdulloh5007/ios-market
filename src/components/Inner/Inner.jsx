import { Swiper, SwiperSlide } from "swiper/react";

import './Inner.scss';
import "swiper/css";
import { Button } from "@mui/material";

import inner from '../../assets/inner.png'

function Inner() {
    const swipersData = [
        {
            title: 'The new phones are here take a look.',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque in est dui, aliquam, tempor. Faucibus morbi turpis.',
        },
        {
            title: 'The new phones are here take a look.',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque in est dui, aliquam, tempor. Faucibus morbi turpis.',
        },
        {
            title: 'The new phones are here take a look.',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque in est dui, aliquam, tempor. Faucibus morbi turpis.',
        },
    ]

    return (
        <div className="inner">
            <Swiper>
                {
                    swipersData?.map((e, i) => (
                        <SwiperSlide className="mySwiper" key={i}>
                            <div className="left">
                                <b>{e.title}</b>
                                <p>{e.text}</p>
                                <Button variant='outlined' className="myBtn">Explore</Button>
                            </div>
                            <div className="right">
                                <img src={inner} alt="inner" />
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}

export default Inner