import styled from 'styled-components'
import { PopupSelectToToken } from '../../Popup/PopupTo/PopupSelectToToken'
import { PopupToButton } from '../../Buttons/PopupButtons/PopupToButton/PopupToButton'
import { BalanceTo } from '../../Balance/BalanceTo'


const ConvertTo = styled.div `
    width:85%;
    height:80px;
    background-color: #1a1a1a;
    border: 3px solid #333333;
    border-radius: 10px;
    margin-left:auto;
    margin-right:auto;
    display: flex;
    justify-content:space-between;
    align-items: center;
`

const ToFieldOutputAmount = styled.div`
    width:65%;
    height:100%;
    background: transparent;
    color: rgb(220,220,220);
    text-align: right;
    font-size: 23px;
    padding-right: 15px;
    padding-top:50px;
    font-family: system-ui, -apple-system,
     BlinkMacSystemFont, 'Segoe UI', Roboto, 
     Oxygen, Ubuntu, Cantarell, 'Open Sans', 
     'Helvetica Neue', sans-serif;
`

const ToFieldText = styled.a`
   font-weight: 500;
   font-size: 20px;
   color: white;
   padding-left: 30px;
   position: absolute;
   margin-top: -125px;
   margin-left: -30px;
   font-family: 'Metropolis', sans-serif;
   font-size: 16px;
`


export const ToField = () => {
    return(
        <ConvertTo>
            <ToFieldText>To</ToFieldText>
            <BalanceTo></BalanceTo>
            <PopupSelectToToken></PopupSelectToToken>
            <ToFieldOutputAmount>
                0
            </ToFieldOutputAmount>
        </ConvertTo>
    )
}