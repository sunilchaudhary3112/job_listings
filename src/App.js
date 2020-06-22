import React, { useState, useEffect } from 'react';
import JobBoard from "./components/JobBoard";
import data from "./assets/data.json";

function App() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    setJobs(data);
  }, [])

  return (
    <div className="App">
      <h1>Hello World</h1>
      {
        jobs.length === 0 ? (
          <p> Loadings Jobs list</p>
        ) : (
            jobs.map(job => (
              <JobBoard job={job} key={job.id}/>
            ))
          )
      }
      <JobBoard />
    </div>
  );
}

export default App;
