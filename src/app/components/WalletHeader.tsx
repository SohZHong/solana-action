"use client";

import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useEffect, useState } from "react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const WalletHeader = () => {
    const { connection } = useConnection();
    const { publicKey, disconnect } = useWallet();
    const [balance, setBalance] = useState<number | null>(null);
    const [walletAddress, setWalletAddress] = useState<string>('');
  
    // Get balance every minute
    useEffect(() => {
        if (publicKey) {
          (async function getBalanceEveryMinute() {
            const newBalance = await connection.getBalance(publicKey);
            setBalance(newBalance / LAMPORTS_PER_SOL);
            setTimeout(getBalanceEveryMinute, 60000);
          })();
        }
      }, [publicKey, connection, balance]);

    useEffect(() => {
      // Do nothing if not connected yet
      if (!connection || !publicKey) {
        return;
      }
      // Set Balamce
      connection.onAccountChange(
        publicKey,
        (updatedAccountInfo) => {
          setBalance(updatedAccountInfo.lamports / LAMPORTS_PER_SOL);
        },
        "confirmed"
      );
      // Get Account Info
      connection.getAccountInfo(publicKey).then((info) => {
        if (info) {
          setBalance(info?.lamports / LAMPORTS_PER_SOL);
        }
      });
    }, [publicKey, connection]);
  
    // Setting wallet address upon connect
    useEffect(() => {
      setWalletAddress(publicKey?.toBase58()!);
    }, [publicKey]);
  
    // Disconnect from wallet
    const handleDisconnect = async () => {
      disconnect();
    };
  
    return (
        <div className="border hover:border-slate-900 rounded">
        {
          publicKey ?
          <div>
              <div>
                <h2>
                  {walletAddress}
                </h2>
                <h2>
                  {balance ? balance.toFixed(2) : 0} SOL
                </h2>
              </div>
              <button
                className="bg-[#ff5555] z-50 text-[20px]  text-white  border border-white font-slackey"
                onClick={handleDisconnect}
              >
                Disconnect
              </button>
          </div>
          :
            <WalletMultiButton className={inter.className} />
        }
        </div>
    )
}

export default WalletHeader