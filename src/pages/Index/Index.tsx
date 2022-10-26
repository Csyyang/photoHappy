import less from './Index.module.less'
import RHeader from '@/components/RHeader/RHeader'
import { Image } from 'antd-mobile'
import Masonry from 'react-masonry-css'
import test1 from 'imgs/test1.jpeg'
import test2 from 'imgs/tes2.jpeg'
import test3 from 'imgs/test3.jpeg'

import Waterfall from './components/Waterfall'
import { useState } from 'react'

const demoSrc =
    'https://images.unsplash.com/photo-1567945716310-4745a6b7844b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=60'
const demoSrc2 =
    'https://images.unsplash.com/photo-1620476214170-1d8080f65cdb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3150&q=80'

const Index: React.FC = () => {
    // const data = [test1, test2, test3, test2, demoSrc2, test2, test2, test2, demoSrc, test2]
    const [data, setData] = useState([test1, test2, test3, test2, test2, test2, test2, test2])

    return (
        <div className={less.index}>
            <RHeader type='search' />

            {/* <Masonry
                breakpointCols={2}
                className={less.my_masonry_grid}
                columnClassName={less.my_masonry_grid_column}>

                {
                    data.map((item, index) => (
                        <div className={less.img_box} key={item + index}>
                            <Image className={less.img} src={item} width={162} fit="fill"></Image>
                            <p className={less.title}>233</p>
                            <div className={less.name_box}>
                                <span>Website Back..</span>
                                <div className={less.down}>
                                    <Image src={download} width={12} fit="fill"></Image>
                                    <span className={less.number}>23131</span>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </Masonry> */}
            <Waterfall breakpointCols={2} className={less.my_masonry_grid} imgs={data} />
            <button onClick={() => {
                setData(data.concat(test1))
            }}>test</button>
        </div>
    )
}

export default Index