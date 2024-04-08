export const getEmployeeById = (id) => {
    return fetch(`http://localhost:8088/employees?userId=${id}&_expand=user&_embed=employeeTickets`).then(res => res.json())
}