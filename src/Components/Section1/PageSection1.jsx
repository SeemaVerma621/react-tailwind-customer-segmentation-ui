import LeftSection from "./LeftSection"
import RightSection from "./RightSection"

const PageSection1 = (props) => {
  console.log(props.UserData)
  return (
    <div className="py-5 px-5 sm:px-10 min-h-[80vh] flex flex-col md:flex-row gap-5 md:gap-10 items-center">
        <LeftSection/>
        <RightSection UserData={props.UserData}/>
    </div>
  )
}

export default PageSection1

