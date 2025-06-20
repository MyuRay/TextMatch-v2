export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* ヘッダー */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">📚</span>
              <h1 className="text-2xl font-bold text-gray-900">uniTex</h1>
            </div>
            <div className="hidden md:flex space-x-6">
              <a href="#" className="text-gray-600 hover:text-gray-900">ホーム</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">教科書を探す</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">出品する</a>
            </div>
            <div className="flex space-x-4">
              <button className="px-4 py-2 text-gray-600 hover:text-gray-900">ログイン</button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">新規登録</button>
            </div>
          </nav>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="container mx-auto px-4 py-16">
        {/* ヒーローセクション */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            大学生のための<br />教科書取引プラットフォーム
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            必要な教科書を手軽に見つけて、使わなくなった教科書を簡単に売却。
            大学生同士の安心・安全な取引をサポートします。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-lg">
              教科書を探す
            </button>
            <button className="px-8 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 text-lg">
              教科書を売る
            </button>
          </div>
        </div>

        {/* 特徴セクション */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="text-4xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold mb-3">簡単検索</h3>
            <p className="text-gray-600">大学名や授業名で必要な教科書をすぐに見つけられます</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="text-4xl mb-4">💰</div>
            <h3 className="text-xl font-semibold mb-3">お得な価格</h3>
            <p className="text-gray-600">新品より安く購入でき、不要な教科書は現金化できます</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="text-4xl mb-4">🛡️</div>
            <h3 className="text-xl font-semibold mb-3">安心取引</h3>
            <p className="text-gray-600">大学生同士の取引で、キャンパス内での受け渡しも可能</p>
          </div>
        </div>

        {/* 新着教科書セクション */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">新着教科書</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* サンプル教科書カード */}
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">📖</span>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-2">基礎数学 第{i}版</h3>
                  <p className="text-sm text-gray-600 mb-2">田中太郎 著</p>
                  <p className="text-lg font-bold text-blue-600">¥{(i * 500 + 1000).toLocaleString()}</p>
                  <p className="text-xs text-gray-500 mt-1">東京大学</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* フッター */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <span className="text-2xl">📚</span>
            <span className="text-xl font-bold">uniTex</span>
          </div>
          <p className="text-gray-400">© 2024 uniTex. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}