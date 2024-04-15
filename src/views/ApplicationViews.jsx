import { useEffect, useState } from "react"
import { EmployeeViews } from "./EmployeeViews.jsx"
import { CustomerViews } from "./CustomerViews.jsx"

export const ApplicationViews = () => {
  const [currentUser, setCurrentUser] = useState({}) 


  useEffect(() => {
    const localHoneyuser = localStorage.getItem("honey_user")
    const honeyUserObj = JSON.parse(localHoneyuser)

    setCurrentUser(honeyUserObj)
  }, [])


  return currentUser.isStaff ? (
  <EmployeeViews currentUser={currentUser} />
  ) : (
  <CustomerViews currentUser={currentUser}/>
  )
}
