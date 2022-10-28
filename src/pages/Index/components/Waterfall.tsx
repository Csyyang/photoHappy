import { useEffect, useState } from "react"
import { Image as AntImg } from 'antd-mobile'
import less from './Waterfall.module.less'
import download from 'imgs/download.png'

type defaultProps = {
    /**
     * 定义的列数,支持媒体查询
     */
    breakpointCols: number
    /** 父容器className  */
    className: string, // required, string 
    /** 每一列的className */
    columnClassName?: string, //  optional, string 
    /** 图片路径数组 */
    imgs: string[],
    [propName: string]: string | string[] | number | undefined
}

type arr = {
    height: number,
    src: string
}

const Waterfall: React.FC<defaultProps> = (props) => {
    const { breakpointCols, className, columnClassName, imgs, ...res } = props

    const [boxState, setBoxState] = useState<[string[], string[]]>([[], []])

    const height: [number, number] = [0, 0]
    const box: [string[], string[]] = [[], []]
    let arr: arr[] = []

    useEffect(() => {
        Promise.all(imgs.map(async (item, index) => { // 循环体用promise.all
            const test = await getHeight(item)
            arr[index] = test // 不能用push会乱序

        })).then(() => {
            arr.forEach(item => {
                const [left, right] = height
                if (left > right) {
                    box[1].push(item.src)
                    height[1] = Number((right + Number(item.height.toFixed(2))).toFixed(2)) + 54
                } else {
                    box[0].push(item.src)
                    height[0] = Number((left + Number(item.height.toFixed(2))).toFixed(2)) + 54
                }
            })

            setBoxState(box)
        })
    }, [imgs])

    // imgs.map(async item => {
    //     const test = await getHeight(item)
    //     console.log(test)
    //     arr.push(test)

    // })




    function getHeight(src: string) {
        return new Promise<arr>((resolve, reject) => {
            const img = new Image()
            img.src = src

            img.onload = () => {
                let width = (window.innerWidth - 50) / 2
                let height = width / img.width * img.height
                resolve({
                    height: height,
                    src: img.src
                })
            }
        })
    }




    return (
        <div className={className} {...res}>
            <div className={less.left}>
                {
                    boxState[0].map((item, index) => (
                        <div className={less.img_box} key={item + index}>
                            <AntImg className={less.img} src={item} fit="fill"></AntImg>
                            <p className={less.title}>233</p>
                            <div className={less.name_box}>
                                <span>Website Back..</span>
                                <div className={less.down}>
                                    <AntImg src={download} width={12} fit="fill"></AntImg>
                                    <span className={less.number}>23131</span>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className={less.right}>
                {
                    boxState[1].map((item, index) => (
                        <div className={less.img_box} key={item + index + 'right'}>
                            <AntImg className={less.img} src={item} fit="fill"></AntImg>
                            <p className={less.title}>233</p>
                            <div className={less.name_box}>
                                <span>Website Back..</span>
                                <div className={less.down}>
                                    <AntImg src={download} width={12} fit="fill"></AntImg>
                                    <span className={less.number}>23131</span>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )

}

export default Waterfall