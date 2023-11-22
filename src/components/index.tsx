import styled from 'styled-components'
import { ContentHeader } from './Headers/ContentHeader/ContentHeader'
import { FromField } from './Fields/FromField/FromField'
import { ToField } from './Fields/ToField/ToField'
import { SwapButton } from './Buttons/SwapButton/SwapButton'
import { TokenChange } from './Buttons/TokenChange/TokenChange'
import { InfoBlock } from './Info/InfoBlock'

const MainContainer = styled.div `
    max-width: 400px;
    max-height:100%;
    background-color: #232323;
    margin-top:150px;
    margin-bottom: auto;
    border-radius:7px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    border: 2px solid black;
    @media (max-width: 500px){
        border: none;
        max-width:100%;
        height:100%;
        border-radius: 0px;
        margin-top:0px;
    }
`



const Container = () => {
    return(
        <MainContainer>
            <ContentHeader></ContentHeader>    
            <FromField></FromField>
            <TokenChange></TokenChange>
            <ToField></ToField>
            <InfoBlock></InfoBlock>
            <SwapButton></SwapButton>
        </MainContainer>
    )
}

export default Container;