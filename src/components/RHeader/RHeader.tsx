import less from './RHeader.module.less'
import { Image } from 'antd-mobile'
import returnIcon from 'imgs/return.png'
import { useLocation, useNavigate } from "react-router-dom"
import phone from 'imgs/phone.png'
import search from 'imgs/search.png'
// import { useMemo } from 'react'



type Prop = {
    type: 'return' | 'search'
}

const RHeader: React.FC<Prop> = (props) => {

    // const fc = useMemo(() => props.type === 'return' ? <ReturnHeader /> : <SearchHeader />, [props.type])
    return (
        <div>
            {props.type === 'return' ? <ReturnHeader /> : <SearchHeader />}
        </div>

    )
}

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
    const navigate = useNavigate()
    const location = useLocation()

    const pathName = location.pathname

    function navto() {
        if (pathName === '/search') return
        navigate('/search')
    }

    return (
        <>
            <div className={less.search_header}>
                <div className={less.search_box}>
                    <Image src={search} width={20} fit='contain'></Image>
                    <input type="text" placeholder='搜索热门壁纸' onFocus={() => navto()} />
                    {pathName === '/search' ? <span className={less.cancle} onClick={() => { navigate(-1) }}>取消</span> : ''}
                </div>
                <Image src={phone} width={24} fit='contain'></Image>

            </div>
            {/**用于占位 */}
            <div className={less.search_height}></div>
        </>
    )
}



export default RHeader