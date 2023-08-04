import React from "react";
import { Card } from "antd";
import step3 from "../../assets/step3.png";

const Progress3 = () => {
  const cardHeaderStyle = { height: "40px", paddingTop: "5px" };

  return (
    <div>
      <Card
        title={
          <h3 className="text-white text-2xl font-playfair">
            Step 3: Ideation
          </h3>
        }
        headStyle={cardHeaderStyle}
        className="bg-black bg-opacity-30 text-white md:h-[70vh] lg:h-[90vh] h-auto md:w-180 p-4 
        overflow-y-scroll scrollbar scrollbar-thumb-scroll  scrollbar-track-transparent scrollbar-track-rounded-lg scrollbar-thumb-rounded-xl scrollbar-w-4"
      >
        <div className="w-lg mx-auto mb-16">
          <img
            src={step3}
            alt="Step 3 Image"
            className="w-full h-[400px] rounded-md border-2"
          />
        </div>
        <div className="w-full bg-red p-5 relative border-2 ">
          <div className="w-48 h-10 -top-5 text-lg bg-blue border-2 absolute flex items-center justify-center font-playfair rounded-md">
            Description
          </div>
          <p className="mt-5 font-playfair text-base">
            Our group deliberated for a long time before deciding to include the three concerns of exhibiting art, telling community tales, and recording occurrences. She clearly has a great deal of passion for all three subjects, and it is this combination that gives the community its unique character. By contrast, current solutions, such as the outsourced website and mobile apps, are rigid and too disjointed, making them difficult to use or install. These difficulties inspired us to develop a practical solution that takes into account all of Jane's essential requirements.
          </p>
          <p className="mt-5 font-playfair text-base">
            The team suggests creating a comprehensive website with visually appealing galleries to display the artworks, an interactive platform for community members to share their recollections, and a full events archive to document The Annexe's event history. The group wants to draw young people and encourage community involvement by encouraging active participation and contributions. By implementing responsive design and interactive tablets/kiosks, they will tackle the issue of inclusivity and accessibility at The Annexe. The website will put an emphasis on visually appealing thematic galleries and community-driven content sharing.
          </p>
          <p className="mt-5 font-playfair text-base">
            To encourage community participation, we intend to implement a user-generated content option that would allow visitors to upload their own images, films, and stories about the murals they encounter. To ensure appropriateness, we'll implement a moderation system that will examine and approve user submissions.
          </p>
          <p className="mt-5 font-playfair text-base">
            To get this initiative started, we will first reach out to Jane for comment on our ideas. We'll create a web application prototype after we get her feedback. Parallel to that, we'll collect any content linked to the murals and art pieces, such as images, videos, descriptions, and other pertinent information. Our ultimate goal is to build an entertaining and accessible platform that showcases the wonderful work generated by the community while also strengthening users' sense of belonging and ownership.
          </p>
        </div>
      </Card>
    </div>
  );
};

export default Progress3;