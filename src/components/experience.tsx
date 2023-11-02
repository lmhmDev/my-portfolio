import { jobs } from "@/utils/jobs";
import JobCard from "./job-card";

export default function Experience() {
    return (
        <section className='min-h-screen w-full'>
            {/* <div className='flex items-center'>
                <div className='h-[1px] w-[100px] bg-white' />
                <p className='mx-2 text-xl'>Experience</p>
                <div className='h-[1px] flex-grow bg-white' />
            </div> */}
            <div className='flex flex-col justify-center items-start'>
                {
                    jobs.map(job => {
                        return <JobCard key={job.company} job={job} />
                    })
                }
            </div>
        </section>
    )
}
