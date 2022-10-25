import React from "react";
function Courses(props) {
  const rows = [];
  for (let i = 0; i < props.enrolled.length; i++) {
    rows.push(
      <p>
        <b>Course {props.enrolled[i]}</b>
      </p>
    );
  }
  return (
    <>
      <p>Student is enrolled in {rows}</p>
    </>
  );
}
export default Courses;