'use client';

import { useState } from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';

export default function BillingPage() {
  const [showQRModal, setShowQRModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('');

  const handleUpgrade = (plan: string) => {
    if (plan === 'Pro') {
      setSelectedPlan('Pro');
      setShowQRModal(true);
    } else if (plan === 'Enterprise') {
      setSelectedPlan('Enterprise');
      setShowQRModal(true);
    }
  };

  const getAmount = (plan: string) => {
    if (plan === 'Pro') return '49.00';
    if (plan === 'Enterprise') return '199.00';
    return '0.00';
  };

  const getUPIAmount = (plan: string) => {
    if (plan === 'Pro') return '49.00';
    if (plan === 'Enterprise') return '199.00';
    return '0.00';
  };

  const getQRCodeURL = (plan: string) => {
    const upiString = `upi://pay?pa=jhagambhirkumar@okhdfcbank&pn=Gambhir%20Jha&am=${getUPIAmount(plan)}&cu=INR`;
    return `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(upiString)}`;
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Subscription Plans</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 border border-gray-200 rounded-lg">
              <h4 className="text-xl font-bold text-gray-900 mb-2">Free</h4>
              <p className="text-3xl font-bold text-gray-900 mb-4">$0<span className="text-sm font-normal text-gray-600">/month</span></p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li>✓ Basic visibility score</li>
                <li>✓ 1 SEO audit/month</li>
                <li>✓ Email support</li>
              </ul>
              <button className="w-full bg-gray-200 text-gray-800 py-2 rounded-lg hover:bg-gray-300 transition-colors">
                Current Plan
              </button>
            </div>

            <div className="p-6 border-2 border-blue-600 rounded-lg relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                Popular
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Pro</h4>
              <p className="text-3xl font-bold text-blue-600 mb-4">$49<span className="text-sm font-normal text-gray-600">/month</span></p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li>✓ All Free features</li>
                <li>✓ Unlimited SEO audits</li>
                <li>✓ AI content generation</li>
                <li>✓ Competitor tracking</li>
                <li>✓ Priority support</li>
              </ul>
              <button 
                onClick={() => handleUpgrade('Pro')}
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Upgrade to Pro
              </button>
            </div>

            <div className="p-6 border border-gray-200 rounded-lg">
              <h4 className="text-xl font-bold text-gray-900 mb-2">Enterprise</h4>
              <p className="text-3xl font-bold text-gray-900 mb-4">$199<span className="text-sm font-normal text-gray-600">/month</span></p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li>✓ All Pro features</li>
                <li>✓ Multi-clinic support</li>
                <li>✓ Custom reports</li>
                <li>✓ API access</li>
                <li>✓ Dedicated support</li>
              </ul>
              <button 
                onClick={() => handleUpgrade('Enterprise')}
                className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors"
              >
                Upgrade to Enterprise
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Payment History</h3>
          <p className="text-gray-600">No payment history available</p>
        </div>
      </div>

      {/* QR Code Modal */}
      {showQRModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-8 max-w-md w-full mx-4">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-gray-900">
                Pay for {selectedPlan} Plan
              </h3>
              <button
                onClick={() => setShowQRModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-white p-4 rounded-lg border-2 border-gray-200 mb-4">
                <img 
                  src={getQRCodeURL(selectedPlan)}
                  alt="UPI QR Code"
                  className="w-48 h-48"
                />
              </div>

              <p className="text-sm text-gray-600 mb-2">
                Amount: ₹{getAmount(selectedPlan)}
              </p>
              <p className="text-sm text-gray-500 mb-4">
                Scan to pay with any UPI app
              </p>

              <div className="w-full bg-gray-100 rounded-lg p-3 mb-4">
                <p className="text-xs text-gray-600 text-center break-all">
                  UPI ID: jhagambhirkumar@okhdfcbank
                </p>
              </div>

              <button
                onClick={() => setShowQRModal(false)}
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
}
