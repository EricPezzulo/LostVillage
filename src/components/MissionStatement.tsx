import { PT_Sans } from "next/font/google";

const MissionStatement = () => {
  return (
    <div className="min-h-full bg-[#fff5e3] sm:flex  sm:min-h-0 sm:items-center sm:justify-center">
      <div className="mx-8 max-w-2xl pb-10 ">
        <h4
          className={`${ptSans.variable} pb-3 pt-8 font-PT-sans text-3xl font-bold`}
        >
          More than a brand... a purpose.
        </h4>

        <p className={`${ptSans.variable} font-PT-sans`}>
          At LostVillage, we are passionate about empowering self-expression
          through our unique and high-quality fashion offerings. We believe that
          clothing is more than just a cover; it is a medium of artistic
          expression and personal storytelling. By blending contemporary trends
          with timeless elements, we aim to inspire individuals to embrace their
          distinct style and confidently showcase their true selves.
        </p>
        <br />
        <p className={`${ptSans.variable} font-PT-sans`}>
          We are committed to sustainability, recognizing our responsibility to
          minimize our environmental impact. Through conscious choices, we
          prioritize eco-friendly materials and ethical manufacturing practices.
          Our mission is to contribute to a better future for the fashion
          industry and our planet, while creating exceptional clothing that
          makes our customers feel confident and comfortable.
        </p>
        <br />
        <p className={`${ptSans.variable} font-PT-sans`}>
          LostVillage is a community that celebrates diversity and inclusivity.
          We embrace the richness of different backgrounds, perspectives, and
          experiences. Through our inclusive approach, we foster connections and
          create a sense of belonging. Join us on our journey of creativity,
          innovation, and individuality as we curate collections that invite
          everyone to embark on an inspiring and transformative fashion
          adventure.
        </p>
      </div>
    </div>
  );
};

export default MissionStatement;
const ptSans = PT_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-pt-sans",
});
