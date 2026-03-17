import RightCardContent from './RightCardContent'

const RightCard = (props) => {
  return (
     <div className='h-full shrink-0 w-64 sm:w-72 md:w-80 rounded-3xl relative overflow-hidden'>
      <img className='h-full w-full object-cover' src={props.img} alt='img'/>
        <RightCardContent  id={props.id} intro={props.intro} tag={props.tag} color={props.color}/>
      </div>
   
  )
}

export default RightCard
