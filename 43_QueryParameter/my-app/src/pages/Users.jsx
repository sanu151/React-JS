import { useEffect, useState } from "react";

import { employeeData } from "./data";
import { useSearchParams } from "react-router-dom";

const Users = () => {
  const [users] = useState(employeeData);
  const [filteredusers, setFilteredUsers] = useState(users);
  const [userData, setUserData] = useState("");
  const [searchParam, setSearchParam] = useSearchParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    const filtered = users.filter((user) => {
      const searchData = searchParam.get("search").toString().toLowerCase();
      return (
        user.id.toString().toLowerCase().includes(searchData) ||
        user.name.toString().toLowerCase().includes(searchData) ||
        user.department.toString().toLowerCase().includes(searchData) ||
        user.salary.toString().toLowerCase().includes(searchData)
      );
    });
    setFilteredUsers(filtered);
    setUserData("");
  };

  useEffect(() => {
    setSearchParam({ search: userData });
  }, [setSearchParam, userData]);

  return (
    <div>
      <h1>Employee Data</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={userData}
          onChange={(e) => setUserData(e.target.value)}
        />
        <button type="submit">Find Employee</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Department</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          {filteredusers.map((user) => {
            const { id, name, department, salary } = user;
            return (
              <tr key={id}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{department}</td>
                <td>{salary}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
