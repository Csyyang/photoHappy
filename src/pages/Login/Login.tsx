
import React, { ReactElement, useState } from 'react'
import ReturnHeader from 'components/RHeader/RHeader'
import less from './Login.module.less'
import { Image, Button } from 'antd-mobile'
import phone from 'imgs/phone.png'
import password from 'imgs/password.png'
import { useNavigate } from "react-router-dom"

const Login: React.FC = () => {
    const [address, setAddress] = useState('')
    const [code, setCode] = useState('')
    const navigate = useNavigate()

    return (
        <div className={less.login}>
            <ReturnHeader type={"return"} />

            <div className={less.title}>欢迎来到photoHappy</div>

            <div className={less.input_box} >
                <Input placeholder='请输入邮箱号码' value={address} onChange={(val) => setAddress(val)} icon={phone} />
                <Input type='password' placeholder='请输入验证码' value={code} onChange={(val) => setCode(val)} icon={password}>
                    <Button color='primary' fill='solid' shape='rounded'>
                        获取验证
                    </Button>
                </Input>
            </div>

            <p className={less.tips}>未注册的手机号验证后自动创建摄图账号</p>

            <div className={less.button_box}>
                <Button color='primary' fill='solid' shape='rounded' size='large' block onClick={() => { navigate('/index') }}>登录</Button>
            </div>
        </div>
    )
}

type input = {
    children?: ReactElement,
    placeholder: string,
    value: string,
    type?: React.HTMLInputTypeAttribute | undefined,
    icon?: string,
    onChange: (val: React.SetStateAction<string>) => void
}

const Input: React.FC<input> = (prop) => {

    return (
        <div className={less.input_flex}>
            <Image src={prop.icon} width={22} />
            <span className={less.fenge}>|</span>
            <input
                placeholder={prop.placeholder}
                value={prop.value}
                type={prop.type}
                onChange={val => {
                    prop.onChange(val.target.value)
                }}
            />
            {prop.children}
        </div>
    )
}



export default Login