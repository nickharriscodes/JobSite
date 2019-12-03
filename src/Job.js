import React from 'react';
import './App.css';

export default function Jobs({job}) {
    return (
        <div className={'job'}>
            <p>{job.title}</p>
            <p>{job.company}</p>
        </div>
    )
}