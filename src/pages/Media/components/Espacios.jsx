
function Espacios({image, textAlt, title, text}) {
  return (
    <div className="flex-1">
      <div className="flex flex-col items-center gap-6">
        <img src={image} alt={textAlt} width={104} height={104}/>
        <h4 className="text-2xl font-medium text-center text-grey-jokr">{title}</h4>
        <p className="text-center text-grey3-jokr">{text}</p>
      </div>
    </div>
  );
}

export default Espacios
