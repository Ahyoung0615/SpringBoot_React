import React, { useEffect } from 'react';
import JobsService from '../service/JobsService';


const JobsListComponent = () => {

    const[jobs, setJobs] = React.useState([]);

    useEffect(() => {
        JobsService.getJobsList().then((res) => {
            setJobs(res.data);
        });
    }, []);
    return (
        <div>
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

export default JobsListComponent;