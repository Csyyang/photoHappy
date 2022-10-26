import less from './RFooter.module.less'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@/redux/main'
import { changeChoose } from '@/redux/footerSlice'
import { Image } from 'antd-mobile'
import { camera, camera_chosed, find_chosed, find, me, me_chosed, msg_chosed, message } from 'imgs/index.js'


const RFooter: React.FC = () => {
    const chooseFooter = useSelector((state: RootState) => state.footerChoose.chose)
    const dispatch = useDispatch()

    return (
        <div className={less.footer}>
            <div onClick={() => dispatch(changeChoose('index'))}>
                {chooseFooter === 'index' ? (<Image src={camera_chosed} width={24} />) : (<Image src={camera} width={24} />)}
            </div>
            <div onClick={() => dispatch(changeChoose('find'))}>
                {chooseFooter === 'find' ? (<Image src={find_chosed} width={24} />) : (<Image src={find} width={24} />)}
            </div>

            <div onClick={() => dispatch(changeChoose('message'))}>
                {chooseFooter === 'message' ? (<Image src={msg_chosed} width={24} />) : (<Image src={message} width={24} />)}
            </div>

            <div onClick={() => dispatch(changeChoose('me'))}>
                {chooseFooter === 'me' ? (<Image src={me_chosed} width={24} />) : (<Image src={me} width={24} />)}
            </div>

        </div>
    )
}

export default RFooter