import less from './RHeader.module.less'
import { Image } from 'antd-mobile'
import returnIcon from 'imgs/return.png'
import { useNavigate } from "react-router-dom"
import phone from 'imgs/phone.png'
import search from 'imgs/search.png'



type Prop = {
    type: 'return' | 'search'
}

const RHeader: React.FC<Prop> = (props) => (

    <div >
        {props.type === 'return' ? <ReturnHeader /> : <SearchHeader />}
    </div>
)

const ReturnHeader: React.FC = () => {
    const navigate = useNavigate()

    return (
        <>
            <div className={less.retrurn_header}>
                <Image src={returnIcon} width={24} onClick={() => { navigate(-1) }}></Image>
            </div>
            {/**用于占位 */}
            <div className={less.retrurn_height}></div>
        </>
    )
}

const SearchHeader: React.FC = () => {

    return (
        <>
            <div className={less.search_header}>
                <div className={less.search_box}>
                    <Image src={search} width={20} fit='contain'></Image>

                    <input type="text" placeholder='搜索热门壁纸' />
                </div>
                <Image src={phone} width={24} fit='contain'></Image>

            </div>
            <div className={less.search_height}></div>
        </>
    )
}



export default RHeader