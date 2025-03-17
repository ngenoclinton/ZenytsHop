interface Props{
    title:string,description:string, paragraph:string, price:string, btnText:string, className:string
}

function BannerText({title,description, paragraph, price, btnText, className}:Props) {
  return (
    <>
      <div className={className}>
        <h1 className="font-bold text-2xl">{title}</h1>
        <ul className="flex gap-4 flex-col justify-between text-lg">
          <p>
            {description}
          </p>
          {price != "" ? <li className="bg-blue-500 text-xl py-2 px-3 text-center rounded-lg w-fit ">
            {" "}
            {price}
          </li>: ""}
          <li className="text-lg"> {paragraph}</li>
        </ul>
        <span className="text-xl">
          {" "}
          Fast & Free Shipping on all orders above $50.
        </span>
      </div>
      <button className="bg-white text-lg text-black font-semibold w-fit text-center absolute bottom-4 right-60 px-3 py-2 font-semibold border border-[1px] border-black cursor-pointer">
        {btnText}
      </button>
    </>
  );
}

export default BannerText;
