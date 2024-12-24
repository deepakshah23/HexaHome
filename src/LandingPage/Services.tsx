import { Carousel } from '@mantine/carousel';
import ServiceCard from './ServicesCard';

function Services() {
  return (
    <Carousel
     
      height={200}
      slideSize="33.333333%"
      slideGap="md"
      
      align="start"
      slidesToScroll={3}
    >
      <Carousel.Slide><ServiceCard text='Residential'/></Carousel.Slide>
      <Carousel.Slide><ServiceCard text='Commercial'/></Carousel.Slide>
      <Carousel.Slide><ServiceCard text='PG/Hotel'/></Carousel.Slide>
      <Carousel.Slide><ServiceCard text='Plot/Land'/></Carousel.Slide>
      <Carousel.Slide><ServiceCard text='Shared Flat'/></Carousel.Slide>
      <Carousel.Slide><ServiceCard text='Flatmates'/></Carousel.Slide>
    </Carousel>
  );
}
export default Services;