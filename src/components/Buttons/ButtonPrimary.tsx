type Props = {
    btnText:string
}

function ButtonPrimary({btnText}:Props) {
  return (
    <div>
        <button className="w-20 h-7 text-sm font-semibold rounded-full bg-blue-500 text-white hover:bg-[#004f9a] duration">{btnText}</button>
    </div>
  )
}

export default ButtonPrimary