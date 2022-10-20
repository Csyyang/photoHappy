import less from ',/RHeader.module.less'
import { Image } from 'antd-mobile'
import returnIcon from 'imgs/return.png'

type Prop = {
    type: 'retrun' | 'search'
}

const RHeader: React.FC<Prop> = (props) => (
    <div >
        {props.type === 'retrun' ? <ReturnHeader /> : ''}
    </div>
)

const ReturnHeader: React.FC = () => (
    <div className={less.retrurn_header}>
        <Image src={returnIcon} width={24}></Image>
    </div>
)

export default RHeader