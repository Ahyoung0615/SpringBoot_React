import React, { useEffect } from 'react';
import JobsService from '../service/JobsService';


const JobList = () => {

    const[jobs, setJobs] = React.useState([]);

    useEffect(() => {
        JobsService.getJobsList().then((res) => {
            setJobs(res.data);
        });
    }, []);
    return (
        <div>
            <h1>new Job</h1>
            <table>
                <tbody>
                    {
                        jobs.map(
                            job =>
                                <tr key={job.seq}>
                                    <td>{job.jobTitle}</td>
                                </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default JobList;