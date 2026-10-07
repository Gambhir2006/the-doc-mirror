import DashboardLayout from '@/components/layout/DashboardLayout';

export default function AiInsightsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">AI-Generated Insights</h3>
          
          <div className="space-y-4">
            <div className="p-6 bg-blue-50 rounded-lg border-l-4 border-blue-600">
              <h4 className="font-semibold text-gray-900 mb-2">Increase Online Reviews</h4>
              <p className="text-gray-600">
                Your competitors have 20% more reviews. Encourage satisfied patients to leave reviews on Google to improve your local ranking.
              </p>
            </div>

            <div className="p-6 bg-green-50 rounded-lg border-l-4 border-green-600">
              <h4 className="font-semibold text-gray-900 mb-2">Optimize Local Keywords</h4>
              <p className="text-gray-600">
                Add location-specific keywords to your website content to target patients searching for doctors in your area.
              </p>
            </div>

            <div className="p-6 bg-purple-50 rounded-lg border-l-4 border-purple-600">
              <h4 className="font-semibold text-gray-900 mb-2">Update Business Hours</h4>
              <p className="text-gray-600">
                Your Google Business Profile shows outdated hours. Update them to ensure patients can reach you during correct times.
              </p>
            </div>
          </div>
        </div>

        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
          Generate New Insights
        </button>
      </div>
    </DashboardLayout>
  );
}
