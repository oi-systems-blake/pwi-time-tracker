import "./AdminProject.style.css";
import {Airtable, Table} from "airtable";
import { useState, useEffect } from "react";
import Project from "./components/Project";
import {secure} from "../../Secret"

export function AdminProject() {
  let [projects, setProjects] = useState([]);
  var Airtable = require("airtable");
  var base = new Airtable({ apiKey: secure }).base(
    "appdxUzxbQJdbR8fz"
  );
  useEffect(() => {
console.log()
    base("Projects")
      .select({
        // Selecting the first 3 records in Brandon's Jobs:
        maxRecords: 30,
        view: "Blake's View",
      })
      .eachPage(
        function page(records, fetchNextPage) {
          // This function (`page`) will get called for each page of records.

            setProjects(records)
          console.log(records)
          // To fetch the next page of records, call `fetchNextPage`.
          // If there are more records, `page` will get called again.
          // If there are no more records, `done` will get called.
          fetchNextPage();
        },
        function done(err) {
          if (err) {
            console.error(err);
            return;
          }
        }
      );
  }, []);
  return (
    <>
      <div className="project-page">
        <div className="project-container">
          <div className="project-row header">
            <div className="project-row-project-name header">Project</div>
            <div className="project-row-right header">
              <div className="project-row-status header">Status</div>
              <div className="project-row-hours header">Hours</div>
            </div>
          </div>
            {projects.map(project => (
            <Project
            key={project.id}
            project={project}
            />
          ))}

          </div>



        </div>

    </>
  );
}
