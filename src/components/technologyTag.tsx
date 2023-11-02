interface Props {
    technology: string
}

const TechTag = ({ technology }: Props) => {
    return (
        <div className='w-fit bg-blue-400 bg-opacity-25 rounded-2xl p-1.5 flex justify-center items-center'>
            <p className='text-sm text-blue-400'>{technology}</p>
        </div>
    )

}

export default TechTag
