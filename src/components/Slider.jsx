import React, { Component } from 'react'
import { A, Div, DivA, DivImg, Img } from '../styles/Slyder'

export default class Slider extends Component {
    render() {
        return (
            <Div>
                <DivImg>
                    <Img id="item1" src="https://i.ibb.co/6ZK2S4b/mulan.png" alt="" width="80%" />
                    <Img id="item2" src="https://i.ibb.co/vxq1V1N/raya-1.png" alt="" width="80%" />
                    <Img id="item3" src="https://i.ibb.co/2sR95Ns/unidos-1.png" alt="" width="80%" />
                    <div></div>
                </DivImg>
                <DivA>
                    <A href="#item1"></A>
                    <A href="#item2"></A>
                    <A href="#item3"></A>
                </DivA>
            </Div>
        )
    }
}
