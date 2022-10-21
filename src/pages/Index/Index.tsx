import less from './Index.module.less'
import RHeader from '@/components/RHeader/RHeader'
import { Image } from 'antd-mobile'

import test1 from 'imgs/test1.jpeg'
import test2 from 'imgs/tes2.jpeg'
import test3 from 'imgs/test3.jpeg'

const demoSrc =
    'https://images.unsplash.com/photo-1567945716310-4745a6b7844b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=60'
const demoSrc2 =
    'https://images.unsplash.com/photo-1620476214170-1d8080f65cdb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3150&q=80'

const Index: React.FC = () => {
    return (
        <div className={less.index}>
            <RHeader type='search' />

            <div className={less.main}>

                <div className={less.img_box}>
                    <Image className={less.img} src={demoSrc} width={162} fit="fill"></Image>
                    23
                </div>
                <div className={less.img_box}>
                    <Image src={demoSrc2} width={162} fit="fill"></Image>
                    233
                </div>
                <div className={less.img_box}>
                    <Image src={test1} width={162} fit="fill"></Image>
                    233
                </div>
                <div className={less.img_box}>
                    <Image src={test2} width={162} fit="fill"></Image>
                    233
                </div>
                <div className={less.img_box}>
                    <Image src={test3} width={162} fit="fill"></Image>
                    233
                </div>       <div className={less.img_box}>
                    <Image className={less.img} src={demoSrc} width={162} fit="fill"></Image>
                    23
                </div>
                <div className={less.img_box}>
                    <Image src={demoSrc2} width={162} fit="fill"></Image>
                    233
                </div>
                <div className={less.img_box}>
                    <Image src={test1} width={162} fit="fill"></Image>
                    233
                </div>
                <div className={less.img_box}>
                    <Image src={test2} width={162} fit="fill"></Image>
                    233
                </div>
                <div className={less.img_box}>
                    <Image src={test3} width={162} fit="fill"></Image>
                    233
                </div>
            </div>
        </div>
    )
}

export default Index