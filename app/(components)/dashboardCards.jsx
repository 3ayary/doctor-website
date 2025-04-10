const DashboardCards = (props) => {
  return (
    <div className="w-64 h-[100%] bg-white shadow-xl rounded-[5px] p-10 space-y-3 ">
      <h1 className="font-bold text-xl">{props.title}</h1>
      <p className="text-sm text-zinc-500 leading-6">{props.content}</p>
      <h2 className="text-zinc-500 font-bold text-3xl">{props.time}</h2>
      <h2 className="text-zinc-500 font-bold text-l">{props.subContent}</h2>
    </div>
  );
};

export default DashboardCards;
