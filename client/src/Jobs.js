import React from 'react';
import Typography from '@material-ui/core/Typography';
import Job from './Job';
import JobModal from './JobModal'
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

export default function Jobs({jobs}) {
	//modal
	const [open, setOpen] = React.useState(false);
	const [selectedJob, selectJob] = React.useState({})
	const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

	// pagination
	const numJobs = jobs.length
	const numPages = Math.ceil(numJobs / 50)
	const [activeStep, setActiveStep] = React.useState(0);
	const jobsOnPage = jobs.slice(activeStep * 50, (activeStep * 50) + 50)
	
	const handleNext = () => {
		setActiveStep(prevActiveStep => prevActiveStep + 1);
	};
	
	const handleBack = () => {
		setActiveStep(prevActiveStep => prevActiveStep - 1);
	};
	console.log('job is', jobs[0]);
	
	return (
		<div className='jobs'>
			<JobModal open={open} job={selectedJob} handleClose={handleClose} />
			<Typography variant="h4" component="h1">
				Early Stage Dev Jobs
			</Typography>
			<Typography variant="h6" component="h2">
				Found {numJobs} jobs
			</Typography>
			{
				jobsOnPage.map(
					job => <Job job={job} onClick={() => {
							selectJob(job)
							handleClickOpen()
						}
					}/>
				)
			}
			<div>
				Page {activeStep + 1} of {numPages}
			</div>
			<MobileStepper
				variant="progress"
				steps={numPages}
				position="static"
				activeStep={activeStep}
				nextButton={
					<Button size="small" onClick={handleNext} disabled={activeStep === 5}>
					Next
					<KeyboardArrowRight />
					</Button>
				}
				backButton={
					<Button size="small" onClick={handleBack} disabled={activeStep === 0}>
					<KeyboardArrowLeft />
					Back
					</Button>
				}
			/>
		</div>
	)
}