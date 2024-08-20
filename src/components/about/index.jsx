import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6  md:gap-8 w-full">
        <ItemLayout
          className={
            " col-span-full lg:col-span-20 row-span-2 flex-col items-start"
          }
        >
          <h2 className="  text-xl md:text-2xl text-left w-full capitalize">
          WELCOME TO THE BEST WEBSITE DEVELOPMENT COMPANY IN KOCHI & KOLLAM
          </h2>
          <p className="font-light  text-xs sm:text-sm md:text-base   ">
          Redintek is a global software solution provider that delivers a various services ranging from mobile app development to digital marketing all under one roof. 
          Being the top software company in Kerala, we know what the customer cares about in the online world.
           First of all we implement effective software solutions that suit every type of business, from individuals to large businesses. 
           In order to provide the best services, we constantly research the internet world so that we are updated with the most recent information as it pops up on online. 
           We are highly trained and skilled professionals capable of planning, creating and implementing the best solution as per the client's requirement. 
           We provide services like mobile app development, digital marketing, graphic design, cyber security, website development. etc in all over the world.</p>
        </ItemLayout>
        <ItemLayout
          className={
            " col-span-full lg:col-span-4 row-span-2 flex-col items-start"
          }
        >
          <h2 className="  text-xl md:text-2xl text-left w-full capitalize">
          Quick Support.
          </h2>
          <p className="font-light  text-xs sm:text-sm md:text-base   ">
          We provide 24*7 support serice to our client because our team gives importance to support our clients at their needy time. 
          We have passionate professionals that manages customer relationships in everything we do</p>
        </ItemLayout>
        <ItemLayout
          className={
            " col-span-full lg:col-span-4 row-span-2 flex-col items-start"
          }
        >
          <h2 className="  text-xl md:text-2xl text-left w-full capitalize">
          Dedicated Team
          </h2>
          <p className="font-light  text-xs sm:text-sm md:text-base   ">
          We address our clients business challenges in a customized way so our team comes up with an effective solution to the problem. 
          Redintek always focus on innovative ideas to handle customers issues</p>
        </ItemLayout>
        <ItemLayout
          className={
            " col-span-full lg:col-span-4 row-span-2 flex-col items-start"
          }
        >
          <h2 className="  text-xl md:text-2xl text-left w-full capitalize">
          99% Client Satisfaction
          </h2>
          <p className="font-light  text-xs sm:text-sm md:text-base   ">
          Redintek team always maintains the trust of our clients and we provide 
          quality services that always satisfy our customers.</p>
        </ItemLayout>
       

        {/* <ItemLayout
          className={" col-span-full xs:col-span-4 lg:col-span-4 "}
        >
          <h2 className="  text-xl md:text-2xl text-left  capitalize">
            Quick Support 
          </h2>
          <p className="font-light  text-xs sm:text-sm md:text-bas ">
            We provide 24*7 support serice to our client because our team gives importance to support our clients at their needy time. 
              We have passionate professionals that manages customer relationships in everything we do
          </p>
        </ItemLayout> */}

        {/*<ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            4+{" "}
            <sub className="font-semibold text-base">years of experience</sub>
          </p>
        </ItemLayout> */}

        {/* <ItemLayout
          className={"col-span-full sm:col-span-6 md:col-span-4 !p-0"}
        >
          <img
            className="w-full h-auto"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api/top-langs?username=codebucks27&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`}
            alt="CodeBucks"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-8 !p-0"}>
          <img
            className="w-full h-auto"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api?username=codebucks27&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`}
            alt="CodeBucks"
            loading="lazy"
          />
        </ItemLayout> */}
        
        

        
        <ItemLayout
          className={
            " col-span-full lg:col-span-6 row-span-2 flex-col items-start text-accent "
          }
        >
          <h2 className="  text-xl md:text-2xl text-center w-full capitalize font-bold">
          Who We Are

          </h2>
          <p className="font-light  text-xs sm:text-sm md:text-base   ">
          As a software company, we offer the services includes mobile app development, web development, web designing, digital marketing, cyber security, etc. 
          We have an excellent team who values the needs of businesses and provide best solutions with leading technologies</p>
        </ItemLayout>
        
        <ItemLayout
          className={
            " col-span-full lg:col-span-6 row-span-2 flex-col items-start text-accent "
          }
        >
          <h2 className="  text-xl md:text-2xl text-center w-full capitalize font-bold">
          5+ Year of Experience

          </h2>
          <p className="font-light  text-xs sm:text-sm md:text-base   ">
          Redintek is a Tech Soul for your Business, provides exclusive IT solutions in the areas of Software designing and development. 
          Our purpose is to deliver assurance of technology and human ingenuity.</p>
        </ItemLayout>
        <ItemLayout
          className={
            " col-span-full lg:col-span-6 row-span-2 flex-col items-start text-accent "
          }
        >
          <h2 className="  text-xl md:text-2xl text-center w-full capitalize font-bold">
          Why Choos Us

          </h2>
          <p className="font-light  text-xs sm:text-sm md:text-base   ">
            We have professional
engineers with excellent

technical knowledge and skills

in using the most recent

software technology. We apply

our knowledge to bring

solutions that meet the client's

needs, expectations, and

budget.</p>
        </ItemLayout>
        <ItemLayout
          className={
            " col-span-full lg:col-span-6 row-span-2 flex-col items-start text-accent "
          }
        >
          <h2 className="  text-xl md:text-2xl text-center w-full capitalize font-bold">
          Vision
          </h2>
          <p className="font-light  text-xs sm:text-sm md:text-base   ">
          Overarching vision is to consistently deliver software services of unparalleled effectiveness, 
          setting the highest standards in the industry, and thereby ensuring the utmost satisfaction and value for our customers.</p>
        </ItemLayout>

        {/* <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <img
            className="w-full h-auto"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STREAK_STATS_URL}?user=codebucks27&theme=dark&hide_border=true&type=svg&background=EB545400&ring=FEFE5B&currStreakLabel=FEFE5B`}
            alt="CodeBucks"
            loading="lazy"
          />
        </ItemLayout> */}

        {/* <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <Link
            href="https://github.com/codebucks27/Nextjs-contentlayer-blog"
            target="_blank"
            className="w-full"
          >
            <img
              className="w-full h-auto"
              src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api/pin/?username=codebucks27&repo=Nextjs-contentlayer-blog&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false&description_lines_count=2`}
              alt="CodeBucks"
              loading="lazy"
            />
          </Link>
        </ItemLayout> */}
        <ItemLayout className={"col-span-full lg:col-span-4 row-span-2 flex-col items-start"}>
        <h2 className="  text-xl md:text-2xl text-left  capitalize">
            Virtual Caliber 
          </h2>
          <img
            className="w-25 h-auto "
            src="https://media.licdn.com/dms/image/D560BAQEoeWM-tR63TQ/company-logo_200_200/0/1720495030537/virtual_calibre_sdn_bhd_logo?e=2147483647&v=beta&t=NVHWi_AfBHQObL6FoKkhybesaQdMRqeX71QTVBQqUxs"
            alt="CodeBucks"
            loading="lazy"
          />
          
         
        </ItemLayout>
        <ItemLayout className={"col-span-full lg:col-span-4 row-span-2 flex-col items-start"}>
        <h2 className="  text-xl md:text-2xl text-left  capitalize">
            Ntek
          </h2>
          <img
            className="w-25 h-auto "
            src="https://media.licdn.com/dms/image/C4E0BAQFmVHJLDx0BAA/company-logo_200_200/0/1630643238923?e=2147483647&v=beta&t=7hROtmLa0YfCpXdiu8nRS-ibWXWUAUefrPLJXIKeQyU"
            alt="CodeBucks"
            loading="lazy"
          />
          
         
        </ItemLayout>
        <ItemLayout className={"col-span-full lg:col-span-4 row-span-2 flex-col items-start"}>
        <h2 className="  text-xl md:text-2xl text-left  capitalize">
          KROPZ 
          </h2>
          <img
            className="w-25 h-auto "
            src="https://sbwqft.org.za/wp-content/uploads/sites/9/2018/10/contributors-logos_0000_kropz.jpg"
            alt="CodeBucks"
            loading="lazy"
          />
          
         
        </ItemLayout>
        
      </div>
    </section>
  );
};

export default AboutDetails;
