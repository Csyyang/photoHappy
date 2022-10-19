import { Button } from 'antd-mobile'
// import './App.css'
import AppCss from './App.module.scss'

function App() {

  return (
    <div className={AppCss.app}>
      233
      <div className="go">
        <Button>323</Button>
      </div>
      <Button color='primary' fill='solid'>
        Solid
      </Button>
      <svg xmlns="http://www.w3.org/2000/svg" className="styles__StyledSVGIconPathComponent-sc-16fsqc8-0 fPsHiw svg-icon-path-icon fill" viewBox="0 0 32 32" width="24" height="24"><defs data-reactroot=""></defs><g><path d="M21.563 14.667l-7.152-7.152 1.885-1.885 10.371 10.371-10.371 10.371-1.885-1.885 7.152-7.152h-16.229v-2.667z"></path></g></svg>
    </div>
  )
}

export default App
