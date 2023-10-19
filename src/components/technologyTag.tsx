import { technology } from '../utils/types';
interface Props {
    technology: technology
}

const TechTag = ({ technology }: Props) => {

    const style = {
        backgroundColor: technology.color
    }

    return (
        <div style={style} className='w-fit rounded-2xl bg-blue-400 p-1.5 flex justify-center items-center'>
            <p className=' text-white text-sm'>{technology.name}</p>
        </div>
    )

}

export default TechTag
