import styled from 'styled-components' 
import keplr from '../../../assets/svg/Keplr.svg'
import leap from '../../../assets/svg/LeapWallet.svg'
import { ConnectKeplr } from '../../../connection/keplr'
import { useConnectKeplrWalletStore } from '../../../hooks/useConnectKeplrWalletStore'
import { useWallet } from '../../../hooks/useWallet'
import { InitSigner } from '../../../connection/stargate'
import { useClient } from '../../../hooks/useClient'
import { useBalancesStore } from '../../../hooks/useBalanceStore'
import { UpdateBalances } from '../../../connection/balances'
import { useToggleTheme } from '../../../hooks/useToggleTheme'

const ArrWallets = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 10px;
    align-items: center;
    @media (max-width: 500px) {
        flex-direction: column;
    }
`

const WalletFields = styled.button <{connectBtnColor: string}> `
    background-color: ${props => props.connectBtnColor};
    width: 225px;
    height: 225px;
    border: none;
    margin-left: 10px;
    margin-right: 10px;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Metropolis', sans-serif;
    color: white;
    cursor: pointer;
    outline:none;
    margin-top: 10px;
    justify-content: center;
    
`

const Img = styled.img`
    width: 170px;
    height: 170px;
    margin-top: 5px;
    margin-bottom: 5px;
`

const WalletsTextH3 = styled.h3 <{TextColor: string}>`
    color: ${props => props.TextColor};
    font-size: 18px;
    position: absolute;
    margin-top: 16em;
`



export const ConnectWallets = () => {
    const [ connectWallet, setConnectWallet ] = useConnectKeplrWalletStore();
    const [ c, setClient ] = useClient();
    const [ w, setWallet ] = useWallet();
    const [ balances, setBalances ] = useBalancesStore();
    const [theme, setTheme] = useToggleTheme()
    
    let ConnectKeplrHandler = async () => {
        let [connected, walletKeplr] = await ConnectKeplr()
        let wallet = {init: true, wallet: walletKeplr, type: "keplr"};
        setConnectWallet({connected})
        setWallet(wallet)
        
        let client = await InitSigner();
        setClient(client)

        let blns = await UpdateBalances(wallet, balances);
        setBalances(blns)
    }
    return(
        <ArrWallets>
            <WalletFields connectBtnColor={theme.connectBtnColor} onClick={ConnectKeplrHandler}>
                <Img src={keplr}></Img>
                <WalletsTextH3 TextColor={theme.TextColor}>Keplr</WalletsTextH3>
            </WalletFields>
            <WalletFields connectBtnColor={theme.connectBtnColor}>
                <Img src={leap}></Img>
                <WalletsTextH3 TextColor={theme.TextColor}>Leap</WalletsTextH3>
            </WalletFields>
        </ArrWallets>
    )
}