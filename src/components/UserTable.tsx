import React from "react";
import { Table } from "react-bootstrap";
import { User, ActivityPeriods } from "../constants";

interface UserTableProps {
  users: User[];
  handleShow: (activities: ActivityPeriods[]) => void;
}

const UserTable = ({ users, handleShow }: UserTableProps): JSX.Element => (
  <Table hover bordered striped>
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Name</th>
        <th scope="col">Time Zone</th>
      </tr>
    </thead>
    <tbody>
      {users.map((user: User) => (
        <tr
          key={`${user.id}`}
          className="cursor-pointer"
          onClick={() => handleShow(user.activity_periods)}
        >
          <th scope="row">{user.id}</th>
          <td>{user.real_name}</td>
          <td>{user.tz}</td>
        </tr>
      ))}
    </tbody>
  </Table>
);

export default UserTable;
