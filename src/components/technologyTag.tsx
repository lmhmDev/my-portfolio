import { technology } from '../utils/types';
interface Props {
    technology: technology
}

const TechTag = ({ technology }: Props) => {

    const style = {
        borderColor: technology.color,
        color: technology.color
    }

    return (
        <div style={style} className='w-fit border rounded-2xl p-1.5 flex justify-center items-center'>
            <p className='text-sm'>{technology.name}</p>
        </div>
    )

}

export default TechTag
