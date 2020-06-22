import React, { useState, useEffect } from 'react';
import data from "./assets/data.json";
import JobBoard from "./components/JobBoard";

function App() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => setJobs(data), []);

  return (
    <div className="App">
      <h1 className="text-4xl">Hello World</h1>
      {jobs.length === 0 ? (
        <p> Loadings Jobs list</p>
      ) : (
          jobs.map((job) => <JobBoard job={job} key={job.id} />)
        )}
    </div>
  );
}

export default App;
