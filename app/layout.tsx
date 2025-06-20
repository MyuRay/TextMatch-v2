import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'uniTex - 大学生のための教科書取引プラットフォーム',
  description: '大学生同士で教科書を売買できるプラットフォーム',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className="min-h-screen bg-gray-50">
        {children}
      </body>
    </html>
  )
}