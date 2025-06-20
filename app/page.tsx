export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            📚 uniTex v2
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            大学生のための教科書取引プラットフォーム
          </p>
          
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold mb-4">🎉 クリーンスタート成功！</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div className="space-y-3">
                <h3 className="font-semibold text-green-600">✅ 完了済み</h3>
                <ul className="space-y-1 text-sm">
                  <li>• Next.js 15 セットアップ</li>
                  <li>• TypeScript 設定</li>
                  <li>• Tailwind CSS</li>
                  <li>• クリーンな構成</li>
                </ul>
              </div>
              
              <div className="space-y-3">
                <h3 className="font-semibold text-blue-600">🚀 次のステップ</h3>
                <ul className="space-y-1 text-sm">
                  <li>• Firebase 再設定</li>
                  <li>• 認証システム</li>
                  <li>• 基本UI作成</li>
                  <li>• Vercel デプロイ</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-800">
                🎯 目標: シンプルで確実に動作するアプリを段階的に構築
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}