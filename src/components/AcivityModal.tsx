import React from "react";
import { Modal, Button } from "react-bootstrap";
import { ActivityPeriods } from "../constants";

interface AcivityModalProps {
  show: boolean;
  handleClose: () => void;
  activityPeriods: ActivityPeriods[];
}

const AcivityModal = ({
  show,
  handleClose,
  activityPeriods,
}: AcivityModalProps): JSX.Element => (
  <Modal show={show} onHide={handleClose} centered>
    <Modal.Header closeButton>
      <Modal.Title>User activity</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      {activityPeriods.map((activity: ActivityPeriods, index: number) => (
        <div key={`activity-${index}`}>
          <b>Start Time:</b>
          <span>{activity.start_time}</span>
          <br />
          <b>End Time:</b>
          <span>{activity.end_time}</span>
          <hr />
        </div>
      ))}
    </Modal.Body>
    <Modal.Footer>
      <Button variant="primary" onClick={handleClose}>
        Ok
      </Button>
    </Modal.Footer>
  </Modal>
);

export default AcivityModal;
