export const deleteCustomerTicket = (id) => {
    return fetch(`http://localhost:8088/serviceTickets/${id}`, {
        method: "DELETE"
    })
}