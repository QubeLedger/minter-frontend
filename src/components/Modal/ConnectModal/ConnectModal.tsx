import { DialogContent, DialogOverlay } from '@reach/dialog';
import styled from 'styled-components';
import { animated } from '@react-spring/web';
import { ConnectWallets } from '../../Wallets/ConnetsWallets/ConnectWallets';
import { useConnectKeplrWalletStore } from '../../../hooks/useConnectKeplrWalletStore';
import { useWallet } from '../../../hooks/useWallet';
import { useShowWalletModal } from '../../../hooks/useShowModal';
import { useToggleTheme } from '../../../hooks/useToggleTheme';
import { useBalancesStore } from '../../../hooks/useBalanceStore';
import Keplrlogo from '../../../assets/svg/Keplr.svg'


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

const CloseBlock = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`

const CloseButton = styled.button <{TextColor: string}>`
    width: 20px;
    font-size: 35px;
    margin-top: 10px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: ${props => props.TextColor};
    margin-right: 20px;
    outline: none;
`

const OpenButton = styled.button `
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

const ConnectText = styled.h1`
    font-size: 17px;
    margin: 8px 20px;
    color: black;
`

const WalletsText = styled.h1`
    font-weight: 700;
    font-size: 17px;
    margin: 0;
    @media (max-width: 500px) {
        font-size: 15px;
    }
`

const KeplrImg = styled.img`
    width: 20px;
    margin-right: 5px;
`

const AddressBlock = styled.div`
    display: flex;
    align-items: center;
    margin: 7px 20px;
    @media (max-width: 500px) {
        margin: 7px 15px;
    }
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


    if(wallet.type == "keplr") {
        walletAddr =  'qube...' + String(wallet.wallet.bech32Address).slice(38,43);
    }

    let walletAddress = <AddressBlock> <KeplrImg src={Keplrlogo}></KeplrImg> <WalletsText>{walletAddr}</WalletsText> </AddressBlock> ;
    let connectText = <ConnectText>Connect</ConnectText>;
    return (
      <div>
        <OpenButton onClick={wallet.init == false? open : disconnect}>
            {walletAddr == "" || undefined ? connectText : walletAddress }
            </OpenButton>
        <StyledDialogOvelay isOpen={walletModalStatus.b && !connectWallet.connected} onDismiss={close}>
            <StyledDialogContent  modalBgColor={theme.modalBgColor} Border={theme.Border}>
                <CloseBlock>              
                    <CloseButton TextColor={theme.TextColor} onClick={close}>
                    <span aria-hidden>×</span>
                    </CloseButton>
                </CloseBlock>
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