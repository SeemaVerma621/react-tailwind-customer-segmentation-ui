import Section1 from './Components/Section1/Section1'

const App = () => {
  const user=[
    {
      img:"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=388&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro:"Creative designer focused on building clean and modern user experiences.",
      color:'blue',
      tag:"Design"
    },
     {
      img:"https://images.unsplash.com/photo-1600275669439-14e40452d20b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D",
      intro:"Frontend developer passionate about crafting responsive web interfaces.",
       color:'purple',
      tag:"Frontend"
    },
     {
      img:"https://plus.unsplash.com/premium_photo-1661630621969-6d9faac03f9f?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro:"React developer focused on scalable and reusable UI experiences.",
      color:'orange',
      tag:"React"
    },
      {
      img:"https://images.unsplash.com/photo-1765648580528-8d659861d81a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D",
      intro:"Problem solver with strong focus on performance and user experience.",
       color:"green",
      tag:"UI/UX"
    }
  ]
  return (
    <div>
     <Section1 UserData={user}/> 
    </div>
  )
}

export default App
