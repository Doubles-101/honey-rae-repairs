import { Route, Outlet, Routes } from "react-router-dom"
import { NavBar } from "../components/nav/NavBar.jsx"
import { Welcome } from "../components/welcome/Welcome.jsx"
import { EmployeeDetails } from "../components/employees/EmployeeDetails.jsx"
import { EmployeeList } from "../components/employees/EmployeeList.jsx"
import { TicketList } from "../components/tickets/TicketList.jsx"
import { CustomerDetails } from "../components/customers/CustomerDetails.jsx"
import { CustomerList } from "../components/customers/CustomerList.jsx"
import { useEffect, useState } from "react"
import { EmployeeForm } from "../components/forms/EmployeeForm.jsx"

export const ApplicationViews = () => {
  const [currentUser, setCurrentUser] = useState({}) 


  useEffect(() => {
    const localHoneyuser = localStorage.getItem("honey_user")
    const honeyUserObj = JSON.parse(localHoneyuser)

    setCurrentUser(honeyUserObj)
  }, [])


  return <Routes>
        <Route path="/" element={
        <>
          <NavBar /> 
          <Outlet />
        </>}
      >
        <Route index element={<Welcome />} />
        <Route path="tickets" element={<TicketList currentUser={currentUser} />} />
        <Route path="employees">
          <Route index element={<EmployeeList />} />
          <Route path=":employeeId" element={<EmployeeDetails />} />
        </Route>
        <Route path="customers">
          <Route index element={<CustomerList />} />
          <Route path=":customerId" element={<CustomerDetails />} />
        </Route>
        <Route path="profile" element={<EmployeeForm currentUser={currentUser} />} />
      </Route>
  </Routes>
}
