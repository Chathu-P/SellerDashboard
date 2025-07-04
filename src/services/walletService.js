//import { apiService } from './apiService';

// Wallet service that handles both API calls and local fallbacks
export const walletService = {
  // Get wallet data from PHP backend
  getWalletData: async () => {
    try {
      const data = await apiService.getWalletData();
      return data;
    } catch (error) {
      console.error('Failed to fetch wallet data from backend:', error);
      // Fallback to local data if backend is unavailable
      return walletService.getLocalWalletData();
    }
  },

  // Withdraw amount
  withdrawAmount: async (amount, bankDetails) => {
    try {
      return await apiService.withdrawAmount(amount, bankDetails);
    } catch (error) {
      console.error('Failed to process withdrawal:', error);
      throw error;
    }
  },

  // Get wallet overview
  getWalletOverview: async () => {
    try {
      return await apiService.getWalletOverview();
    } catch (error) {
      console.error('Failed to fetch wallet overview:', error);
      return walletService.getLocalWalletOverview();
    }
  },

  // Get transaction history
  getTransactionHistory: async () => {
    try {
      return await apiService.getTransactionHistory();
    } catch (error) {
      console.error('Failed to fetch transaction history:', error);
      return walletService.getLocalTransactionHistory();
    }
  },

  // Local fallback data methods
  getLocalWalletData: () => ({
    overview: {
      productsSold: 1234,
      totalEarnings: 56789,
      availableBalance: 12345
    },
    transactions: [
      {
        date: '2024-03-15',
        type: 'Sale',
        amount: 1500,
        status: 'Completed'
      },
      {
        date: '2024-03-10',
        type: 'Withdrawal',
        amount: 500,
        status: 'Completed'
      },
      {
        date: '2024-03-05',
        type: 'Sale',
        amount: 2000,
        status: 'Completed'
      },
      {
        date: '2024-02-28',
        type: 'Sale',
        amount: 1200,
        status: 'Completed'
      },
      {
        date: '2024-02-20',
        type: 'Withdrawal',
        amount: 300,
        status: 'Completed'
      }
    ]
  }),

  getLocalWalletOverview: () => ({
    productsSold: 1234,
    totalEarnings: 56789,
    availableBalance: 12345
  }),

  getLocalTransactionHistory: () => [
    {
      date: '2024-03-15',
      type: 'Sale',
      amount: 1500,
      status: 'Completed'
    },
    {
      date: '2024-03-10',
      type: 'Withdrawal',
      amount: 500,
      status: 'Completed'
    },
    {
      date: '2024-03-05',
      type: 'Sale',
      amount: 2000,
      status: 'Completed'
    }
  ]
};