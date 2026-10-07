import DashboardLayout from '@/components/layout/DashboardLayout';

export default function AdminPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Admin Dashboard</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-6 bg-blue-50 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Total Users</h4>
              <p className="text-3xl font-bold text-blue-600">1,234</p>
            </div>
            <div className="p-6 bg-green-50 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Active Subscriptions</h4>
              <p className="text-3xl font-bold text-green-600">567</p>
            </div>
            <div className="p-6 bg-purple-50 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Audits Run Today</h4>
              <p className="text-3xl font-bold text-purple-600">89</p>
            </div>
            <div className="p-6 bg-orange-50 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Revenue (MTD)</h4>
              <p className="text-3xl font-bold text-orange-600">$12.5K</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">System Health</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <span className="text-gray-700">API Server</span>
              <span className="text-green-600 font-medium">● Online</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <span className="text-gray-700">Database</span>
              <span className="text-green-600 font-medium">● Connected</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <span className="text-gray-700">Redis Cache</span>
              <span className="text-green-600 font-medium">● Active</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <span className="text-gray-700">Celery Workers</span>
              <span className="text-green-600 font-medium">● Running (4)</span>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
