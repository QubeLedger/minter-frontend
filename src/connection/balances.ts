import { QUBE_TESTNET_INFO } from "../constants";
import { Wallet } from "../hooks/useWallet";
import { Coin } from "../hooks/useBalanceStore";

export async function InitBalances(wallet: any): Promise<Array<Coin>> {
        let balances: Array<Coin> = [];
        try {
                let res = await fetch(QUBE_TESTNET_INFO.rest + `/cosmos/bank/v1beta1/balances/${wallet.bech32Address}`)
                let balanceJson = await res.json()
                let balanceArray = balanceJson.balances;
                balanceArray.map((token: any) => {
                        balances.push({amt: token.amount, denom: token.denom})
                })
                console.log(balanceArray.map())
        } catch(e) {
        }
        return balances
}