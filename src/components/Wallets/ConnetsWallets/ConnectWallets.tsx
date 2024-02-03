import styled from 'styled-components' 
import keplr from '../../../assets/svg/Keplr.svg'
import leap from '../../../assets/svg/LeapWallet.svg'
import qube from '../../../assets/svg/QubeLogo.svg'
import { ConnectKeplr } from '../../../connection/keplr'
import { useConnectKeplrWalletStore } from '../../../hooks/useConnectKeplrWalletStore'
import { useWallet } from '../../../hooks/useWallet'
import { InitSigner } from '../../../connection/stargate'
import { useClient } from '../../../hooks/useClient'
import { useBalancesStore } from '../../../hooks/useBalanceStore'
import { UpdateBalances } from '../../../connection/balances'
import { useAlertStore } from '../../../hooks/useAlertStore'
import { useShowAlert } from '../../../hooks/useShowModal'
import { WalletStatements, useWalletModal } from '../../../hooks/useWalletModal'
import { useToggleTheme } from '../../../hooks/useToggleTheme'

const ArrWallets = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media (max-width: 500px) {
        flex-direction: column;
        align-items: center;
    }
`

const WalletList = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const WalletFields = styled.button`
    max-width: 100%;
    border: none;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: black;
    cursor: pointer;
    outline:none;
    margin-top: 20px;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    background: transparent;
    padding: 5px;
    &:hover {
        background: #ECECEC;
    }
`

const WalletLogo = styled.img`
    width: 50px;
    height: 50px;
`

const WalletName = styled.h1 <{TextColor: string}>`
    margin-top: 5px;
    font-size: 15px;
    color: ${props => props.TextColor};
`

const WalletInfoBlock = styled.div <{walletInfoBgColor: string}>`
    width: 100%;
    height: 100%;
    background: ${props => props.walletInfoBgColor};
    margin-top: 10px;
    border-radius: 17px;
    display: flex;
    justify-content: center;
`

const ContentInfoBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const WalletBlock = styled.div <{walletBgColor: string}>`
    max-width: 100%;
    max-height: 100%;
    padding: 20px;
    background: ${props => props.walletBgColor};
    border-radius: 30px;
    margin-top: 30px;
    cursor: pointer;
`

const ConnectText = styled.h1 <{TextColor: string}>`
    font-size: 18px;
    margin-top: 20px;
    color: ${props => props.TextColor};
`

const InfoLogoWallet = styled.img`
    width: 150px;
`

const WalletTextBlock = styled.div`
    max-width: 300px;
`

const WalletText = styled.h1 <{TextColor: string}>`
    font-size: 16px;
    color: ${props => props.TextColor};
    margin-top: 20px;
    text-align: center;
`

const WalletConnectBlock = styled.div`
    display: flex;
    align-items: center;
`


export const ConnectWallets = () => {
    const [ connectWallet, setConnectWallet ] = useConnectKeplrWalletStore();
    const [ c, setClient ] = useClient();
    const [ w, setWallet ] = useWallet();
    const [ balances, setBalances ] = useBalancesStore();

    const [alertStore, setAlertStore] = useAlertStore();
    const [showAlerts, setShowAlerts] = useShowAlert();
    const [walletModal, setWalletModal] = useWalletModal();
    const [theme, setTheme] = useToggleTheme()
    
    let ConnectKeplrHandler = async () => {
        let [connected, walletKeplr, alert] = await ConnectKeplr();
        
        if(Object.keys(alert).length !== 0) {
            alertStore.push(alert) 
            setShowAlerts({b: true})
        }
        if (connected == true) {
            let wallet = {init: true, wallet: walletKeplr, type: "keplr"};
            setConnectWallet({connected})
            setWallet(wallet)
            
            let client = await InitSigner();
            setClient(client)
            
            let blns = await UpdateBalances(wallet, balances);
            setBalances(blns)
        }
    }

    return(
        <ArrWallets>
            <WalletList>
                <WalletFields onClick={ () => {setWalletModal(WalletStatements[0])}}>
                    <WalletLogo src={keplr}></WalletLogo>
                    <WalletName TextColor={theme.TextColor}>Keplr Wallet</WalletName>
                </WalletFields>
                <WalletFields onClick={ () => {setWalletModal(WalletStatements[1])}}>
                    <WalletLogo src={leap}></WalletLogo>
                    <WalletName TextColor={theme.TextColor}>Leap Wallet</WalletName>
                </WalletFields>
                <WalletFields onClick={ () => {setWalletModal(WalletStatements[2])}}>
                    <WalletLogo src={qube}></WalletLogo>
                    <WalletName TextColor={theme.TextColor}>Qube Wallet</WalletName>
                </WalletFields>
            </WalletList>
            <WalletInfoBlock walletInfoBgColor={theme.walletInfoBgColor}>
                <ContentInfoBlock>
                    <ConnectText TextColor={theme.TextColor}>Getting started with {walletModal.name}</ConnectText>
                    <WalletConnectBlock>
                        <WalletBlock walletBgColor={theme.walletBgColor} onClick={ConnectKeplrHandler}> 
                            <InfoLogoWallet src={walletModal.logo}></InfoLogoWallet>
                        </WalletBlock>
                    </WalletConnectBlock>
                    <WalletTextBlock>
                        <WalletText TextColor={theme.TextColor}>
                            {walletModal.text}
                        </WalletText>
                    </WalletTextBlock>
                </ContentInfoBlock>
           </WalletInfoBlock>
        </ArrWallets>
    )
}

