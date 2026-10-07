import DashboardLayout from '@/components/layout/DashboardLayout';

export default function VisibilityPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900">AI Visibility Score</h3>
              <p className="text-gray-600 mt-1">Your overall online presence score</p>
            </div>
            <div className="text-6xl font-bold text-blue-600">78</div>
          </div>

          <div className="w-full bg-gray-200 rounded-full h-4 mb-6">
            <div className="bg-blue-600 h-4 rounded-full" style={{ width: '78%' }}></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 bg-blue-50 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">AI Mentions</h4>
              <p className="text-3xl font-bold text-blue-600">24</p>
              <p className="text-sm text-gray-600 mt-1">Across AI platforms</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Google Ranking</h4>
              <p className="text-3xl font-bold text-green-600">#3</p>
              <p className="text-sm text-gray-600 mt-1">Local search</p>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Online Reviews</h4>
              <p className="text-3xl font-bold text-purple-600">4.8</p>
              <p className="text-sm text-gray-600 mt-1">Average rating</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Visibility Explanation</h3>
          <p className="text-gray-600 leading-relaxed">
            Your visibility score of 78 indicates a strong online presence. You're performing well in local search 
            and have good mentions across AI platforms. To improve further, focus on increasing your online reviews 
            and optimizing your Google Business Profile.
          </p>
        </div>

        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
          Run New Analysis
        </button>
      </div>
    </DashboardLayout>
  );
}
