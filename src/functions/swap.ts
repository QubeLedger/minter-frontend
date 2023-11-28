
import { AmountIn, useAmountInStore } from "../hooks/useAmountInStore";
import { Wallet, useWallet } from "../hooks/useWallet";
import { typeUrlMsgMint, typeUrlMsgBurn, MsgMint, MsgBurn } from "../constants/cosmos/proto/stable/tx";
import { TOKEN_INFO_COLLATERAL, TOKEN_INFO_QASSET, TokenType } from "../constants/tokens";
import { useTokenTo } from "../hooks/useTokenTo";
import { Token, useTokenFrom } from "../hooks/useTokenFrom";
import { Client, useClient } from "../hooks/useClient";
import { AlertType } from "../hooks/useAlertStore";

interface Msg {
        typeUrl: string
        value: any
}

interface MsgBody {
        creator: string;
        amountIn: string;
        denomOut: string;
}

export async function swap(amount: AmountIn, tokenFrom: Token, tokenTo: Token, wallet: Wallet, client: Client): Promise<AlertType> {
        try {
                let tokenInfoFrom = (tokenFrom.type == "collateral" ? TOKEN_INFO_COLLATERAL : TOKEN_INFO_QASSET).find((token: any) => token.Base == tokenFrom.base);
                let tokenInfoTo = (tokenTo.type == "collateral" ? TOKEN_INFO_COLLATERAL : TOKEN_INFO_QASSET).find((token: any) => token.Base == tokenTo.base);
                
                let Msg: MsgBody = {
                        creator: wallet.init == true && wallet.type == "keplr" ? wallet.wallet.bech32Address : "",
                        amountIn: (Number(amount.amt) * 10 ** Number(tokenInfoFrom?.Decimals)).toFixed(0) + String(tokenInfoFrom?.Denom),
                        denomOut: String(tokenInfoTo?.Denom),
                };

                let msg: Msg = {
                        typeUrl: tokenFrom.type == "collateral" ? typeUrlMsgMint : typeUrlMsgBurn,
                        value: Msg,
                };

                if(client.init == true) {
                        const result = await client.client.signAndBroadcast(
                                client.accounts[0].address,
                                [msg],
                                "auto",
                        );
                        if (result.code !== undefined && result.code !== 0) {
                                console.log("Failed to send tx: " + result.log || result.rawLog);
                                let alert: AlertType = {
                                        Type: 'error',
                                        Text: tokenFrom.type == "collateral" ? "An error occurred while attempting to mint qAsset" : "An error occurred while trying to burn qAsset",
                                        Color: 'error',
                                        Tx: result.transactionHash
                                }
                                return alert;
                                
                        } else {
                                console.log("Succeed to send tx:" + result.transactionHash);
                                let alert: AlertType = {
                                        Type: "success",
                                        Text: tokenFrom.type == "collateral" ? "Successful qAsset minting" : "Successful burning of qAsset",
                                        Color: "success",
                                        Tx: result.transactionHash
                                }
                                return alert;
                        }
                }
        } catch(e) {
                console.log(e)
                let alert: AlertType = {
                        Type: 'warning',
                        Text: 'An unexpected error has occurred. Please try again.',
                        Color: 'warning',
                        Tx: ""
                }
                return alert
        }
        let alert: AlertType = {
                Type: 'warning',
                Text: 'An unexpected error has occurred. Please try again.',
                Color: 'warning',
                Tx: ""
        }
        return alert
}