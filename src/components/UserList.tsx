import React, { useState, useEffect } from "react";
import axios from "axios";
import { AcivityModal, Loader, UserTable } from "./";
import { ActivityPeriods, User } from "../constants";

const UserList = (): JSX.Element => {
  const [users, setUsers] = useState<User[]>([]);
  const [activityPeriods, setActivityPeriods] = useState<ActivityPeriods[]>([]);
  const [show, setShow] = useState<boolean>(false);
  useEffect(() => {
    (async () => {
      const response = await axios.get(
        "https://raw.githubusercontent.com/mahendra0859/react-demo-app/master/src/db/new_users.json"
      );
      setUsers(response.data);
    })();
  }, []);
  const handleClose = (): void => setShow(false);
  const handleShow = (activities: ActivityPeriods[]): void => {
    setShow(true);
    setActivityPeriods(activities);
  };
  return (
    <>
      {users.length ? (
        <>
          <UserTable users={users} handleShow={handleShow} />
          {activityPeriods.length ? (
            <AcivityModal
              show={show}
              handleClose={handleClose}
              activityPeriods={activityPeriods}
            />
          ) : null}
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default UserList;
