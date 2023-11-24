import { SigningStargateClient } from "@cosmjs/stargate";  
import { QUBE_TESTNET_INFO } from "../constants";
import { Registry } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, GasPrice } from "@cosmjs/stargate";
import { MsgBurn, MsgMint, typeUrlMsgBurn, typeUrlMsgMint } from "../constants/cosmos/proto/stable/tx";

export async function InitSigner() {
        const reg = new Registry(defaultRegistryTypes)
        reg.register(typeUrlMsgMint, MsgMint)
        reg.register(typeUrlMsgBurn, MsgBurn)

        var offlineSigner = (window as any).getOfflineSigner(QUBE_TESTNET_INFO.chainId);
        var accounts = await offlineSigner.getAccounts();

        var client = await SigningStargateClient.connectWithSigner(
                QUBE_TESTNET_INFO.rpc,
                offlineSigner,
                {
                        registry: reg,
                        gasPrice: GasPrice.fromString(Number(QUBE_TESTNET_INFO.feeCurrencies[0].gasPriceStep.average).toFixed(0) + QUBE_TESTNET_INFO.feeCurrencies[0].coinMinimalDenom)
                        
                }
        );

        return ({init: true, client: client, accounts: accounts});
}