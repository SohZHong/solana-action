import { PublicKey } from "@solana/web3.js";
import { DEFAULT_AMOUNT, DEFAULT_RECIPIENT } from "../config/blink";

export const getFeedbackQueryParams = (requestUrl: URL) => {
    let toPubkey: PublicKey = DEFAULT_RECIPIENT;
    let amount: number = DEFAULT_AMOUNT;
    const message = requestUrl.searchParams.get('message');
    try {
        const pubUrl = requestUrl.searchParams.get("to");
        if (pubUrl) {
            toPubkey = new PublicKey(pubUrl);
        }
    } catch (err) {
        throw "Invalid Public Address";
    }
  
    try {
        const amountUrl = requestUrl.searchParams.get("amount");
        if (amountUrl) {
            amount = parseFloat(amountUrl);
        }
    } catch (err) {
      throw "Invalid Amount";
    }
    return {
        message,
        amount,
        toPubkey
    };
}