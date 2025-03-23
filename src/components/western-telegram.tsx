"use client"

import React, { useState, ReactNode } from 'react'

interface WesternTelegramProps {
  title: string
  children: ReactNode
  sendAction: (data: { name: string; email: string; message: string }) => void
}

export const WesternTelegram: React.FC<WesternTelegramProps> = ({ 
  title, 
  children, 
  sendAction 
}) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isSending, setIsSending] = useState(false)
  const [isSent, setIsSent] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validasi sederhana
    if (!name.trim() || !email.trim() || !message.trim()) {
      setError('Semua kolom harus diisi!')
      return
    }
    
    if (!email.includes('@') || !email.includes('.')) {
      setError('Email tidak valid!')
      return
    }
    
    setError('')
    setIsSending(true)
    
    // Kirim data dan reset form
    try {
      sendAction({ name, email, message })
      setIsSent(true)
      setName('')
      setEmail('')
      setMessage('')
    } catch (err) {
      setError('Gagal mengirim pesan. Silakan coba lagi.')
      console.error('Error sending message:', err)
    } finally {
      setIsSending(false)
      
      // Reset status "terkirim" setelah 5 detik
      if (isSent) {
        setTimeout(() => {
          setIsSent(false)
        }, 5000)
      }
    }
  }

  return (
    <div className="relative bg-cowboy-parchment dark:bg-cowboy-wood border-8 border-double border-cowboy-leather dark:border-cowboy-gold p-5 md:p-8 shadow-xl">
      {/* Latar tekstur */}
      <div className="absolute inset-0 opacity-5 bg-repeat" style={{ backgroundImage: "url('/textures/old-paper.jpg')" }}></div>
      
      {/* Konten */}
      <div className="relative">
        {/* Header Telegram */}
        <div className="mb-6 text-center border-b-2 border-cowboy-leather dark:border-cowboy-gold pb-4">
          {/* Logo Telegram Western Union */}
          <div className="mx-auto w-60 max-w-full mb-3">
            <svg className="w-full fill-cowboy-leather dark:fill-cowboy-gold" viewBox="0 0 300 60" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.88 10.68H279.12c6.74 0 12.24 5.5 12.24 12.24v14.16c0 6.74-5.5 12.24-12.24 12.24H20.88c-6.74 0-12.24-5.5-12.24-12.24V22.92c0-6.74 5.5-12.24 12.24-12.24z"/>
              <path fill="none" stroke="currentColor" strokeWidth="2" d="M55 15L42.5 45M75 15L87.5 45M48.75 25h25M245 15L257.5 45M225 15L212.5 45M251.25 25h-25"/>
              <text x="150" y="40" fontFamily="Western" fontSize="28" fill="white" textAnchor="middle">WESTERN TELEGRAM</text>
            </svg>
          </div>
          
          <h2 className="text-2xl md:text-3xl font-western text-cowboy-leather dark:text-cowboy-gold uppercase tracking-wider">
            {title}
          </h2>
        </div>
        
        {/* Isi Telegram */}
        <div className="mb-6 font-scrapbook text-cowboy-leather dark:text-cowboy-sand">
          {children}
        </div>
        
        {/* Form Pesan */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Tampilkan error jika ada */}
          {error && (
            <div className="p-3 bg-red-500/20 border border-red-500 text-red-800 dark:text-red-400 font-scrapbook text-sm rounded-sm">
              {error}
            </div>
          )}
          
          {/* Tampilkan pesan sukses */}
          {isSent && (
            <div className="p-3 bg-green-500/20 border border-green-500 text-green-800 dark:text-green-400 font-scrapbook text-sm rounded-sm">
              Pesan berhasil dikirim! Terima kasih.
            </div>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="form-group">
              <label htmlFor="name" className="block font-western text-cowboy-leather dark:text-cowboy-gold mb-1 text-sm uppercase tracking-wider">
                Nama
              </label>
              <input
                type="text"
                id="name"
                className="w-full bg-white/80 dark:bg-cowboy-wood/80 border-2 border-cowboy-leather dark:border-cowboy-gold 
                         p-2 font-scrapbook text-cowboy-leather dark:text-cowboy-sand
                         focus:ring-2 focus:ring-cowboy-gold focus:border-transparent"
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={isSending}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email" className="block font-western text-cowboy-leather dark:text-cowboy-gold mb-1 text-sm uppercase tracking-wider">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full bg-white/80 dark:bg-cowboy-wood/80 border-2 border-cowboy-leather dark:border-cowboy-gold 
                         p-2 font-scrapbook text-cowboy-leather dark:text-cowboy-sand
                         focus:ring-2 focus:ring-cowboy-gold focus:border-transparent"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isSending}
                required
              />
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="message" className="block font-western text-cowboy-leather dark:text-cowboy-gold mb-1 text-sm uppercase tracking-wider">
              Pesan
            </label>
            <textarea
              id="message"
              rows={5}
              className="w-full bg-white/80 dark:bg-cowboy-wood/80 border-2 border-cowboy-leather dark:border-cowboy-gold 
                       p-2 font-scrapbook text-cowboy-leather dark:text-cowboy-sand
                       focus:ring-2 focus:ring-cowboy-gold focus:border-transparent"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              disabled={isSending}
              required
            ></textarea>
          </div>
          
          <div className="text-center">
            <button
              type="submit"
              disabled={isSending}
              className="px-8 py-3 bg-cowboy-leather dark:bg-cowboy-gold text-white dark:text-cowboy-wood 
                       font-western uppercase tracking-wider text-lg
                       border-2 border-cowboy-leather dark:border-cowboy-gold
                       hover:bg-cowboy-rust dark:hover:bg-cowboy-sand
                       transform hover:-rotate-1 transition-all duration-300 
                       disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSending ? 'Mengirim...' : 'Kirim Telegram'}
            </button>
          </div>
        </form>
        
        {/* Stempel/Cap Telegram */}
        <div className="absolute -bottom-10 right-0 w-32 h-32 opacity-40 transform rotate-12 pointer-events-none flex items-center justify-center">
          <div className="sheriff-badge w-full h-full flex items-center justify-center">
            <div className="absolute inset-0 scale-75 sheriff-badge opacity-70 bg-cowboy-leather dark:bg-cowboy-gold"></div>
            <span className="text-cowboy-leather dark:text-cowboy-gold font-western text-xs z-10 absolute">WESTERN TELEGRAM</span>
          </div>
        </div>
      </div>
    </div>
  )
} 