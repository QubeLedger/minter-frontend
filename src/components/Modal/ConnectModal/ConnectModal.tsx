import { DialogContent, DialogOverlay } from '@reach/dialog';
import styled from 'styled-components';
import { animated } from '@react-spring/web';
import { ConnectWallets } from '../../Wallets/ConnetsWallets/ConnectWallets';
import { useConnectKeplrWalletStore } from '../../../hooks/useConnectKeplrWalletStore';
import { useWallet } from '../../../hooks/useWallet';
import { useShowWalletModal } from '../../../hooks/useShowModal';
import { useToggleTheme } from '../../../hooks/useToggleTheme';
import { useBalancesStore } from '../../../hooks/useBalanceStore';
import { QUBE_TESTNET_INFO } from '../../../constants';


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
    width: 20px;
    font-size: 35px;
    margin-top: 10px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: ${props => props.TextColor};
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
    border-radius: 50px;
    font-family: 'Metropolis', sans-serif;
    font-size: 17px;
    font-weight: 600;
    padding: 9px 30px 9px 30px;
`

const ConnectText = styled.a`
    margin-top: 0px; 
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
    @media (max-width: 500px) {
        flex-direction: column;
        }
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

const WalletsText = styled.div`
    text-align: right;
    font-weight: 500;
    font-size: 16px;
    margin-top: -7px;
    margin-left: -10px;
    margin-right: -10px;
`

const BalanceText = styled.div`
    text-align: right;
    font-size: 13px;
`



const ModalDialogContent = animated(DialogContent);
const StyledDialogContent = styled(ModalDialogContent) <{modalBgColor: string, Border: string}> `
    &[data-reach-dialog-content] {
        background-color: ${props => props.modalBgColor};
        width: 535px;
        height: 350px;
        display: flex;
        flex-direction: column;
        border-radius: 20px;
        border: ${props => props.Border};
        margin-top: -10px;
        position: relative;
        outline: none;
        @media (max-width: 500px) {
            width: 335px;
            height: 600px;
        }
        @media (max-width: 330px) {
            width: 305px;
        }
    }
`



export const ConnectModal = () => {
    let walletAddr: string = "";

    const [ connectWallet, setConnectKeplrWalletStore ] = useConnectKeplrWalletStore();
    const [ wallet, setWallet ] = useWallet();
    const [ walletModalStatus, setWalletModalStatus ] = useShowWalletModal();
    const [theme, setTheme] = useToggleTheme()
    const [balances, setBalances] = useBalancesStore();

    const open = () => {setWalletModalStatus({b: true})};
    const close = () => {setWalletModalStatus({b: false})};

    const disconnect = () => {
        setWallet({
            init: false,
            wallet: null,
            type: ""
        });
        setConnectKeplrWalletStore({
            connected: false
        })
        close()
    }

    let BalanceAddrText;

    if(wallet.type == "keplr") {
        walletAddr =  'qube...' + String(wallet.wallet.bech32Address).slice(38,43);
        let qube_amount = 0;
        balances.map((coin) => {
            if(coin.denom == QUBE_TESTNET_INFO.feeCurrencies[0].coinMinimalDenom) {
                qube_amount = Number(coin.amt);
            }
        })
        BalanceAddrText = <WalletsText>{walletAddr}<BalanceText>{(qube_amount / (10 ** QUBE_TESTNET_INFO.feeCurrencies[0].coinDecimals)).toFixed(2)} QUBE</BalanceText></WalletsText>;
    }

    return (
      <div>
        <OpenButton onClick={wallet.init == false? open : disconnect}>
            {walletAddr == "" || undefined ? <ConnectText>Connect</ConnectText> : BalanceAddrText }
            </OpenButton>
        <StyledDialogOvelay isOpen={walletModalStatus.b && !connectWallet.connected} onDismiss={close}>
            <StyledDialogContent  modalBgColor={theme.modalBgColor} Border={theme.Border}>
                <CloseDiv>              
                    <CloseButton TextColor={theme.TextColor} onClick={close}>
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