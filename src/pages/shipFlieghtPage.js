import { render } from '@testing-library/react';
import React, { useState, useEffect } from 'react';
import { shipfreight } from '../components/waystoship/shipfreight';
import { Autoplay, Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import Styled from 'styled-components';
import './shipFleight.css';
import image1 from '../images/dv01.jpg';
import image2 from '../images/3t.jpeg';
import image3 from '../images/Ut02.jpg';
import image4 from '../images/bt.jpeg';
const Card = Styled.div`

h1 {
  div {
    background: #00e700;
    width: 10%;
    transition: all 0.5s ease;
  }
  :hover {
    cursor: pointer;
    div {
      width: 100%;
    }
  }
}
`;
export default class ShipFlightPage extends React.Component {
  componentDidMount() {
    document.title = 'KALWAY shipfreight';
  }

  render() {
    return (
      <div className="lg:pt-28 flex flex-col pb-10 bg-slate-500">
        <div className="lg:flex lg:flex-row hidden">
          <img src={image1} className="flex-1 h-64 2xl:h-80 " alt=""></img>
          <img src={image2} className="flex-1 h-64 2xl:h-80 " alt=""></img>
          <img src={image4} className="flex-1 h-64 2xl:h-80 " alt=""></img>
        </div>
        <div className=" lg:hidden block pt-20">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={image2} alt=""></img>
            </SwiperSlide>
            <SwiperSlide>
              <img src={image3} alt=""></img>
            </SwiperSlide>
            <SwiperSlide>
              <img src={image1} alt=""></img>
            </SwiperSlide>
          </Swiper>
        </div>
        <Card className=" self-center ">
          <h1 className=" self-center pt-10 text-gray-800 text-3xl 2xl:text-5xl">
            CARRIER SERVICES
            <p className="h-4"></p>
            <div className="w-40 h-2  hover:w-10"></div>
          </h1>
        </Card>

        <div className="flex flex-row lg:pl-16 pl-8 2xl:pt-16 pt-8">
          <img
            src={image3}
            className="flex-1 h-64 lg:block hidden"
            alt=""
          ></img>
          <div className="self-end 2xl:pl-32 p-2">
            <h2 className=" font-bold pt-0 text-xl">CARRIER PARTNERSHIP</h2>
            <h3 className=" text-gray-800 font-bold pt-10 text-xl">
              AVAILABLE LOADS ACCESS
            </h3>
            <p className=" text-gray-700 font-normal pt-2 text-xl ">
              The KALWAY Logistics web portal and mobile app gives carriers
              real-time access to search, view, and bid on available loads.
            </p>
            <h3 className="font-bold pt-10 text-xl">
              LOAD LIFECYCLE MANAGEMENT
            </h3>
            <p className="text-gray-800 font-normal pt-2 text-xl lg:w-1/2">
              KALWAY Logistics gives dispatchers the ability to manage loads and
              drivers with one easy-to-use portal, putting all the information
              you need, including load documents and invoices, at your
              fingertips.
            </p>
            <h3 className="text-gray-800 font-bold pt-10 text-xl">
              REAL-TIME TRACKING
            </h3>
            <p className="text-gray-800 font-normal pt-2 text-xl">
              The KALWAY Logistics mobile app allows drivers to provide
              real-time tracking, reducing the need for check-in phone calls.{' '}
            </p>

            <h3 className="text-gray-800 font-bold pt-10 text-xl">
              Dispatcher Web Portal Benefits:
            </h3>
            <div className="self-center pt-10 ">
              <li className=" text-gray-800 font-normal pt-2 text-xl">
                Search Available Loads and submit bids
              </li>
              <li className="text-gray-800 font-normal pt-2 text-xl">
                Full fleet overview with ability to manage loads and drivers
              </li>
              <li className="text-gray-800 font-normal pt-2 text-xl">
                Visibility into your Echo shipment volume history
              </li>
              <li className="text-gray-800 font-normal pt-2 text-xl">
                Complete load visibility during shipment process
              </li>
              <li className="text-gray-800 font-normal pt-2 text-xl">
                Invoice portal to view current and past receivables
              </li>
              <li className="text-gray-800 font-normal pt-2 text-xl">
                Ability to share load info with one click
              </li>
              <li className="text-gray-800 font-normal pt-2 text-xl">
                Set Preferred Lanes and receive daily Suggested Loads tailored
                to your needs{' '}
              </li>
              <li className="text-gray-800 font-normal pt-2 text-xl">
                Receive Reload opportunities for shipments booked with Echo
              </li>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
