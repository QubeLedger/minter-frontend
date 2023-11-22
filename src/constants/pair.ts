export interface PairInfo {
        DenomIn: string
        DenomOut: string
        PairId: string
        OracleDenom: string
}

export const QUBE_TESTNET_PAIRS: PairInfo[] = [
        {
                DenomIn: 'ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2',
                DenomOut: 'uusd',
                PairId: "8d10115c9aa968fc3fc716b9e83d7f36d6a921355af3ed9f16dd16590e57b234",
                OracleDenom: "ATOM"
        }
]