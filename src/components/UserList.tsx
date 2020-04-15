import React, { useState, useEffect } from "react";
import axios from "axios";
import { AcivityModal, Loader, UserTable, Pagination } from "./";
import { ActivityPeriods, User } from "../constants";

const UserList = (): JSX.Element => {
  const [users, setUsers] = useState<User[]>([]);
  const [activityPeriods, setActivityPeriods] = useState<ActivityPeriods[]>([]);
  const [show, setShow] = useState<boolean>(false);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [pageSize] = useState<number>(10);
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
  const indexOfLastUser = pageNumber * pageSize,
    indexOfFirstUser = indexOfLastUser - pageSize,
    currentUsers = users.slice(indexOfFirstUser, indexOfLastUser),
    paginate = (pageNo: number) => setPageNumber(pageNo);
  return (
    <>
      {users.length ? (
        <>
          <UserTable users={currentUsers} handleShow={handleShow} />
          <div className="d-flex align-items-center justify-content-center">
            <Pagination
              pageNumber={pageNumber}
              usersPerPage={pageSize}
              totalUsers={users.length}
              paginate={paginate}
            />
          </div>
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
