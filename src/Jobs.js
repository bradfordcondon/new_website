import React from "react";
//var _= require("lodash");
const Job = ({ employer, startDate, endDate, title }) => {
  return (
    <div className={"job-item"}>
      <h5>{title}</h5>
      <h5>{employer}</h5>
      {startDate && endDate && (
        <span>
          {startDate} - {endDate}
        </span>
      )}
    </div>
  );
};
const Jobs = ({ jobs }) => {
  let i = 0;
  return (
    <div id="jobs-table">
      {jobs.map((job) => {
        i++;
        return <Job key={`job-${i}`} {...job} />;
      })}
    </div>
  );
};

export default Jobs;
