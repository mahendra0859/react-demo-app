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
        <th scope="col" className="text-primary">
          #
        </th>
        <th scope="col" className="text-primary">
          Name
        </th>
        <th scope="col" className="text-primary">
          Time Zone
        </th>
      </tr>
    </thead>
    <tbody>
      {users.map((user: User) => (
        <tr
          key={`${user.id}`}
          className="cursor-pointer"
          onClick={() => handleShow(user.activity_periods)}
        >
          <th scope="row" className="text-info">
            {user.id}
          </th>
          <td>{user.real_name}</td>
          <td>{user.tz}</td>
        </tr>
      ))}
    </tbody>
  </Table>
);

export default UserTable;
