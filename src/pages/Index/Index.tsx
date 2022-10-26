import less from './Index.module.less'
import RHeader from '@/components/RHeader/RHeader'
import { Image } from 'antd-mobile'
import RFooter from 'components/RFooter/RFooter'

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

            <Waterfall breakpointCols={2} className={less.my_masonry_grid + ' my_masonry_grid'} imgs={data} />

            <RFooter />
        </div>
    )
}

export default Index