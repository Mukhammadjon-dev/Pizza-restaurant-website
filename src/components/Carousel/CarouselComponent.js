import React from "react";
import { Carousel } from "react-bootstrap";
import {
  Feature,
  Feature2,
  Feature3,
  Feature4,
  Feature5,
} from "../Carousel/index";

export default function CarouselComponent() {
  return (
    <div id="CarouselComponent">
      <Carousel>
        <Carousel.Item interval={2000}>
          <Feature />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <Feature2 />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <Feature3 />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <Feature4 />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <Feature5 />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
