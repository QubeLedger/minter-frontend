import React from 'react';
import { DialogContent, DialogOverlay } from '@reach/dialog';
import styled from 'styled-components';
import { animated } from '@react-spring/web';
import { TokensCollateral, TokensQAsset } from '../../Tokens/Tokens';
import loop from '../../../assets/svg/loop.svg'
import ArrowSvg from '../../../assets/svg/InfoArrrowDown.svg'
import ArrowSvgBlack from '../../../assets/svg/InfoArrowDownBlack.svg'
import { useTokenFrom } from '../../../hooks/useTokenFrom';
import { useShowModalFrom } from '../../../hooks/useShowModal';
import { useToggleTheme } from '../../../hooks/useToggleTheme';
 

const ModalDialogOverlay = animated(DialogOverlay);
const StyledDialogOvelay = styled(ModalDialogOverlay) `
    &[data-reach-dialog-overlay] {
        z-index: 1;
        position: fixed; 
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
        overflow: auto;
        display:flex;
        align-items: center;
        justify-content: center; 
        transition: background-color 3s; 
        background-color: rgba(0,0,0,.45);
    }
`

const CloseButton = styled.button <{TextColor: string}>`
    width: 25px;
    height: 25px;
    font-size: 30px;
    margin-right: 26px;
    margin-top: -10px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: ${props => props.TextColor};
    margin-left: auto;
    outline: none;
`

const OpenButton = styled.button`
    width: 100%;
    height:30px;
    border:none;
    outline: none;
    cursor: pointer;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    text-align: left;
`

const CloseButtonBlock = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`

const ModalTextBlock = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
`

const CloseDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-family: 'Metropolis', sans-serif;
`

const SearchToken = styled.input `
    width: 300px;
    height: 30px;
    background-color: transparent;
    border: none;
    border-radius: 5px;
    margin-left: 5px;
    outline: none;
    font-size: 16px;
    color: #5e5e5e;
    font-weight: 600;
    font-family: 'Metropolis', sans-serif;
`

const LoopImg = styled.img`
    width: 25px;
    height: 25px;
    margin-left: 15px;
`

const SearchDiv = styled.div <{inputBgColor: string, Border: string}>`
    height: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: ${props => props.inputBgColor};
    border-radius: 5px;
    margin-left: 26px;
    margin-right: 26px;
    margin-bottom: 10px;
    border: ${props => props.Border};
    
`

const SearchBorder = styled.div <{Border: string}>`
    border-bottom: ${props => props.Border};
`

const ModalText = styled.h4 <{TextColor: string}>`
    white-space: nowrap;
    margin-left: 26px;
    font-size: 20px;
    color: ${props => props.TextColor};
`

const PopupImg = styled.img`
    width: 25px;
    height: 25px;
    background-color: transparent;
`
const PopupTextH3 = styled.h3 <{TextColor: string}>`
    color: ${props => props.TextColor};
    font-size: 16px;
    margin-left: 10px;
    background-color: transparent;
    text-align: left;
    white-space: nowrap;
`

const ModalArrowImg = styled.svg <{ArrrowColor: string}> `
    background: url(${props => props.ArrrowColor});
    width: 11px;
    height: 11px;
    margin-top:-5px;
    cursor: pointer;
    margin-left: 5px;
    background-repeat: no-repeat;
    background-size: contain;
`


const ModalDialogContent = animated(DialogContent);
const StyledDialogContent = styled(ModalDialogContent) <{modalBgColor: string, Border: string}> `
    &[data-reach-dialog-content] {
        background-color: ${props => props.modalBgColor};
        width: 370px;
        height: 600px;
        display: flex;
        flex-direction: column;
        padding-bottom: 20px;
        border-radius: 10px;
        border: ${props => props.Border};
        margin-top: 70px;
        @media (max-width: 500px) {
            width: 335px;
        }
        @media (max-width: 330px) {
            width: 305px;
        }
    }
`


export const TokenModalFrom = () => {
    const [ showModalFrom, setShowModalFrom ] = useShowModalFrom();
    const [showDialog, setShowDialog] = React.useState(false);
    const open = () => setShowModalFrom({b: true});
    const close = () => setShowModalFrom({b: false});
    const [tokenFrom, _] = useTokenFrom();
    const [theme, setTheme] = useToggleTheme()
    
    let TokenModal;

    switch (tokenFrom.type) {
        case "collateral":
            TokenModal = <TokensCollateral></TokensCollateral>;
            break;
        case "qasset":
            TokenModal = <TokensQAsset></TokensQAsset>;
            break;
    }

    let TokenOpenButton;
    if((tokenFrom.base == "Select token") && tokenFrom.logo == "") {
        TokenOpenButton = <OpenButton onClick={open} >
            <PopupTextH3 TextColor={theme.TextColor}>{tokenFrom.base}</PopupTextH3>
            <ModalArrowImg  ArrrowColor={theme.active == true ? ArrowSvgBlack : ArrowSvg}></ModalArrowImg>
        </OpenButton>
    } else {
        TokenOpenButton = <OpenButton onClick={open}>
            <PopupImg src={tokenFrom.logo}></PopupImg>
            <PopupTextH3 TextColor={theme.TextColor}>{tokenFrom.base}</PopupTextH3>
            <ModalArrowImg  ArrrowColor={theme.active == true ? ArrowSvgBlack : ArrowSvg}></ModalArrowImg>
        </OpenButton>
    }

    return (
      <div>
        {TokenOpenButton}
        <StyledDialogOvelay isOpen={showModalFrom.b} onDismiss={close}>
            <StyledDialogContent modalBgColor={theme.modalBgColor} Border={theme.Border}>
                <CloseDiv>
                    <ModalTextBlock>
                        <ModalText TextColor={theme.TextColor}>Select a token</ModalText>
                    </ModalTextBlock>
                    <CloseButtonBlock>
                        <CloseButton TextColor={theme.TextColor} onClick={close}>
                        <span aria-hidden>×</span>
                        </CloseButton>
                    </CloseButtonBlock>
                </CloseDiv>
                <SearchBorder Border={theme.Border}>
                    <SearchDiv inputBgColor={theme.inputBgColor} Border={theme.Border}>
                        <LoopImg src={loop}></LoopImg>
                        <SearchToken placeholder='Search'></SearchToken>
                    </SearchDiv>
                </SearchBorder>
                {TokenModal}
            </StyledDialogContent>
        </StyledDialogOvelay>
      </div>
    );
  }