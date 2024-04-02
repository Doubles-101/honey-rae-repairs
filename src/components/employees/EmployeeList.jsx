import { useEffect, useState } from "react"
import { getStaffUsers } from "../../services/userService.jsx"
import "./Employee.css"
import { User } from "../../users/User.jsx"

export const EmployeeList = () => {
    const [employee, setEmployee] = useState([])

    useEffect(() => {
        getStaffUsers().then((staffArray) => {
            setEmployee(staffArray)
        })
    }, [])

    return (
        <div className="employees">
            <h2>Employee List</h2>
            {employee.map((employeeObj) => {
                return (
                    <User user={employeeObj} key={employeeObj.id}/>
                )
            })}
        </div>
    )
}