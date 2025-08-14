'use client'

import { useState, useEffect } from 'react'
import { useTranslations, useLocale } from 'next-intl'

interface FormData {
  lastName: string
  firstName: string
  lastNameKana: string
  firstNameKana: string
  company?: string
  companyKana?: string
  email: string
  phone?: string
  address?: string
  message: string
}

interface FormErrors {
  lastName?: string
  firstName?: string
  email?: string
  message?: string
}

export default function ContactForm() {
  const t = useTranslations('contact.form')
  const tContact = useTranslations('contact')
  const locale = useLocale()
  const [isClient, setIsClient] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const isJapanese = locale === 'ja'
  const [formData, setFormData] = useState<FormData>({
    lastName: '',
    firstName: '',
    lastNameKana: '',
    firstNameKana: '',
    company: '',
    companyKana: '',
    email: '',
    phone: '',
    address: '',
    message: ''
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    setIsClient(true)
    setIsMounted(true)
  }, [])

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.lastName.trim()) {
      newErrors.lastName = '姓は必須項目です'
    }

    if (!formData.firstName.trim()) {
      newErrors.firstName = '名は必須項目です'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'メールアドレスは必須項目です'
    } else if (!validateEmail(formData.email)) {
      newErrors.email = '正しいメールアドレスを入力してください'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'お問い合わせ内容は必須項目です'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return

    setIsSubmitting(true)

    try {
      // APIにメールを送信
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(`Failed to send email: ${errorData.details || errorData.error || 'Unknown error'}`)
      }
      
      setIsSubmitted(true)
      setFormData({ 
        lastName: '', 
        firstName: '',
        lastNameKana: '',
        firstNameKana: '',
        company: '',
        companyKana: '',
        email: '', 
        phone: '',
        address: '',
        message: '' 
      })
    } catch (error) {
      console.error('送信エラー:', error)
      alert('送信に失敗しました。もう一度お試しください。')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isMounted) {
    return (
      <div className="max-w-6xl mx-auto px-4 flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-slate-800"></div>
      </div>
    )
  }

  if (isSubmitted) {
    return (
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          {isMounted ? (isJapanese ? '送信完了' : 'Sent Successfully') : '送信完了'}
        </h3>
        <p className="text-gray-600 mb-6">
          {isMounted ? (
            isJapanese ? (
              <>お問い合わせありがとうございます。<br/>内容を確認の上、担当者よりご連絡いたします。</>
            ) : (
              <>Thank you for your inquiry.<br/>We will contact you after reviewing your message.</>
            )
          ) : (
            <>お問い合わせありがとうございます。<br/>内容を確認の上、担当者よりご連絡いたします。</>
          )}
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="bg-orange-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-700 hover:shadow-lg transition-all duration-300"
        >
          {isMounted ? (isJapanese ? '新しいお問い合わせ' : 'New Inquiry') : '新しいお問い合わせ'}
        </button>
      </div>
    )
  }

  return (
    <div className="max-w-6xl mx-auto px-4">
      {/* ヘッダーセクション */}
      <div className="text-center mb-12 pt-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-slate-800 tracking-wide mb-6 leading-tight">
          {tContact('title')}
        </h1>
        <div className="w-16 h-px bg-slate-400 mx-auto mb-6"></div>
        <div className="max-w-4xl mx-auto">
          <p className="text-lg md:text-xl text-slate-600 mb-4 font-light leading-relaxed text-center">
            {isJapanese ? (
              <>お問い合わせは、電話・FAXまたはメールフォームにて承ります。<br/>また、オリジナル商品開発（OEM）も承っております。お気軽にお問い合わせください。</>
            ) : (
              <>We accept inquiries by phone, fax, or email form.<br/>We also offer original product development (OEM). Please feel free to contact us.</>
            )}
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 mb-12">
        {/* 連絡先情報 */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">
                {isMounted ? (isJapanese ? '住所' : 'Address') : '住所'}
              </h3>
              <p className="text-slate-600">〒457-0802</p>
              <p className="text-slate-600">
                {isMounted ? (isJapanese ? '愛知県名古屋市南区要町3-17' : '3-17 Kaname-cho, Minami-ku, Nagoya, Aichi, Japan') : '愛知県名古屋市南区要町3-17'}
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">
                {isMounted ? (isJapanese ? '電話/FAX' : 'Phone/FAX') : '電話/FAX'}
              </h3>
              <p className="text-slate-600">
                TEL: <a href={`tel:${isMounted ? (isJapanese ? '052-611-5301' : '+81-52-611-5301') : '052-611-5301'}`} className="hover:text-slate-800 transition-colors">
                  {isMounted ? (isJapanese ? '052-611-5301' : '+81-52-611-5301') : '052-611-5301'}
                </a>
              </p>
              <p className="text-slate-600">
                FAX: {isMounted ? (isJapanese ? '052-613-2607' : '+81-52-613-2607') : '052-613-2607'}
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">
                {isMounted ? (isJapanese ? '営業時間' : 'Business Hours') : '営業時間'}
              </h3>
              <p className="text-slate-600">
                {isMounted ? (isJapanese ? '月曜〜金曜 8:00〜17:30' : 'Monday - Friday 8:00 - 17:30') : '月曜〜金曜 8:00〜17:30'}
              </p>
            </div>
          </div>
        </div>

        {/* フォーム */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-xl font-bold text-slate-800 mb-6">
            {isMounted ? (isJapanese ? 'メールフォームでのお問い合わせ' : 'Email Form Inquiry') : 'メールフォームでのお問い合わせ'}
          </h3>
          <p className="text-sm text-slate-600 mb-6">
            {isMounted ? (isJapanese ? '*は必須項目です' : '* Required fields') : '*は必須項目です'}
          </p>
      
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* 姓・名 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                  {isMounted ? (isJapanese ? '姓' : 'Last Name') : '姓'} <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder={isMounted ? (isJapanese ? '岡本' : 'Smith') : '岡本'}
                  className={`
                    w-full px-3 py-2 border rounded-lg text-sm transition-colors duration-200
                    focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-slate-400
                    ${errors.lastName ? 'border-red-500 bg-red-50' : 'border-gray-300'}
                  `}
                />
                {errors.lastName && (
                  <p className="mt-1 text-xs text-red-600">{errors.lastName}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                  {isMounted ? (isJapanese ? '名' : 'First Name') : '名'} <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder={isMounted ? (isJapanese ? '太郎' : 'John') : '太郎'}
                  className={`
                    w-full px-3 py-2 border rounded-lg text-sm transition-colors duration-200
                    focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-slate-400
                    ${errors.firstName ? 'border-red-500 bg-red-50' : 'border-gray-300'}
                  `}
                />
                {errors.firstName && (
                  <p className="mt-1 text-xs text-red-600">{errors.firstName}</p>
                )}
              </div>
            </div>

            {/* 姓（カナ）・名（カナ） - 日本語版のみ */}
            {isJapanese && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="lastNameKana" className="block text-sm font-medium text-gray-700 mb-1">
                    姓（カナ）
                  </label>
                  <input
                    type="text"
                    id="lastNameKana"
                    name="lastNameKana"
                    value={formData.lastNameKana}
                    onChange={handleInputChange}
                    placeholder="オカモト"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-slate-400"
                  />
                </div>
                
                <div>
                  <label htmlFor="firstNameKana" className="block text-sm font-medium text-gray-700 mb-1">
                    名（カナ）
                  </label>
                  <input
                    type="text"
                    id="firstNameKana"
                    name="firstNameKana"
                    value={formData.firstNameKana}
                    onChange={handleInputChange}
                    placeholder="タロウ"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-slate-400"
                  />
                </div>
              </div>
            )}

            {/* 会社名 */}
            {isJapanese ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                    御社名
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="○○株式会社"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-slate-400"
                  />
                </div>
                
                <div>
                  <label htmlFor="companyKana" className="block text-sm font-medium text-gray-700 mb-1">
                    御社名（カナ）
                  </label>
                  <input
                    type="text"
                    id="companyKana"
                    name="companyKana"
                    value={formData.companyKana}
                    onChange={handleInputChange}
                    placeholder="○○カブシキガイシャ"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-slate-400"
                  />
                </div>
              </div>
            ) : (
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="ABC Corporation"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-slate-400"
                />
              </div>
            )}

            {/* Eメールアドレス */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                {isJapanese ? 'Eメールアドレス' : 'Email Address'} <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder={isJapanese ? 'abc@defg.com' : 'example@company.com'}
                className={`
                  w-full px-3 py-2 border rounded-lg text-sm transition-colors duration-200
                  focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-slate-400
                  ${errors.email ? 'border-red-500 bg-red-50' : 'border-gray-300'}
                `}
              />
              {errors.email && (
                <p className="mt-1 text-xs text-red-600">{errors.email}</p>
              )}
            </div>

            {/* お電話番号 */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                {isJapanese ? 'お電話番号' : 'Phone Number'}
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder={isJapanese ? '0001112222' : '+1-234-567-8900'}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-slate-400"
              />
            </div>

            {/* ご住所 */}
            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                {isJapanese ? 'ご住所' : 'Address'}
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                placeholder={isJapanese ? '住所を入力' : 'Enter your address'}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-slate-400"
              />
            </div>

            {/* お問い合わせ内容 */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                {isJapanese ? 'お問い合わせ内容' : 'Message'} <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleInputChange}
                placeholder={isJapanese ? 'テキストを入力...' : 'Enter your message...'}
                className={`
                  w-full px-3 py-2 border rounded-lg text-sm transition-colors duration-200 resize-none
                  focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-slate-400
                  ${errors.message ? 'border-red-500 bg-red-50' : 'border-gray-300'}
                `}
              />
              {errors.message && (
                <p className="mt-1 text-xs text-red-600">{errors.message}</p>
              )}
            </div>

            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-slate-600 text-white py-3 px-6 rounded-lg font-medium text-sm hover:bg-slate-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    {isJapanese ? '送信中...' : 'Sending...'}
                  </span>
                ) : (
                  isJapanese ? '送信する' : 'Send'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}