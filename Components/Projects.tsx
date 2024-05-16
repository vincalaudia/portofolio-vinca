import React, { useEffect } from "react";
import Card from "./Card";
import { BsArrowRight } from "react-icons/bs";
import AOS from "aos";

const Projects = () => {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      // Settings here (optional)
      // e.g., duration: 2000
    });
  }, []);

  return (
    <div className="bg-[#0b1010] h-fit md:py-[20rem] pt-[100px]">
      <h2
        className="text-[32px] md:w-[80%] lg:w[100%] md:text-[40px] md:leading-[3rem] leading-[2.3rem] font-bold text-white text-center mx-auto"
        data-aos="fade-up"
      >
        Project <span className="text-[#EADCBA]">Highlight</span>
      </h2>
      <div
        className="overflow-clip w-[80%] pt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2.5rem] mb-[60px]"
        data-aos="fade-up"
      >
        <Card
          id="1"
          imageUrl={["/projectsImage/p1.png"]}
          duration="JUN - SEP 2022"
          role="UI/UX ENGINEERING"
          title="Sadarly iOS & Apple Watch App"
          instance="Apple Developer Academy @Infinite Learning"
          tags={["Team Project", "Learner", "On App Store"]}
          description="It is a mindfulness app designed to help busy individuals enhance their awareness and engage in mindfulness activities. Our app provides personalized recommendations based on goals and available time, turning mindfulness into actionable steps. With a wide range of exercises to choose from, including breathing techniques, journaling, and observation, Sadarly provides users with over 17 options for mindfulness practice. By tracking history and reflecting on exercises, users can experience the benefits of mindfulness training, such as reduced stress, improved attention span, and decreased job burnout."
        />

        <Card
          id="2"
          imageUrl={["/projectsImage/p2.png"]}
          duration="SEP 2023"
          role="UX RESEARCHER"
          title="Tihati: Teman Berjalan dengan Aman"
          instance="Submission for GEMASTIK XVI"
          tags={["Team Project", "Lead Researcher", "Patented"]}
          description="Tihati, the ultimate safety companion, excels with its Emergency Toolkit featuring a powerful SOS button and seamless location sharing. Even offline, users can rely on essential functions like video recording and discreet fake calls. The Map Safety feature ensures real-time tracking of friends, while 'Find Places' enhances navigation with safety insights. Continuous refinement through iterative design has optimized user experience. Future upgrades, such as lock screen access to the SOS button and tutorial replay options, will elevate Tihati's user-friendly design. Tihati is not just an app; it's a reliable solution empowering users and advancing women's safety in public spaces."
        />

        <Card
          id="3"
          imageUrl={["/projectsImage/p3.png"]}
          duration="DES 2022 - FEB 2023"
          role="UI/UX ENGINEERING"
          title="urai: Your Anxiety Relieve Pal"
          instance="Makmur Abadi 88 Team, Arkavidia 8 Submission"
          tags={["Team Project", "UI/UX Designer", "Study Case"]}
          description="Urai is a mobile application with the intention of assisting a close friend who suffers from a severe mental disorder with self-harm tendencies. Through our observation, we identified that their mental health struggles were exacerbated by a lack of outlets for emotional expression and a platform to share their personal stories. In response to this, we have created a dedicated platform that offers a secure and nurturing environment for them to freely express their emotions and communicate their experiences by using chatbot and activity guides."
        />

        <Card
          id="4"
          imageUrl={["/projectsImage/p4.png"]}
          duration="SEP - NOV 2022"
          role="UI/UX ENGINEERING"
          title="Pemilihan Raya (PEMIRA) 2022"
          instance="Himpunan Mahasiswa Ilmu Komputer UGM"
          tags={["Team Project", "Design Lead", "Website"]}
          description="The platform serves as a comprehensive solution for conducting the annual Himakom leader election. It enables members of Himakom UGM (Himpunan Mahasiswa Ilmu Komputer Universitas Gadjah Mada) to cast their votes conveniently both online and onsite. The platform streamlines the election process, ensuring efficiency, transparency, and inclusivity. It provides a user-friendly interface, secure voting mechanisms, and accurate result tabulation, ultimately facilitating a fair and democratic election for the benefit of all Himakom members."
        />

        <Card
          id="5"
          imageUrl={["/projectsImage/p5.png"]}
          duration="OCT - DES 2022"
          role="UI/UX ENGINEERING"
          title="Ikipiro"
          instance="Apple Developer Academy @Infinite Learning"
          tags={["Team Project", "UI/UX Designer", "On App Store"]}
          description="This app simplifies price list management and sharing for businesses. Businesses can benefit from features such as quick product search, easy input of product data, multi-store management, and data synchronization, all of which streamline operations and enhance productivity. Users can effortlessly manage prices, access information instantly, and collaborate with multiple admins and devices. By leveraging this app, businesses can efficiently handle pricing tasks, improve efficiency, and deliver excellent customer service, resulting in enhanced overall performance."
        />

        <Card
          id="6"
          imageUrl={["/projectsImage/p6.png"]}
          duration="APR 2022/ APR 2023"
          role="UI/UX ENGINEERING"
          title="Jamu Jamu"
          instance="Apple Developer Academy @Infinite Learning"
          tags={["Personal Project", "Coder & Illustrator", "SwiftUI"]}
          description="Inspired by my personal experience with Jamu, I created an interactive app that delivers insights about Jamu in an engaging and fun way. Through a visual novel and trivia quiz format, users can interact with a character called Mbok Arum, a 'jamu gendong' merchant. Mbok Arum shares her knowledge about jamu's health benefits, trivia, recipes, and more. As users progress through the story, they can choose different dialogues that lead to various endings, with a total of 13 different ending illustrations to explore. To further enhance knowledge, the app also offers a fun trivia section where users can test their Jamu knowledge."
        />
      </div>

      <div className="flex flex-col md:flex-row justify-center mx-auto space-y-3 md:space-y-1 space-x-4 items-center mb-[20px] w-[80%]">
        <h1 className="font-semibold text-[20px] text-center md:text-start md:text-[20px] text-[#adc5cd]">
          This website is still under development. More details will be added.
          However, You can
        </h1>
        <a
          href="https://figma.com/proto/WBYMbm0NI9ShUNojqZhKJH/Untitled?page-id=1%3A4&type=design&node-id=49-2504&viewport=1949%2C1406%2C0.28&scaling=min-zoom&starting-point-node-id=49%3A2504&show-proto-sidebar=1"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 lg:my-8 hover:bg-[#304b54c2] transition-all duration-200 py-4 text-18px font-semibold text-white bg-[#304b5461] flex items-center space-x-2 border-solid border-2 rounded-[400px] border-[#FFFFFF] z-1000000"
        >
          <p>Find More Projects Here</p>
          <BsArrowRight />
        </a>
      </div>
    </div>
  );
};

export default Projects;
