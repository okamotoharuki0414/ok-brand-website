'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

export default function ContactForm() {
  const t = useTranslations('contact.form')
  const tContact = useTranslations('contact')
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = t('nameRequired')
    }

    if (!formData.email.trim()) {
      newErrors.email = t('emailRequired')
    } else if (!validateEmail(formData.email)) {
      newErrors.email = t('emailInvalid')
    }

    if (!formData.message.trim()) {
      newErrors.message = t('messageRequired')
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
      // 仮実装：console.logで出力
      console.log('お問い合わせ内容:', {
        name: formData.name,
        email: formData.email,
        subject: formData.subject || '件名なし',
        message: formData.message,
        timestamp: new Date().toISOString()
      })

      // 実際の実装では、ここで外部APIに送信
      // await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) })
      
      // 送信成功の処理
      await new Promise(resolve => setTimeout(resolve, 1000)) // 送信処理のシミュレーション
      
      setIsSubmitted(true)
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      console.error('送信エラー:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('success.title')}</h3>
        <p 
          className="text-gray-600 mb-6"
          dangerouslySetInnerHTML={{ __html: t('success.description') }}
        />
        <button
          onClick={() => setIsSubmitted(false)}
          className="bg-orange-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-700 hover:shadow-lg transition-all duration-300"
        >
          {t('success.newInquiry')}
        </button>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* ヘッダーセクション */}
      <div className="text-center mb-12 pt-8">
        <h1 className="text-4xl md:text-5xl font-serif text-slate-800 tracking-wide mb-6">
          {tContact('title')}
        </h1>
        <div className="w-16 h-px bg-slate-400 mx-auto mb-6"></div>
        <p className="text-xl text-slate-600 mb-4 font-light">
          {tContact('subtitle')}
        </p>
        <p 
          className="text-slate-600 leading-relaxed max-w-2xl mx-auto"
          dangerouslySetInnerHTML={{ __html: tContact('description') }}
        />
      </div>
      
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            {t('name')} <span className="text-red-500">{t('required')}</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className={`
              w-full px-4 py-3 border rounded-lg transition-colors duration-200
              focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500
              ${errors.name ? 'border-red-500 bg-red-50' : 'border-gray-300 bg-white'}
            `}
            placeholder={t('namePlaceholder')}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            {t('email')} <span className="text-red-500">{t('required')}</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className={`
              w-full px-4 py-3 border rounded-lg transition-colors duration-200
              focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500
              ${errors.email ? 'border-red-500 bg-red-50' : 'border-gray-300 bg-white'}
            `}
            placeholder={t('emailPlaceholder')}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email}</p>
          )}
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
            {t('subject')}
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            placeholder={t('subjectPlaceholder')}
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            {t('message')} <span className="text-red-500">{t('required')}</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            value={formData.message}
            onChange={handleInputChange}
            className={`
              w-full px-4 py-3 border rounded-lg transition-colors duration-200 resize-none
              focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500
              ${errors.message ? 'border-red-500 bg-red-50' : 'border-gray-300 bg-white'}
            `}
            placeholder={t('messagePlaceholder')}
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-600">{errors.message}</p>
          )}
        </div>

        <div className="pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-orange-600 text-white py-4 px-6 rounded-lg font-medium text-lg hover:bg-orange-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                {t('submitting')}
              </span>
            ) : (
              t('submit')
            )}
          </button>
        </div>
      </form>
      </div>
    </div>
  )
}