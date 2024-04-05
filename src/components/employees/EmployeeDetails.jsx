import { useParams } from "react-router-dom"

export const EmployeeDetails = () => {
    

    const { employeeId } = useParams()

    return (
        {employeeId}
    )
}