import Navbar from './Navbar'
import PageSection1 from './PageSection1'


const Section1 = (props) => {
  return (
    <div className='p-5 sm:p-10 md:p-15 min-h-screen w-full'>
      <Navbar/>
      <PageSection1 UserData={props.UserData}/>
    </div>
  )
}

export default Section1
