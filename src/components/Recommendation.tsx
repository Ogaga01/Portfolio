import React, { FC, useState, useEffect } from "react";
import { Recommendations } from "../types/recommendation";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import RecommendationCard from "./RecommendationCard";

const Recommendation: FC = () => {
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const lastIndex: number = Recommendations.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index]);

  useEffect(() => {
    let slider: NodeJS.Timer = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <Carousel>
      {Recommendations.map((recommendation) => (
        <RecommendationCard props={recommendation} />
      ))}
    </Carousel>
  );
};

export default Recommendation;
