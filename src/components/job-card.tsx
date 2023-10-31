import { job } from "@/utils/types"

interface Props {
    job: job
}

const JobCard = ({ job }: Props) => {
    return (
        <div className='border border-white rounded-sm'>
            {job.position}
            {job.company}
            {job.tasks}
            {job.date}
        </div>
    )
}

export default JobCard
