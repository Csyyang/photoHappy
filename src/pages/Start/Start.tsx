
import { Image, Space } from 'antd-mobile'
import photo from 'imgs/photo.png'
import JianTou from 'imgs/右箭头.png'
import Start from './Start.module.less'

function Index() {

    return (
        <div className={Start.bg}>
            <div className={Start.show_box}>
                <Image src={photo} width={60} height={60} />
                <p className={`${Start.text} ft15`}>打开生活，发现美好</p>
                <div className={`${Start.sphere} all_center`}>
                    <Image src={JianTou} width={24} />
                </div>
            </div>
        </div>
    )
}

export default Index