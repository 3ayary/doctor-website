import Card from "../(components)/Card";
import Cover from "../(components)/Cover";
import ItemsCard from "../(components)/ItemsCard";
import data from "../Data/api.json";

export default function Home() {
  const apiData = data.homecontent;

  return (
    <>
      <div className="flex flex-col mb-10 ">
        <Cover />

        <ul className="flex flex-wrap justify-center gap-6">

          {apiData.map((data, index) => (
            
            <li key={index}>
              <Card title={data.title} content={data.content} />
            </li>

          ))}
        </ul>
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
