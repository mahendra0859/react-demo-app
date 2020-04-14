import React, { useState, useEffect } from "react";
import { Table, Modal, Button } from "react-bootstrap";
import axios from "axios";

interface ActivityPeriods {
  start_time: string;
  end_time: string;
}
interface User {
  id: number;
  real_name: string;
  tz: string;
  activity_periods: ActivityPeriods[];
}

const UserList = (): JSX.Element => {
  const [users, setUsers] = useState<User[]>([]);
  const [show, setShow] = useState<boolean>(false);
  useEffect(() => {
    (async () => {
      const response = await axios.get(
        "https://raw.githubusercontent.com/mahendra0859/react-demo-app/master/src/db/users.json"
      );
      setUsers(response.data);
    })();
  }, []);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      {users.length ? (
        <>
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
                  onClick={handleShow}
                >
                  <th scope="row">{user.id}</th>
                  <td>{user.real_name}</td>
                  <td>{user.tz}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Woohoo, you're reading this text in a modal!
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={handleClose}>
                Ok
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      ) : (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )}
    </>
  );
};

export default UserList;
