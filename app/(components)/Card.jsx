const Card = (props) => {
  return (
    <div className="w-64 h-[100%] bg-white shadow-sm rounded-[5px] p-12 space-y-3 relative overflow-hidden">
      <div className="w-24 h-24 bg-[#002364] rounded-full absolute -right-5 -top-7"></div>

      <h1 className="font-bold text-xl mt-[12%]">{props.title}</h1>
      <p className="text-sm text-zinc-500 leading-6">{props.content}</p>
      {props.delete && (
        <button className="inline-block px-3 py-1 text-sm  rounded-full font-medium text-red-600  bg-red-100 cursor-pointer ">
          Delete
        </button>
      )}
    </div>
  );
};

export default Card;
