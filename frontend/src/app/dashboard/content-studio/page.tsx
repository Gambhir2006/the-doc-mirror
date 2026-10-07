import DashboardLayout from '@/components/layout/DashboardLayout';

export default function ContentStudioPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">AI Content Studio</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 border border-gray-200 rounded-lg hover:border-blue-600 transition-colors cursor-pointer">
              <div className="text-4xl mb-4">👨‍⚕️</div>
              <h4 className="font-semibold text-gray-900 mb-2">Doctor Bio</h4>
              <p className="text-sm text-gray-600">Generate professional doctor biography</p>
            </div>

            <div className="p-6 border border-gray-200 rounded-lg hover:border-blue-600 transition-colors cursor-pointer">
              <div className="text-4xl mb-4">📝</div>
              <h4 className="font-semibold text-gray-900 mb-2">Blog Post</h4>
              <p className="text-sm text-gray-600">Create SEO-friendly blog articles</p>
            </div>

            <div className="p-6 border border-gray-200 rounded-lg hover:border-blue-600 transition-colors cursor-pointer">
              <div className="text-4xl mb-4">❓</div>
              <h4 className="font-semibold text-gray-900 mb-2">FAQs</h4>
              <p className="text-sm text-gray-600">Generate common Q&A content</p>
            </div>

            <div className="p-6 border border-gray-200 rounded-lg hover:border-blue-600 transition-colors cursor-pointer">
              <div className="text-4xl mb-4">📱</div>
              <h4 className="font-semibold text-gray-900 mb-2">Social Media</h4>
              <p className="text-sm text-gray-600">Create social media posts</p>
            </div>

            <div className="p-6 border border-gray-200 rounded-lg hover:border-blue-600 transition-colors cursor-pointer">
              <div className="text-4xl mb-4">🏥</div>
              <h4 className="font-semibold text-gray-900 mb-2">Service Page</h4>
              <p className="text-sm text-gray-600">Write service descriptions</p>
            </div>

            <div className="p-6 border border-gray-200 rounded-lg hover:border-blue-600 transition-colors cursor-pointer">
              <div className="text-4xl mb-4">📧</div>
              <h4 className="font-semibold text-gray-900 mb-2">Email Template</h4>
              <p className="text-sm text-gray-600">Generate email campaigns</p>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
