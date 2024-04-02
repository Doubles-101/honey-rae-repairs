import { useEffect, useState } from "react"
import { getNonStaffUsers } from "../../services/userService.jsx"
import { User } from "../../users/User.jsx"
import "./Customer.css"

export const CustomerList = () => {
    const [customers, setCustomers] = useState([])

    useEffect(() => {
        getNonStaffUsers().then(customerArray => {
            setCustomers(customerArray)
        })
    }, [])

    return (
        <div className="customers" key={1}>
            <h2>Customer List</h2>
            {customers.map((customerObj) => {
                return (
                <User user={customerObj} key={customerObj.id}/>
                )
            })}
        </div>
    )
}