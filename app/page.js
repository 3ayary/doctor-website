import Card from "./(components)/Card";
import Cover from "./(components)/Cover";

export default function Home() {
  return (
    <div className="flex flex-col ">
      <Cover />

      <div className="flex flex-wrap justify-around mx-[5%] mb-[5%]">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
