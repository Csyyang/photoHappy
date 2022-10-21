import less from './RHeader.module.less'
import { Image } from 'antd-mobile'
import returnIcon from 'imgs/return.png'
import { useNavigate } from "react-router-dom";


type Prop = {
    type: 'return' | 'search'
}

const RHeader: React.FC<Prop> = (props) => (

    <div >
        {props.type === 'return' ? <ReturnHeader /> : ''}
    </div>
)

const ReturnHeader: React.FC = () => {
    const navigate = useNavigate()

    return (
        <>
            <div className={less.retrurn_header}>
                <Image src={returnIcon} width={24} onClick={() => { navigate(-1) }}></Image>
            </div>
            <div className={less.retrurn_height}></div>
        </>
    )
}



export default RHeader