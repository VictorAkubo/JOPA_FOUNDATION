"use client"
import React, { useState,useContext } from 'react';
import Link from "next/link"
import { Landmark, CreditCard, Copy, Check, Heart,ArrowLeft } from 'lucide-react';
const DonationPortal = () => {
  const [copied, setCopied] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<'transfer' | 'online'>('transfer');

  const accountDetails = {
    bank: "Zenith Bank",
    accountName: "Julius Ojonugwa Paul Akubo Foundation",
    accountNumber: "1228495032"
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(accountDetails.accountNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="z-20 max-w-full max-h-full py-14 bg-[#05070a] text-white">
      <div className="max-w-4xl mx-auto px-6">
        <Link href="/" className="flex items-center gap-3 text-orange-500 mb-10">
          <ArrowLeft className="text-orange-500"/>
          <span className="">Back</span>
        </Link>
        {/* Header */}
        <div className="text-center mb-16">
          <Heart size={32} className="text-orange-500 mx-auto mb-6" fill="currentColor" />
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-4">Extend Your Heart</h2>
          <p className="text-slate-500 font-light">Choose the method that is most convenient for you.</p>
        </div>

        {/* Toggle Switch */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 bg-white/5 border border-white/10 rounded-2xl">
            <button 
              onClick={() => setPaymentMethod('transfer')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold transition-all ${
                paymentMethod === 'transfer' ? 'bg-orange-600 text-white shadow-lg' : 'text-slate-500 hover:text-white'
              }`}
            >
              <Landmark size={18} /> Bank Transfer
            </button>
            <button 
              onClick={() => setPaymentMethod('online')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold transition-all ${
                paymentMethod === 'online' ? 'bg-orange-600 text-white shadow-lg' : 'text-slate-500 hover:text-white'
              }`}
            >
              <CreditCard size={18} /> Online Payment
            </button>
          </div>
        </div>

        {/* Payment Content */}
        <div className="min-h-[300px]">
          {paymentMethod === 'transfer' ? (
            /* Option 1: Bank Transfer Details */
            <div className="p-10 md:p-14 rounded-[3rem] bg-[#0a0c10] border border-white/10 text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h4 className="text-xs uppercase tracking-[0.3em] text-orange-500 font-black mb-8">Direct Transfer Details</h4>
              
              <div className="space-y-8">
                <div>
                  <p className="text-slate-500 text-[10px] uppercase font-bold tracking-widest mb-1">Bank Name</p>
                  <p className="text-2xl font-medium text-white">{accountDetails.bank}</p>
                </div>
                
                <div>
                  <p className="text-slate-500 text-[10px] uppercase font-bold tracking-widest mb-1">Account Name</p>
                  <p className="text-xl md:text-2xl font-medium text-white">{accountDetails.accountName}</p>
                </div>

                <div className="relative group inline-block">
                  <p className="text-slate-500 text-[10px] uppercase font-bold tracking-widest mb-1">Account Number</p>
                  <div className="flex items-center gap-4 justify-center">
                    <p className="text-4xl md:text-5xl font-black text-white tracking-tighter tabular-nums">
                      {accountDetails.accountNumber}
                    </p>
                    <button 
                      onClick={copyToClipboard}
                      className="p-3 rounded-xl bg-white/5 hover:bg-orange-600 text-slate-400 hover:text-white transition-all"
                      title="Copy Number"
                    >
                      {copied ? <Check size={20} /> : <Copy size={20} />}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* Option 2: Flutterwave Button */
            <div className="p-10 md:p-14 rounded-[3rem] bg-[#0a0c10] border border-white/10 text-center animate-in fade-in slide-in-from-bottom-4 duration-500 flex flex-col items-center justify-center">
              <div className="mb-8 p-6 rounded-full bg-orange-600/10 text-orange-500">
                <CreditCard size={40} strokeWidth={1} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Instant Donation</h3>
              <p className="text-slate-500 max-w-sm mb-10 font-light leading-relaxed">
                Securely donate using your card, USSD, or mobile money via Flutterwave.
              </p>
              
              <button 
                className="w-full max-w-xs py-5 bg-orange-600 hover:bg-orange-700 text-white font-black rounded-full transition-all hover:scale-105 shadow-xl shadow-orange-900/20 uppercase tracking-widest text-sm"
                onClick={() => {
                  // Integration logic for Flutterwave would go here
                  console.log("Redirecting to Flutterwave...");
                }}
              >
                Donate Now
              </button>
              
              <p className="mt-6 text-[10px] text-slate-600 font-bold uppercase tracking-[0.2em]">
                Securely Processed by Flutterwave
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default DonationPortal;