import React, { useRef /* useState */ } from 'react';
import Carousel from 'react-elastic-carousel';
import { v4 as uuidv4 } from 'uuid';
import { HomeCard } from '../components/Home/HomeCard';
import { RecomendationCard } from '../components/Home/recomendationCard';
import { breakPoints, carArray, recomendationData } from '../data/homeData';

export default function Home() {
  // const { restart, setRestart } = useState({});
  const carouselRef = useRef(null);
  const carouselRef2 = useRef(null);

  const onNextStart = (currentItem, nextItem) => {
    if (currentItem.index === 2) {
      carouselRef.current.goTo(0);
    }
  };
  const onNextStart2 = (currentItem, nextItem) => {
    if (currentItem.index === 4) {
      carouselRef2.current.goTo(0);
    }
  };

  const onPrevStart = (currentItem, nextItem) => {
    if (currentItem.index === 0) {
      carouselRef.current.goTo(6);
    }
  };
  const onPrevStart2 = (currentItem, nextItem) => {
    if (currentItem.index === 0) {
      carouselRef2.current.goTo(4);
    }
  };

  return (
    <div className="Home">
      <div className="Header" />

      <p className="findYourDrive">Find your drive</p>
      <div className="exploreContainer">
        <p className="explore">Explore the world&apos;s largest car sharing marketplace</p>
      </div>
      <div className="ContentBox mb-5">
        <div className="TitleBox">
          <p className="pBrowse">Browse by make</p>
        </div>
        <Carousel
          ref={carouselRef}
          breakPoints={breakPoints}
          className="carouselBox"
          disableArrowsOnEnd={false}
          disableArrowsOnStart={false}
          onNextStart={onNextStart}
          onPrevStart={onPrevStart}
          pagination={false}>
          {carArray.map((car) => (
            <HomeCard key={uuidv4()} model={car.model} url={car.url} />
          ))}
        </Carousel>
      </div>
      <div className="recomendationBox">
        <Carousel
          ref={carouselRef2}
          className="recomendationCarousel"
          disableArrowsOnEnd={false}
          disableArrowsOnStart={false}
          itemsToShow={1}
          onNextStart={onNextStart2}
          onPrevStart={onPrevStart2}
          pagination={false}>
          {recomendationData.map((data) => (
            <RecomendationCard key={uuidv4()} {...data} />
          ))}
        </Carousel>
      </div>
    </div>
  );
}
