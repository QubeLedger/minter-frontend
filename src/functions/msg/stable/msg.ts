import { useTokenFrom } from "../../../hooks/useTokenFrom";
import { useAmountInStore } from "../../../hooks/useAmountInStore";
import { useWallet } from "../../../hooks/useWallet";
import { typeUrlMsgMint, typeUrlMsgBurn, MsgMint, MsgBurn } from "../../../constants/cosmos/proto/stable/tx";
import { TOKEN_INFO_COLLATERAL, TOKEN_INFO_QASSET, TokenType } from "../../../constants/tokens";
import { useTokenTo } from "../../../hooks/useTokenTo";

interface Msg {
        typeUrl: string
        value: any
}

interface MsgBody {
        creator: string;
        amountIn: string;
        denomOut: string;
}

export function MakeStableMsg(): Msg {
        const [ amount, _ ] = useAmountInStore();
        const [ tokenFrom, setTokenFrom] = useTokenFrom();
        const [ tokenTo, setTokenTo] = useTokenTo();
        const [ wallet, setWallet ] = useWallet();

        let tokenInfoFrom = (tokenFrom.type == "collateral" ? TOKEN_INFO_COLLATERAL : TOKEN_INFO_QASSET).find((token: any) => token.Base == tokenFrom.base);
        let tokenInfoTo = (tokenTo.type == "collateral" ? TOKEN_INFO_COLLATERAL : TOKEN_INFO_QASSET).find((token: any) => token.Base == tokenTo.base);
        
        let Msg: MsgBody = {
                creator: wallet.init == true && wallet.type == "keplr"? wallet.wallet.bech32.bech32Address : "",
                amountIn: amount + String(tokenInfoFrom?.Denom),
                denomOut: String(tokenInfoTo?.Denom),
        };

        let msg: Msg = {
            typeUrl: tokenFrom.type == "collateral"? typeUrlMsgMint : typeUrlMsgBurn,
            value: Msg,
        };

        return msg
}