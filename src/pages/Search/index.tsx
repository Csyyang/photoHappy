import less from './index.module.less'
import RHeader from '@/components/RHeader/RHeader'
import { Button } from 'antd-mobile'


const Search: React.FC = () => {
    return (
        <div className={less.search_page}>
            <RHeader type="search" />
            
            <SearchType name='最近搜索' items={['风景壁纸','手绘壁纸','风景壁纸','手绘壁纸','风景壁纸','手绘壁纸','风景壁纸','手绘壁纸',]} />

            <SearchType name='最近搜索' items={['风景壁纸','手绘壁纸']} />

        </div>
    )
}

type SearchTypes = {
    name: string,
    items: string[]
}
const SearchType: React.FC<SearchTypes> = (props) => {
    return (
        <div className={less.search_type}>
            <div className={less.type}>
                {props.name}
            </div>
            <div className={less.item_box}>
                {props.items.map((item,index) => <ItemButton text={item} key={item + index} />)}
            </div>
        </div>
    )
}

type ItemButtonProp = {
    text: string
}
const ItemButton: React.FC<ItemButtonProp> = (props) => {
    return (
        <Button className='button' color='primary' fill='outline'>
            {props.text}
        </Button>
    )
}

export default Search