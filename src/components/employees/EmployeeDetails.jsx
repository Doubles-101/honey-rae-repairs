import "./Employee.css"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getEmployeeById } from "../../services/employeeDetailsService.jsx"

export const EmployeeDetails = () => {
    const [employee, setEmployee] = useState({})
    
    const { employeeId } = useParams()

    useEffect(() => {
        getEmployeeById(employeeId).then((data) => {
            const employeeObj = data[0]
            setEmployee(employeeObj)
        })
    }, [employeeId])

    const employeeTicketCounter = () => {
        return employee.employeeTickets?.length
    }


    return (
        <section className="employee">
        <header className="employee-header">{employee.user?.fullName}</header>
        <div>
            <span className="employee-info">Email :</span>
            {employee.user?.email}
        </div>
        <div>
            <span className="employee-info">Specialty :</span>
            {employee.specialty}
        </div>
        <div>
            <span className="employee-info">Rate : </span>
            ${employee.rate}
        </div>
        <div>
            Currently working on {employeeTicketCounter()} ticket(s)
        </div>
    </section>
    )
}