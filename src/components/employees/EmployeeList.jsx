import { useEffect, useState } from "react"
import { getStaffUsers } from "../../services/userService.jsx"
import "./Employee.css"
import { User } from "../../users/User.jsx"
import { Link } from "react-router-dom"

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
                    <Link to={`/employees/${employeeObj.id}`}>
                        <User user={employeeObj} key={employeeObj.id}/>
                    </Link>
                )
            })}
        </div>
    )
}