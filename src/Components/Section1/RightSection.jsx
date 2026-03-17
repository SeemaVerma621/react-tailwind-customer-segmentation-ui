import RightCard from "./RightCard"
const RightSection = (props) => {
  return (
   <div className='w-full md:w-3/4 h-full p-3 sm:p-5 flex gap-3 overflow-x-auto flex-nowrap scroll-smooth'>
  {props.UserData.map((elem, idx)=>{
    return <RightCard key={idx} id={idx} tag={elem.tag} img={elem.img} intro={elem.intro} color={elem.color} />
  })}
   </div>
  )
}

export default RightSection
