"use client";

import { useState, useEffect } from "react";
import freighterApi from "@stellar/freighter-api";
import { SorobanReactProvider } from "@soroban-react/core";
import { freighter } from "@soroban-react/freighter";
import { futurenet } from "@soroban-react/chains";

const chains = [futurenet];
const activeChain = futurenet;

export default function Home() {
  const [publicKey, setPublicKey] = useState<string | null>(null);
  const [clickCount, setClickCount] = useState<number>(0);
  const [rewardAmount, setRewardAmount] = useState<number>(0);
  const [isClicked, setIsClicked] = useState<boolean>(false);

  useEffect(() => {
    const checkFreighter = async () => {
      try {
        const connected = await freighterApi.isConnected();
        if (connected) {
          const { address } = await freighterApi.getAddress();
          setPublicKey(address);
        }
      } catch (error) {
        console.error("Error checking Freighter connection:", error);
      }
    };
    checkFreighter();
  }, []);

  const handleConnectWallet = async () => {
    try {
      await freighterApi.setAllowed();
      const { address } = await freighterApi.getAddress();
      setPublicKey(address);
    } catch (error) {
      console.error("Error connecting to Freighter:", error);
    }
  };

  const handleClick = () => {
    setClickCount((prev) => prev + 1);
    setRewardAmount((prev) => Number((prev + 0.1).toFixed(2)));
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 250);
  };

  return (
    <SorobanReactProvider
      chains={chains}
      activeChain={activeChain}
      appName="Click Reward DApp"
      connectors={[freighter()]}
    >
      <main className="min-h-screen bg-gradient-to-br from-indigo-900 via-gray-900 to-gray-800 flex items-center justify-center relative overflow-hidden">
        {/* Arka plan animasyonu */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute left-1/2 top-1/2 w-[700px] h-[700px] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-tr from-blue-500/30 via-purple-500/20 to-pink-500/10 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute left-1/3 top-1/4 w-[300px] h-[300px] bg-gradient-to-br from-pink-500/20 to-yellow-400/10 rounded-full blur-2xl animate-pulse" />
        </div>
        <div className="max-w-md w-full mx-auto bg-gray-900/80 rounded-full shadow-2xl p-10 space-y-10 border border-gray-800 backdrop-blur-md relative z-10 flex flex-col items-center">
          <h1 className="text-4xl font-extrabold text-center bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-lg animate-fade-in rounded-full py-2 px-6">Click Reward DApp</h1>
          {!publicKey ? (
            <button
              onClick={handleConnectWallet}
              className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-full shadow-xl transition-all duration-300 text-lg tracking-wide animate-fade-in focus:outline-none focus:ring-4 focus:ring-blue-400/40"
            >
              <span className="inline-flex items-center gap-2">
                <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
                Freighter Cüzdanını Bağla
              </span>
            </button>
          ) : (
            <div className="space-y-10 animate-fade-in w-full flex flex-col items-center">
              <div className="bg-gray-800/80 py-4 px-6 rounded-full shadow flex flex-col items-center border border-gray-700 w-full">
                <p className="text-xs text-gray-400 mb-1">Bağlı Cüzdan</p>
                <p className="font-mono text-sm text-blue-300 break-all text-center">{publicKey}</p>
              </div>
              <div className="flex gap-6 justify-center w-full">
                <div className="bg-gradient-to-br from-blue-700/80 to-blue-400/40 py-8 px-8 rounded-full shadow-lg flex flex-col items-center min-w-[120px] border border-blue-500/30 animate-fade-in">
                  <p className="text-4xl font-extrabold text-white drop-shadow-lg animate-count-pop">{rewardAmount}</p>
                  <p className="text-xs text-blue-200 mt-1">Kazanılan Token</p>
                </div>
                <div className="bg-gradient-to-br from-pink-700/80 to-pink-400/40 py-8 px-8 rounded-full shadow-lg flex flex-col items-center min-w-[120px] border border-pink-500/30 animate-fade-in">
                  <p className="text-4xl font-extrabold text-white drop-shadow-lg animate-count-pop">{clickCount}</p>
                  <p className="text-xs text-pink-200 mt-1">Toplam Tıklama</p>
                </div>
              </div>
              <button
                onClick={handleClick}
                className={`w-full py-6 px-10 rounded-full text-3xl font-extrabold tracking-wide shadow-2xl bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 text-white transition-all duration-200 active:scale-95 hover:from-green-500 hover:to-purple-600 focus:outline-none focus:ring-4 focus:ring-blue-400/40 border-2 border-transparent ${isClicked ? "animate-click" : ""}`}
              >
                <span className="inline-flex items-center gap-3">
                  <svg className="w-8 h-8 animate-bounce" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01" /></svg>
                  Tıkla & Kazan!
                </span>
              </button>
            </div>
          )}
        </div>
        {/* Özel animasyonlar için stil */}
        <style jsx global>{`
          @keyframes fade-in {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in {
            animation: fade-in 0.8s cubic-bezier(0.4,0,0.2,1) both;
          }
          @keyframes count-pop {
            0% { transform: scale(1.1); }
            100% { transform: scale(1); }
          }
          .animate-count-pop {
            animation: count-pop 0.3s cubic-bezier(0.4,0,0.2,1);
          }
          @keyframes click {
            0% { box-shadow: 0 0 0 0 rgba(34,197,94,0.7); }
            100% { box-shadow: 0 0 0 30px rgba(34,197,94,0); }
          }
          .animate-click {
            animation: click 0.25s;
          }
          @keyframes pulse-slow {
            0%, 100% { opacity: 0.7; }
            50% { opacity: 1; }
          }
          .animate-pulse-slow {
            animation: pulse-slow 4s infinite;
          }
        `}</style>
      </main>
    </SorobanReactProvider>
  );
}
