import React, { useState, useEffect } from 'react';
import data from "./assets/data.json";
import JobBoard from "./components/JobBoard";

function App() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => setJobs(data), []);

  return (
    <div className="App">
      <header className='bg-teal-500 mb-12'>
        <img src="/images/bg-header-desktop.svg" alt="bg-image"/>
      </header>
      {jobs.length === 0 ? (
        <p> Loadings Jobs list</p>
      ) : (
          jobs.map((job) => <JobBoard job={job} key={job.id} />)
        )}
    </div>
  );
}

export default App;
