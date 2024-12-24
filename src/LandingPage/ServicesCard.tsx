

function ServiceCard(props:any) {
  return (
    <div className="bg-[url('/HeroSection.png')] h-[200px] bg-cover text-center font-bold text-3xl text-white pt-[120px] rounded-xl">
      {props.text}
    </div>
  );
}
export default ServiceCard;