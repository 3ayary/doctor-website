import Card from "../(components)/Card";
import Cover from "../(components)/Cover";
import Navbar from "../(components)/Navbar";
import Footer from "../(components)/Footer";
import ItemsCard from "../(components)/ItemsCard";
export default function Home() {
  return (
    <>
      <div className="flex flex-col ">
        <Cover />

        <div className="flex flex-wrap justify-around mx-[5%] mb-[5%]">
          <Card
            title="Personal Services"
            content="At Ens HC, we follow a patient centric approach, with electronic medical records that doctors collaborate on"
          />
          <Card
            title="Convenient services"
            content="Our branches are open 12 hours/day, 7 days/week throughout the whole year. Through our scheduling system, waiting time is kept at a minimum."
          />
          <Card
            title="Affordable Services"
            content="Our healthcare and payment plans allows coverage for your treatment. At Dawi we focus on preventative care, and ensure that no unnecessary medical procedures are requested."
          />
          <Card
            title="Consistent Services"
            content="Our standardized processes are followed in all our branches, and our team of physicians works together through our Medical Advisory Board guidelines."
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center content-center w-[100%]">
        <h1 className="flex   m-5  text-3xl self-center text-gray-700 font-bold">
          All Specializations You May Need
        </h1>

        <div className="flex mx-[5%] mb-[5%] justify-around flex-wrap w-[100%]">
          <ItemsCard link="/dental" title="dental" />
          <ItemsCard link="/Pediatrics" title="Pediatrics" />
          <ItemsCard link="/Physical Therapy" title="Physical Therapy" />
        </div>
      </div>
    </>
  );
}
