import DashboardLayout from '@/components/layout/DashboardLayout';

export default function WebsiteAuditPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900">SEO Audit Results</h3>
              <p className="text-gray-600 mt-1">Last audit: 2 hours ago</p>
            </div>
            <div className="text-4xl font-bold text-green-600">85/100</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="p-4 bg-green-50 rounded-lg text-center">
              <p className="text-2xl font-bold text-green-600">95</p>
              <p className="text-sm text-gray-600">Performance</p>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg text-center">
              <p className="text-2xl font-bold text-blue-600">88</p>
              <p className="text-sm text-gray-600">SEO</p>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg text-center">
              <p className="text-2xl font-bold text-purple-600">82</p>
              <p className="text-sm text-gray-600">Accessibility</p>
            </div>
            <div className="p-4 bg-orange-50 rounded-lg text-center">
              <p className="text-2xl font-bold text-orange-600">75</p>
              <p className="text-sm text-gray-600">Best Practices</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Issues Found</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
              <span className="text-gray-700">2 broken links detected</span>
              <span className="text-red-600 font-medium">High</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
              <span className="text-gray-700">Missing alt tags on 3 images</span>
              <span className="text-yellow-600 font-medium">Medium</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
              <span className="text-gray-700">Meta description too short</span>
              <span className="text-blue-600 font-medium">Low</span>
            </div>
          </div>
        </div>

        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
          Run New Audit
        </button>
      </div>
    </DashboardLayout>
  );
}
