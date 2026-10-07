import DashboardLayout from '@/components/layout/DashboardLayout';

export default function LocalSeoPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Google Maps Intelligence</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-blue-50 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Business Profile Status</h4>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                <span className="text-green-600 font-medium">Verified</span>
              </div>
            </div>
            <div className="p-6 bg-green-50 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Local Ranking</h4>
              <p className="text-3xl font-bold text-green-600">#3</p>
              <p className="text-sm text-gray-600 mt-1">In your area</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Optimization Tips</h3>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start gap-2">
              <span className="text-green-500 mt-1">✓</span>
              <span>Add more photos to your Google Business Profile</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 mt-1">✓</span>
              <span>Respond to recent customer reviews</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-yellow-500 mt-1">!</span>
              <span>Update your business hours for accuracy</span>
            </li>
          </ul>
        </div>
      </div>
    </DashboardLayout>
  );
}
