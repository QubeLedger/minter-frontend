import { QUBE_TESTNET_INFO } from "../constants";
import { useConnectKeplrWalletStore } from "../hooks/useConnectKeplrWalletStore";

function WalletConnected() {
        const [ connectWallet, setConnectWallet ] = useConnectKeplrWalletStore();
        setConnectWallet({ connected: true })
}

export async function ConnectKeplr(): Promise<[boolean, any]> {
        if (!(window as any).getOfflineSigner || !(window as any).keplr) {
                console.log("Please install keplr extension"); // ERROR
        } else {
                if ((window as any).keplr.experimentalSuggestChain) {
                        try {
                                await (window as any).keplr.experimentalSuggestChain({
                                        chainId: QUBE_TESTNET_INFO.chainId,
                                        chainName: QUBE_TESTNET_INFO.chainName,
                                        rpc: QUBE_TESTNET_INFO.rpc,
                                        rest: QUBE_TESTNET_INFO.rest,
                                        chainSymbolImageUrl: QUBE_TESTNET_INFO.chainSymbolImageUrl,
                                        stakeCurrency: QUBE_TESTNET_INFO.stakeCurrency,
                                        bip44: QUBE_TESTNET_INFO.bip44,
                                        bech32Config: QUBE_TESTNET_INFO.bech32Config,
                                        currencies: QUBE_TESTNET_INFO.currencies,
                                        feeCurrencies: QUBE_TESTNET_INFO.feeCurrencies,
                                        features: QUBE_TESTNET_INFO.features,
                                })
                        } catch (e) {
                                console.log("Failed to suggest the chain", e) // ERROR
                        }
                } else {
                        console.log("Please use the recent version of keplr extension"); // ERROR
                }
                await (window as any).keplr.enable(QUBE_TESTNET_INFO.chainId);
                var wallet = await (window as any).keplr.getKey(QUBE_TESTNET_INFO.chainId)
                return (
                        [((wallet.bech32Address != "") ? true : false), wallet]
                )
        }
        return [false, null]
}