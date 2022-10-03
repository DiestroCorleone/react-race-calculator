import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import RaceTimesTable from "./RaceTableComponents/RaceTimesTable";

const initialState = {
  laps: 0,
  lapTimes: [],
};

export default function NumberOfLapsForm(props) {
  const [numberOfLaps, setNumberOfLaps] = useState("");
  const [lapDetails, setLapDetails] = useState(initialState);

  const handleChange = (event) => {
    const value = event.target.value;
    setNumberOfLaps(value);
  };

  const handleSetLapDetails = () => {
    setLapDetails((prevLapDetails) => {
      return { ...prevLapDetails, laps: parseInt(numberOfLaps) };
    });
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter" && event.target.name === "numberOfLaps") {
      event.preventDefault();
      handleSetLapDetails();
      console.log(event.target.name);
    }
  };

  useEffect(() => {
    if (lapDetails.laps > 0 || lapDetails.laps !== 0) {
      for (let i = 0; i < lapDetails.laps; i++) {
        let lapDuration = prompt(`Duration of ${i + 1}° lap (in seconds):`);

        setLapDetails((prevLapDetails) => {
          return {
            ...prevLapDetails,
            lapTimes: [...prevLapDetails.lapTimes, parseInt(lapDuration)],
          };
        });
      }

      props.setShowPdfButton(true);
    }
    setNumberOfLaps("");
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lapDetails.laps]);

  return (
    <div>
      <Form className="p-4">
        <Row>
          <Col lg="9" sm="12">
            <Form.Group controlId="numberOfLaps">
              <Form.Label>Number of laps: *</Form.Label>
              <Form.Control
                type="number"
                name="numberOfLaps"
                placeholder="Number of laps in your race"
                value={numberOfLaps}
                onChange={handleChange}
                onKeyPress={handleKeyPress}
                required
              />
            </Form.Group>
          </Col>
          <Col
            lg="3"
            sm="12"
            className="d-flex flex-column justify-content-end"
          >
            <br />
            <Button onClick={() => handleSetLapDetails()}>
              Set number of laps
            </Button>
          </Col>
        </Row>
      </Form>
      <br />
      {lapDetails.lapTimes.length > 0 && (
        <>
          <RaceTimesTable lapTimes={lapDetails.lapTimes} />
          <Button
            className="btn-danger"
            onClick={() => {
              setLapDetails(initialState);
              props.setShowPdfButton(false);
            }}
          >
            Clear times
          </Button>
        </>
      )}
    </div>
  );
}
