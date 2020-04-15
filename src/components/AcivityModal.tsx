import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import { format } from "date-fns";
import { ActivityPeriods } from "../constants";
import { CustomCalender } from "./";

interface AcivityModalProps {
  show: boolean;
  handleClose: () => void;
  activityPeriods: ActivityPeriods[];
}

const AcivityModal = ({
  show,
  handleClose,
  activityPeriods,
}: AcivityModalProps): JSX.Element => {
  const [calenderValue, setCalenderValue] = useState<Date>(new Date());
  const [timeRangeIndex, setTimeRangeIndex] = useState<number | null>(0);
  useEffect(() => {
    setCalenderValue(new Date(activityPeriods[0].start_time));
  }, [activityPeriods]);
  return (
    <Modal
      show={show}
      onHide={() => {
        handleClose();
        setTimeRangeIndex(0);
      }}
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>
          <span className="text-danger">User activity</span>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex flex-column align-items-center justify-content-center">
          {activityPeriods.length ? (
            <>
              <CustomCalender
                calenderValue={calenderValue}
                onCalenderValueChange={(value: any) => {
                  setCalenderValue(value);
                  activityPeriods.forEach(
                    (activity: ActivityPeriods, index: number) => {
                      if (
                        format(new Date(activity.start_time), "P") ===
                        format(new Date(value), "P")
                      ) {
                        setTimeRangeIndex(index);
                      } else setTimeRangeIndex(null);
                    }
                  );
                }}
              />
              <h4 className="my-3">Activity Dates</h4>
            </>
          ) : null}
          {activityPeriods.map((activity: ActivityPeriods, index: number) => (
            <div
              key={`activity-${index}`}
              className="my-2 cursor-pointer"
              onClick={() => {
                setCalenderValue(new Date(activity.start_time));
                setTimeRangeIndex(index);
              }}
            >
              <span>
                <b>{format(new Date(activity.start_time), "PPPP")} :- </b>
                {index === timeRangeIndex ? (
                  <span className="text-success">
                    {format(new Date(activity.start_time), "p")}{" "}
                    <b className="mx-2">-</b>
                    {format(new Date(activity.end_time), "p")}
                  </span>
                ) : (
                  <b className="text-warning">Click here!!!</b>
                )}
              </span>
              <br />
              <hr />
            </div>
          ))}
          {timeRangeIndex === null && (
            <div className="my-3">
              <h4 className="text-danger">No activity found on !!!</h4>
              <h5 className="text-muted">
                {format(new Date(calenderValue), "PPPP")}
              </h5>
            </div>
          )}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="primary"
          onClick={() => {
            handleClose();
            setTimeRangeIndex(0);
          }}
        >
          Ok
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default AcivityModal;
