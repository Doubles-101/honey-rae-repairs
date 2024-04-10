import { useEffect } from "react"
import "./Form.css"
import { useState } from "react"
import { getEmployeeByUserId, updateEmployee } from "../../services/employeeService.jsx"
import { useNavigate } from "react-router-dom"

export const EmployeeForm = ({ currentUser }) => {

    const [employee, setEmployee] = useState({})

    const navigate = useNavigate()

    useEffect(() => {
        getEmployeeByUserId(currentUser.id).then(data => {
            const employeeObject = data[0]
            setEmployee(employeeObject)
        })
    }, [currentUser])

    const handleSave = (event) => {
        event.preventDefault()
        console.log("clicked")

        const editedEmployee = {
            id: employee.id,
            specialty: employee.specialty,
            rate: employee.rate,
            userId: employee.userId
        }

        updateEmployee(editedEmployee).then(() => {
            navigate(`/employees/${currentUser.id}`)
        })
    }

    const handleInputChange = (event) => {
        const stateCopy = { ...employee }
        stateCopy[event.target.name] = event.target.value
        setEmployee(stateCopy)
      }

    return (
        <form className="profile">
            <h2>Update Profile</h2>
            <fieldset>
                <div className="form-group">
                    <label>Specialty:</label>
                    <input 
                        type="text"
                        name="specialty"
                        required
                        className="form-control"
                        value={employee?.specialty}
                        onChange={handleInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label>Hourly Rate:</label>
                    <input 
                        type="number"
                        name="rate"
                        required
                        className="form-control"
                        value={employee?.rate}
                        onChange={handleInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <button 
                        className="form-btn btn-primary"
                        onClick={handleSave}
                        >
                            Save Profile
                    </button>
                </div>
            </fieldset>
        </form>
    )
}