import React from "react";
import Table from "react-bootstrap/Table";
import RenderTimesTable from "./RenderTimesTable";

export default function RaceTimesTable(props) {
  const averageTime =
    props.lapTimes.reduce((acc, item) => acc + item) / props.lapTimes.length;

  return (
    <div>
      <Table striped bordered hover id="pdf-export">
        <thead>
          <tr>
            <th>#</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          <RenderTimesTable lapTimes={props.lapTimes} />
          <tr>
            <td>Average</td>
            <td>{averageTime.toFixed(1)}s</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
