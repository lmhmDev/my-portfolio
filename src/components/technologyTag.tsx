interface Props {
    technology: string
}

const TechTag = ({ technology }: Props) => {
    return (
        <li className='flex w-fit items-center justify-center rounded-2xl bg-blue-400 bg-opacity-25 p-1.5'>
            <p className='text-sm text-blue-400'>{technology}</p>
        </li>
    )
}

export default TechTag
