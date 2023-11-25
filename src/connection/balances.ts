import { QUBE_TESTNET_INFO } from "../constants";
import { Wallet } from "../hooks/useWallet";
import { Coin } from "../hooks/useBalanceStore";

export async function UpdateBalances(wallet: Wallet, old_balances: Array<Coin>): Promise<Array<Coin>> {
        let balances: Array<Coin> = [];
        try {
                let res = await fetch(QUBE_TESTNET_INFO.rest + `/cosmos/bank/v1beta1/balances/${wallet.wallet.bech32Address}`)
                let balanceJson = await res.json()
                let balanceArray = balanceJson.balances;
                balanceArray.map((token: any) => {
                        balances.push({amt: token.amount, denom: token.denom})
                })
        } catch(e) {
                return old_balances;
        }
        return balances
}