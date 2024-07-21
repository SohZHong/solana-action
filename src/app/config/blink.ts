import { clusterApiUrl, PublicKey } from "@solana/web3.js";

export const DEFAULT_RECIPIENT: PublicKey = new PublicKey(process.env.RECIPIENT ? process.env.RECIPIENT : "CDCB5SPqMJW4KKdUHMroWMLYYknmBMKH5FcwPfU8JnLP");

export const DEFAULT_AMOUNT: number = process.env.DEFAULT_AMOUNT ? parseFloat(process.env.DEFAULT_AMOUNT) : 0.1;

export const DEFAULT_RPC_NETWORK: string = process.env.RPC_URL_MAINNET ? process.env.RPC_URL_MAINNET : clusterApiUrl("devnet");

export const DEFAULT_TITLE: string = process.env.DEFAULT_TITLE ? process.env.DEFAULT_TITLE : 'Buy Me a Coffee';

export const DEFAULT_DESCRIPTION: string = process.env.DEFAULT_DESCRIPTION ? process.env.DEFAULT_DESCRIPTION : 'Showing Support Through Donations';

export const DEFAULT_BASE_HREF: string = process.env.DEFAULT_DONATION_URL ? process.env.DEFAULT_DONATION_URL : '/api/actions/feedback';