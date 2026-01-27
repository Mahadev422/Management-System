import React from "react";

const MySettings = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">
        Account Settings
      </h2>

      <div className="space-y-8">
        {/* Privacy Settings */}
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-4">
            Privacy Settings
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium text-gray-900">
                  Profile Visibility
                </div>
                <div className="text-sm text-gray-500">
                  Who can see your profile
                </div>
              </div>
              <select className="px-4 py-2 border border-gray-300 rounded-lg">
                <option>Public</option>
                <option>Friends Only</option>
                <option>Private</option>
              </select>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium text-gray-900">
                  Activity Visibility
                </div>
                <div className="text-sm text-gray-500">
                  Show your activity to others
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  defaultChecked
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
          </div>
        </div>

        {/* Notification Settings */}
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-4">
            Notification Settings
          </h3>
          <div className="space-y-3">
            {[
              "Event Reminders",
              "Club Updates",
              "New Messages",
              "Achievement Alerts",
            ].map((setting) => (
              <div key={setting} className="flex items-center justify-between">
                <span className="text-gray-900">{setting}</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    defaultChecked
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Account Actions */}
        <div className="pt-8 border-t border-gray-200">
          <h3 className="text-lg font-bold text-gray-900 mb-4">
            Account Actions
          </h3>
          <div className="space-y-3">
            <button className="w-full text-left px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50">
              Change Password
            </button>
            <button className="w-full text-left px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50">
              Download My Data
            </button>
            <button className="w-full text-left px-4 py-3 border border-red-300 text-red-600 rounded-lg hover:bg-red-50">
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySettings;
