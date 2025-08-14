import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const { lastName, firstName, lastNameKana, firstNameKana, company, companyKana, email, phone, address, message } = await request.json()

    // 入力値の検証
    if (!lastName || !firstName || !email || !message) {
      return NextResponse.json(
        { error: 'LastName, firstName, email, and message are required' },
        { status: 400 }
      )
    }

    // メールアドレスの簡単な検証
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // Nodemailerの設定
    console.log('SMTP設定:', {
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      user: process.env.SMTP_USER,
      hasPass: !!process.env.SMTP_PASS,
      contactEmail: process.env.CONTACT_EMAIL
    })
    
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER, // Gmailアドレス
        pass: process.env.SMTP_PASS, // Gmailアプリパスワード
      },
    })

    // メール送信先（環境変数または固定値）
    const toEmail = process.env.CONTACT_EMAIL || 'your-email@example.com'

    // メール内容
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: toEmail,
      subject: `【お問い合わせ】お問い合わせがありました`,
      html: `
        <h2>お問い合わせフォームからの連絡</h2>
        <p><strong>お名前:</strong> ${lastName} ${firstName}</p>
        ${lastNameKana || firstNameKana ? `<p><strong>お名前（カナ）:</strong> ${lastNameKana} ${firstNameKana}</p>` : ''}
        ${company ? `<p><strong>御社名:</strong> ${company}</p>` : ''}
        ${companyKana ? `<p><strong>御社名（カナ）:</strong> ${companyKana}</p>` : ''}
        <p><strong>メールアドレス:</strong> ${email}</p>
        ${phone ? `<p><strong>電話番号:</strong> ${phone}</p>` : ''}
        ${address ? `<p><strong>住所:</strong> ${address}</p>` : ''}
        <hr>
        <h3>お問い合わせ内容:</h3>
        <p style="white-space: pre-line;">${message}</p>
        <hr>
        <p><small>このメールは岡本食品のWebサイトお問い合わせフォームから送信されました。</small></p>
      `
    }

    // メール送信
    await transporter.sendMail(mailOptions)

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    )

  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: 'Failed to send email', details: error.message || 'Unknown error' },
      { status: 500 }
    )
  }
}