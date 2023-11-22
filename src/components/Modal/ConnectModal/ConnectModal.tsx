import React from 'react';
import { DialogContent, DialogOverlay } from '@reach/dialog';
import styled from 'styled-components';
import { animated } from '@react-spring/web';
import { Tokens } from '../../Tokens/Tokens';
import loop from '../../../assets/svg/loop.svg'
import { ConnectWallets } from '../../Wallets/ConnetsWallets/ConnestWallets';

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
    width: 20px;
    font-size: 35px;
    margin-top: 10px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: white;
    margin-left: 90%;
    outline: none;
    
`

const OpenButton = styled.button`
    width:100%;
    height:30px;
    background:transparent;
    border:none;
    outline: none;
    cursor: pointer;
    outline: none;
    font-family: 'Metropolis', sans-serif;
    font-size: 18px;
    font-weight: 500;
    padding-top: 9px;
`

const CloseDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    font-family: 'Metropolis', sans-serif;
    color: white;
`

const ContentDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 100%;
`

const WalletList = styled.div`
    width: 100%;
    height: 100%;
`

const ModalText = styled.h4`
    margin-left: 26px;
    font-size: 20px;
`

const WalletsTextH3 = styled.h3`
    margin-top: 15px;
    color: white;
`



const ModalDialogContent = animated(DialogContent);
const StyledDialogContent = styled(ModalDialogContent) `
    &[data-reach-dialog-content] {
        background-color: rgb(35,35,35);
        width: 535px;
        height: 350px;
        display: flex;
        flex-direction: column;
        border-radius: 20px;
        border: 2px solid black;
        margin-top: -10px;
        position: relative;
        outline: none;
    }
`


export const ConnectExample = () => {
    const [showDialog, setShowDialog] = React.useState(false);
    const open = () => setShowDialog(true);
    const close = () => setShowDialog(false);
  
    return (
      <div>
        <OpenButton onClick={open}>Connect</OpenButton>
        <StyledDialogOvelay isOpen={showDialog} onDismiss={close}>
            <StyledDialogContent>
                <CloseDiv>              
                    <CloseButton onClick={close}>
                    <span aria-hidden>×</span>
                    </CloseButton>
                </CloseDiv>
                <ContentDiv>
                    <WalletList>
                        <ConnectWallets></ConnectWallets>
                    </WalletList>
                </ContentDiv>
            </StyledDialogContent>
        </StyledDialogOvelay>
      </div>
    );
  }