import { Link } from "react-router-dom"
import WorkSection from "../components/WorkSection"
import PageHeader from "./aboutpages/components/PageHeader"

const Portfolio = () => {
  return (
    <> 
  <PageHeader title="   Our Services"/>
      
 <WorkSection
  repeatTimes={2}
  btnText="Have you any project..?"
  btnClass="btn-success text-white"
   
/>
    

      </>
    

  )
}

export default Portfolio
