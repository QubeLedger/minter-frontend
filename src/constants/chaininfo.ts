interface StakeCurrency {
        readonly coinDenom: string
        readonly coinMinimalDenom: string
        readonly coinDecimals: number
        readonly coinImageUrl: string
}


interface Bech32Config {
        readonly bech32PrefixAccAddr: string
        readonly bech32PrefixAccPub: string
        readonly bech32PrefixValAddr: string
        readonly bech32PrefixValPub: string
        readonly bech32PrefixConsAddr: string
        readonly bech32PrefixConsPub: string
}

interface Currencies {
        coinDenom: string
        coinMinimalDenom: string
        coinDecimals: number
        coinImageUrl: string
}

interface FeeCurrencies {
        coinDenom: string
        coinMinimalDenom: string
        coinDecimals: number
        coinImageUrl: string
        gasPriceStep: {
                low: number,
                average: number,
                high: number,
        }
}

interface ChainConnectInfo {
        readonly chainId: string
        readonly chainName: string
        readonly rpc: string
        readonly rest: string
        readonly chainSymbolImageUrl: string
        readonly stakeCurrency: StakeCurrency
        readonly bip44: {
                coinType: number
        }
        readonly bech32Config: Bech32Config
        readonly currencies: Currencies[]
        readonly feeCurrencies: FeeCurrencies[]
        readonly features: string[]
}

export const QUBE_TESTNET_INFO: ChainConnectInfo = {
        chainId: "qube-2",
        chainName: "Qube Testnet",
        rpc: "https://api-rpc.qubedao.com/api",
        rest: "https://api-rest.qubedao.com/api",
        chainSymbolImageUrl: "https://apricot-grubby-booby-751.mypinata.cloud/ipfs/QmfJEqcjheC56qrs9cpW86RaGUW2xsJrB1suGWoZJScbXc",
        stakeCurrency: {
                coinDenom: "QUBE",
                coinMinimalDenom: "uqube",
                coinDecimals: 6,
                coinImageUrl: "https://apricot-grubby-booby-751.mypinata.cloud/ipfs/QmfJEqcjheC56qrs9cpW86RaGUW2xsJrB1suGWoZJScbXc",
        },
        bip44: {
                coinType: 560,
        },
        bech32Config: {
                bech32PrefixAccAddr: "qube",
                bech32PrefixAccPub: "qubepub",
                bech32PrefixValAddr: "qubevaloper",
                bech32PrefixValPub: "qubevaloperpub",
                bech32PrefixConsAddr: "qubevalcons",
                bech32PrefixConsPub: "qubevalconspub",
        },
        currencies: [
                {
                        coinDenom: "QUBE",
                        coinMinimalDenom: "uqube",
                        coinDecimals: 6,
                        coinImageUrl: "https://apricot-grubby-booby-751.mypinata.cloud/ipfs/QmfJEqcjheC56qrs9cpW86RaGUW2xsJrB1suGWoZJScbXc",
                },
                {
                        coinDenom: "USQ",
                        coinMinimalDenom: "uusd",
                        coinDecimals: 6,
                        coinImageUrl: "https://apricot-grubby-booby-751.mypinata.cloud/ipfs/QmcfLWPcB5MXxzc21jBktVVgnuXoCWNE5t19MUmLtdWSuw",
                },
                {
                        coinDenom: "ATOM",
                        coinMinimalDenom: "ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2",
                        coinDecimals: 6,
                        coinImageUrl: "https://cryptologos.cc/logos/cosmos-atom-logo.png",
                },
        ],
        feeCurrencies: [
                {
                        coinDenom: "QUBE",
                        coinMinimalDenom: "uqube",
                        coinDecimals: 6,
                        coinImageUrl: "https://apricot-grubby-booby-751.mypinata.cloud/ipfs/QmfJEqcjheC56qrs9cpW86RaGUW2xsJrB1suGWoZJScbXc",
                        gasPriceStep: {
                                low: 0.0025,
                                average: 0.025,
                                high: 0.04,
                        },
                },
        ],
        features: [
                "stargate", 
                "ibc-transfer", 
                "cosmwasm"
        ]
};