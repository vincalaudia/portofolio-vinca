import React, { Component } from "react";

import Slider from "react-slick";
import Card from "./Card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Carousel extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "20px",
      slidesToShow: 3,
      speed: 500,
      dots: true,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1700,
      cssEase: "linear",
    };
    return (
      <div className="bg-[#374a6035] py-[30px] rounded-xl overflow-wrap">
        <Slider {...settings}>
          <div>
            <Card
              imageUrl="/projects/p1.png"
              duration="JUN - SEP 2022"
              role="UI/UX ENGINEERING"
              title="Sadarly iOS & Apple Watch App"
              instance="Apple Developer Academy @Infinite Learning"
              tags={["Team Project", "Learner", "On App Store"]}
              description="It is a mindfulness app designed to help busy individuals enhance their awareness and engage in mindfulness activities. Our app provides personalized recommendations based on goals and available time, turning mindfulness into actionable steps. With a wide range of exercises to choose from, including breathing techniques, journaling, and observation, Sadarly provides users with over 17 options for mindfulness practice. By tracking history and reflecting on exercises, users can experience the benefits of mindfulness training, such as reduced stress, improved attention span, and decreased job burnout."
            />
          </div>
          <div>
            <Card
              imageUrl="/projects/p1.png"
              duration="JUN - SEP 2022"
              role="UI/UX ENGINEERING"
              title="Sadarly iOS & Apple Watch App"
              instance="Apple Developer Academy @Infinite Learning"
              tags={["Team Project", "Learner", "On App Store"]}
              description="It is a mindfulness app designed to help busy individuals enhance their awareness and engage in mindfulness activities. Our app provides personalized recommendations based on goals and available time, turning mindfulness into actionable steps. With a wide range of exercises to choose from, including breathing techniques, journaling, and observation, Sadarly provides users with over 17 options for mindfulness practice. By tracking history and reflecting on exercises, users can experience the benefits of mindfulness training, such as reduced stress, improved attention span, and decreased job burnout."
            />
          </div>
          <div>
            <Card
              imageUrl="/projects/p1.png"
              duration="JUN - SEP 2022"
              role="UI/UX ENGINEERING"
              title="Sadarly iOS & Apple Watch App"
              instance="Apple Developer Academy @Infinite Learning"
              tags={["Team Project", "Learner", "On App Store"]}
              description="It is a mindfulness app designed to help busy individuals enhance their awareness and engage in mindfulness activities. Our app provides personalized recommendations based on goals and available time, turning mindfulness into actionable steps. With a wide range of exercises to choose from, including breathing techniques, journaling, and observation, Sadarly provides users with over 17 options for mindfulness practice. By tracking history and reflecting on exercises, users can experience the benefits of mindfulness training, such as reduced stress, improved attention span, and decreased job burnout."
            />
          </div>
          <div>
            <Card
              imageUrl="/projects/p1.png"
              duration="JUN - SEP 2022"
              role="UI/UX ENGINEERING"
              title="Sadarly iOS & Apple Watch App"
              instance="Apple Developer Academy @Infinite Learning"
              tags={["Team Project", "Learner", "On App Store"]}
              description="It is a mindfulness app designed to help busy individuals enhance their awareness and engage in mindfulness activities. Our app provides personalized recommendations based on goals and available time, turning mindfulness into actionable steps. With a wide range of exercises to choose from, including breathing techniques, journaling, and observation, Sadarly provides users with over 17 options for mindfulness practice. By tracking history and reflecting on exercises, users can experience the benefits of mindfulness training, such as reduced stress, improved attention span, and decreased job burnout."
            />
          </div>
          <div>
            <Card
              imageUrl="/projects/p1.png"
              duration="JUN - SEP 2022"
              role="UI/UX ENGINEERING"
              title="Sadarly iOS & Apple Watch App"
              instance="Apple Developer Academy @Infinite Learning"
              tags={["Team Project", "Learner", "On App Store"]}
              description="It is a mindfulness app designed to help busy individuals enhance their awareness and engage in mindfulness activities. Our app provides personalized recommendations based on goals and available time, turning mindfulness into actionable steps. With a wide range of exercises to choose from, including breathing techniques, journaling, and observation, Sadarly provides users with over 17 options for mindfulness practice. By tracking history and reflecting on exercises, users can experience the benefits of mindfulness training, such as reduced stress, improved attention span, and decreased job burnout."
            />
          </div>
          <div>
            <Card
              imageUrl="/projects/p1.png"
              duration="JUN - SEP 2022"
              role="UI/UX ENGINEERING"
              title="Sadarly iOS & Apple Watch App"
              instance="Apple Developer Academy @Infinite Learning"
              tags={["Team Project", "Learner", "On App Store"]}
              description="It is a mindfulness app designed to help busy individuals enhance their awareness and engage in mindfulness activities. Our app provides personalized recommendations based on goals and available time, turning mindfulness into actionable steps. With a wide range of exercises to choose from, including breathing techniques, journaling, and observation, Sadarly provides users with over 17 options for mindfulness practice. By tracking history and reflecting on exercises, users can experience the benefits of mindfulness training, such as reduced stress, improved attention span, and decreased job burnout."
            />
          </div>
          <div>
            <Card
              imageUrl="/projects/p1.png"
              duration="JUN - SEP 2022"
              role="UI/UX ENGINEERING"
              title="Sadarly iOS & Apple Watch App"
              instance="Apple Developer Academy @Infinite Learning"
              tags={["Team Project", "Learner", "On App Store"]}
              description="It is a mindfulness app designed to help busy individuals enhance their awareness and engage in mindfulness activities. Our app provides personalized recommendations based on goals and available time, turning mindfulness into actionable steps. With a wide range of exercises to choose from, including breathing techniques, journaling, and observation, Sadarly provides users with over 17 options for mindfulness practice. By tracking history and reflecting on exercises, users can experience the benefits of mindfulness training, such as reduced stress, improved attention span, and decreased job burnout."
            />
          </div>
          <div>
            <Card
              imageUrl="/projects/p1.png"
              duration="JUN - SEP 2022"
              role="UI/UX ENGINEERING"
              title="Sadarly iOS & Apple Watch App"
              instance="Apple Developer Academy @Infinite Learning"
              tags={["Team Project", "Learner", "On App Store"]}
              description="It is a mindfulness app designed to help busy individuals enhance their awareness and engage in mindfulness activities. Our app provides personalized recommendations based on goals and available time, turning mindfulness into actionable steps. With a wide range of exercises to choose from, including breathing techniques, journaling, and observation, Sadarly provides users with over 17 options for mindfulness practice. By tracking history and reflecting on exercises, users can experience the benefits of mindfulness training, such as reduced stress, improved attention span, and decreased job burnout."
            />
          </div>
        </Slider>
      </div>
    );
  }
}
