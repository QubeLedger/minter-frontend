import React from 'react';
import { DialogContent, DialogOverlay } from '@reach/dialog';
import styled from 'styled-components';
import { animated } from '@react-spring/web';
import { TokensCollateral, TokensQAsset } from '../../Tokens/Tokens';
import loop from '../../../assets/svg/loop.svg'
import arrow from '../../../assets/svg/InfoArrrowDown.svg'
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

const CloseButton = styled.button`
    width: 25px;
    height: 25px;
    font-size: 30px;
    margin-right: 26px;
    margin-top: -10px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: white;
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
`

const CloseDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    font-family: 'Metropolis', sans-serif;
    color: white;
`

const SearchToken = styled.input`
    width: 300px;
    height: 30px;
    background-color: #323232;
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

const SearchDiv = styled.div`
    height: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: #323232;
    border-radius: 5px;
    margin-left: 26px;
    margin-right: 26px;
    margin-bottom: 10px;
    border: 2px solid black;
`

const ModalText = styled.h4`
    margin-left: 26px;
    font-size: 20px;
`

const PopupImg = styled.img`
    width: 25px;
    height: 25px;
    background-color: transparent;
`
const PopupTextH3 = styled.h3 <{containerTextColor: string}>`
    color: ${props => props.containerTextColor};
    font-size: 16px;
    margin-left: 10px;
    background-color: transparent;
    text-align: left;
`

const ModalArrowImg = styled.img `
    margin-top:-5px;
    cursor: pointer;
    margin-left: 5px;
`


const ModalDialogContent = animated(DialogContent);
const StyledDialogContent = styled(ModalDialogContent) `
    &[data-reach-dialog-content] {
        background-color: rgb(35,35,35);
        width: 370px;
        height: 600px;
        display: flex;
        flex-direction: column;
        padding-bottom: 20px;
        border-radius: 10px;
        border: 2px solid black;
        margin-top: 70px;
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
        TokenOpenButton = <OpenButton onClick={open}>
            <PopupTextH3 containerTextColor={theme.containerTextColor}>{tokenFrom.base}</PopupTextH3>
            <ModalArrowImg src={arrow}></ModalArrowImg>
        </OpenButton>
    } else {
        TokenOpenButton = <OpenButton onClick={open}>
            <PopupImg src={tokenFrom.logo}></PopupImg>
            <PopupTextH3 containerTextColor={theme.containerTextColor}>{tokenFrom.base}</PopupTextH3>
            <ModalArrowImg src={arrow}></ModalArrowImg>
        </OpenButton>
    }

    return (
      <div>
        {TokenOpenButton}
        <StyledDialogOvelay isOpen={showModalFrom.b} onDismiss={close}>
            <StyledDialogContent>
                <CloseDiv>
                    <ModalText >Select a token</ModalText>
                    <CloseButton onClick={close}>
                    <span aria-hidden>×</span>
                    </CloseButton>
                </CloseDiv>
                <SearchDiv>
                    <LoopImg src={loop}></LoopImg>
                    <SearchToken placeholder='Search'></SearchToken>
                </SearchDiv>
                {TokenModal}
            </StyledDialogContent>
        </StyledDialogOvelay>
      </div>
    );
  }