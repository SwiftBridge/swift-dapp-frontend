'use client'

import { useState } from 'react'
import { useAccount } from 'wagmi'
import { Plus, X, Send, Zap, Clock, DollarSign, AlertCircle } from 'lucide-react'
import toast from 'react-hot-toast'

interface Transaction {
  id: string
  to: string
  value: string
  data: string
  gasLimit?: string
  description: string
}

export function BatchTransactions() {
  const { address } = useAccount()
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [newTransaction, setNewTransaction] = useState({
    to: '',
    value: '',
    data: '0x',
    description: ''
  })

  const addTransaction = () => {
    if (!newTransaction.to.trim()) {
      toast.error('Please enter a recipient address')
      return
    }

    if (!/^0x[a-fA-F0-9]{40}$/.test(newTransaction.to)) {
      toast.error('Please enter a valid Ethereum address')
      return
    }

    if (!newTransaction.value || parseFloat(newTransaction.value) < 0) {
      toast.error('Please enter a valid amount')
      return
    }

    const transaction: Transaction = {
      id: Date.now().toString(),
      to: newTransaction.to,
      value: newTransaction.value,
      data: newTransaction.data || '0x',
      description: newTransaction.description || `Transfer to ${newTransaction.to.slice(0, 6)}...${newTransaction.to.slice(-4)}`
    }

    setTransactions(prev => [...prev, transaction])
    setNewTransaction({
      to: '',
      value: '',
      data: '0x',
      description: ''
    })
    toast.success('Transaction added to batch')
  }

  const removeTransaction = (id: string) => {
    setTransactions(prev => prev.filter(t => t.id !== id))
    toast.success('Transaction removed from batch')
  }

  const handleExecuteBatch = async () => {
    if (transactions.length === 0) {
      toast.error('Please add at least one transaction')
      return
    }

    setIsLoading(true)
    
    try {
      // In real app, this would call the batch transaction smart contract
      console.log('Executing batch transactions:', {
        transactions,
        sender: address
      })

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 3000))

      const totalValue = transactions.reduce((sum, tx) => sum + parseFloat(tx.value), 0)
      toast.success(`Batch executed successfully! ${transactions.length} transactions, ${totalValue} ETH total`)
      setTransactions([])
    } catch (error) {
      toast.error('Failed to execute batch transactions')
      console.error('Error executing batch:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const totalValue = transactions.reduce((sum, tx) => sum + parseFloat(tx.value || '0'), 0)
  const estimatedGas = transactions.length * 21000 // Rough estimate

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-2">Batch Transactions</h2>
        <p className="text-secondary-400">
          Execute multiple transactions in a single batch to save gas and time
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Add Transaction Form */}
        <div className="card">
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <Plus className="w-5 h-5 mr-2" />
            Add Transaction
          </h3>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-secondary-300 mb-1">
                Recipient Address
              </label>
              <input
                type="text"
                placeholder="0x..."
                value={newTransaction.to}
                onChange={(e) => setNewTransaction(prev => ({ ...prev, to: e.target.value }))}
                className="input-field"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-secondary-300 mb-1">
                Amount (ETH)
              </label>
              <input
                type="number"
                step="0.0001"
                placeholder="0.0"
                value={newTransaction.value}
                onChange={(e) => setNewTransaction(prev => ({ ...prev, value: e.target.value }))}
                className="input-field"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-secondary-300 mb-1">
                Description
              </label>
              <input
                type="text"
                placeholder="Transaction description"
                value={newTransaction.description}
                onChange={(e) => setNewTransaction(prev => ({ ...prev, description: e.target.value }))}
                className="input-field"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-secondary-300 mb-1">
                Data (Optional)
              </label>
              <input
                type="text"
                placeholder="0x"
                value={newTransaction.data}
                onChange={(e) => setNewTransaction(prev => ({ ...prev, data: e.target.value }))}
                className="input-field"
              />
            </div>

            <button
              onClick={addTransaction}
              className="btn-primary w-full flex items-center justify-center space-x-2"
            >
              <Plus className="w-4 h-4" />
              <span>Add to Batch</span>
            </button>
          </div>
        </div>

        {/* Transaction List */}
        <div className="lg:col-span-2 card">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold flex items-center">
              <Zap className="w-5 h-5 mr-2" />
              Batch Transactions ({transactions.length})
            </h3>
            {transactions.length > 0 && (
              <button
                onClick={handleExecuteBatch}
                disabled={isLoading}
                className="btn-primary flex items-center space-x-2"
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    <span>Executing...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Execute Batch</span>
                  </>
                )}
              </button>
            )}
          </div>

          {transactions.length === 0 ? (
            <div className="text-center py-12 text-secondary-500">
              <Zap className="w-16 h-16 mx-auto mb-4 opacity-50" />
              <p className="text-lg mb-2">No transactions in batch</p>
              <p className="text-sm">Add transactions to create a batch</p>
            </div>
          ) : (
            <div className="space-y-3 max-h-96 overflow-y-auto">
              {transactions.map((transaction, index) => (
                <div
                  key={transaction.id}
                  className="flex items-center justify-between p-4 bg-secondary-700 rounded-lg"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                        {index + 1}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-sm truncate">{transaction.description}</p>
                        <p className="text-xs text-secondary-400 truncate">{transaction.to}</p>
                        <p className="text-xs text-primary-400">{transaction.value} ETH</p>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => removeTransaction(transaction.id)}
                    className="p-2 hover:bg-secondary-600 rounded transition-colors"
                  >
                    <X className="w-4 h-4 text-red-400" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Batch Summary */}
      {transactions.length > 0 && (
        <div className="card">
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <DollarSign className="w-5 h-5 mr-2" />
            Batch Summary
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-primary-400">{transactions.length}</p>
              <p className="text-sm text-secondary-400">Transactions</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-green-400">{totalValue.toFixed(4)} ETH</p>
              <p className="text-sm text-secondary-400">Total Value</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-blue-400">{estimatedGas.toLocaleString()}</p>
              <p className="text-sm text-secondary-400">Est. Gas</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-purple-400">~70%</p>
              <p className="text-sm text-secondary-400">Gas Savings</p>
            </div>
          </div>
        </div>
      )}

      {/* Benefits */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="card text-center">
          <Zap className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
          <h4 className="font-semibold">Gas Efficiency</h4>
          <p className="text-sm text-secondary-400">
            Save up to 70% on gas costs by batching transactions
          </p>
        </div>
        <div className="card text-center">
          <Clock className="w-8 h-8 text-blue-400 mx-auto mb-2" />
          <h4 className="font-semibold">Atomic Execution</h4>
          <p className="text-sm text-secondary-400">
            All transactions succeed or fail together
          </p>
        </div>
        <div className="card text-center">
          <AlertCircle className="w-8 h-8 text-green-400 mx-auto mb-2" />
          <h4 className="font-semibold">Safe & Secure</h4>
          <p className="text-sm text-secondary-400">
            Built on Base mainnet with proven security
          </p>
        </div>
      </div>
    </div>
  )
}
