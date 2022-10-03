import React from "react";
import { nanoid } from "nanoid";

export default function RenderTimesTable(props) {
  const renderTimesTable = props.lapTimes.map((lapTime, index) => {
    return (
      <tr key={nanoid()}>
        <td>{index + 1}° lap</td>
        <td>{lapTime}s</td>
      </tr>
    );
  });

  return <>{renderTimesTable}</>;
}
