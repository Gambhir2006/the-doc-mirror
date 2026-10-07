import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-blue-600">
            The Doc Mirror AI
          </div>
          <div className="flex gap-4">
            <Link
              href="/login"
              className="px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="container mx-auto px-6 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            AI-Powered Doctor
            <span className="text-blue-600"> Visibility Intelligence</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Transform your practice's online presence with advanced AI analytics,
            SEO audits, competitor intelligence, and automated reports.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/register"
              className="px-8 py-4 bg-blue-600 text-white rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
            >
              Start Free Trial
            </Link>
            <Link
              href="/dashboard"
              className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              View Demo
            </Link>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <Link href="/dashboard/visibility" className="group">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
              <div className="text-blue-600 text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                AI Visibility Score
              </h3>
              <p className="text-gray-600">
                Get an explainable 0-100 score for your online presence with
                actionable insights.
              </p>
            </div>
          </Link>

          <Link href="/dashboard/website-audit" className="group">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
              <div className="text-blue-600 text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                SEO Audit Engine
              </h3>
              <p className="text-gray-600">
                Comprehensive website analysis including speed, metadata, and
                technical SEO.
              </p>
            </div>
          </Link>

          <Link href="/dashboard/content-studio" className="group">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
              <div className="text-blue-600 text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                AI Content Studio
              </h3>
              <p className="text-gray-600">
                Generate SEO-friendly content including bios, blogs, and FAQs
                automatically.
              </p>
            </div>
          </Link>

          <Link href="/dashboard/competitors" className="group">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
              <div className="text-blue-600 text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Competitor Intelligence
              </h3>
              <p className="text-gray-600">
                Track and compare your visibility against competitors in your
                area.
              </p>
            </div>
          </Link>

          <Link href="/dashboard/local-seo" className="group">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
              <div className="text-blue-600 text-4xl mb-4">📍</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Google Maps Integration
              </h3>
              <p className="text-gray-600">
                Optimize your local search presence and Google Business Profile.
              </p>
            </div>
          </Link>

          <Link href="/dashboard" className="group">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
              <div className="text-blue-600 text-4xl mb-4">📈</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Live Analytics
              </h3>
              <p className="text-gray-600">
                Real-time dashboards with historical trends and performance
                monitoring.
              </p>
            </div>
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-8 text-center text-gray-600">
        <p>© 2024 The Doc Mirror AI. All rights reserved.</p>
      </footer>
    </div>
  );
}
