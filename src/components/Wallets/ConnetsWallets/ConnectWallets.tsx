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
import { useAlertStore } from '../../../hooks/useAlertStore'
import { useShowAlert } from '../../../hooks/useShowModal'

const ArrWallets = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 10px;
`

const WalletFields = styled.button`
    background-color: rgb(50,50,50);
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

const WalletsText = styled.div`
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

const WalletsTextH3 = styled.h3`
    color: white;
    font-size: 18px;
    position: absolute;
    margin-top: 15em;
`

const WalletsTextH2Number = styled.h2` 
    color: white;
    margin-left: auto;
    margin-right: 26px;
`

const WalletsTextH5 = styled.h5`
   margin-top: -10px;
    color: grey;
`



export const ConnectWallets = () => {
    const [ connectWallet, setConnectWallet ] = useConnectKeplrWalletStore();
    const [ c, setClient ] = useClient();
    const [ w, setWallet ] = useWallet();
    const [ balances, setBalances ] = useBalancesStore();
    const [alertStore, setAlertStore] = useAlertStore();
    const [showAlerts, setShowAlerts] = useShowAlert();
    
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
            <WalletFields onClick={ConnectKeplrHandler}>
                <Img src={keplr}></Img>
                <WalletsTextH3>Keplr</WalletsTextH3>
            </WalletFields>
            <WalletFields>
                <Img src={leap}></Img>
                <WalletsTextH3>Leap</WalletsTextH3>
            </WalletFields>
        </ArrWallets>
    )
}