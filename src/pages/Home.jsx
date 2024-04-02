import { useState } from "react"
import AppointmentList from "../components/AppointmentList"
import Doctors from "../components/Doctors"
import { appointmentData } from "../helpers/data"

const Home = () => {

  const[appoinments, setAppointments] = useState(appointmentData)
  console.log(appoinments)
  return (
    <main className="text-center mt-2">
      <h1 className="display-5 text-danger">MY HOSPITAL</h1>
      <Doctors setApps={setAppointments} apps={appoinments}/>
      <AppointmentList apps={appoinments} setApps={setAppointments} />
    </main>
  )
}

export default Home