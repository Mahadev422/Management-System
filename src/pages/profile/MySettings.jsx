import React, { useState } from 'react';
import { 
  FaSignOutAlt,
  FaTrophy,
  FaLink,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaYoutube,
  FaFacebook,
  FaGlobe,
  FaPlus,
  FaTrash,
  FaEdit,
  FaSave,
  FaTimes,
  FaLock,
  FaBell,
  FaEye,
  FaEyeSlash,
  FaUserShield,
  FaDownload,
  FaExclamationTriangle,
  FaCheckCircle,
  FaCamera,
  FaPalette,
  FaLanguage,
  FaQuestionCircle
} from 'react-icons/fa';

const MySettings = () => {
  // State for user settings
  const [settings, setSettings] = useState({
    privacy: {
      profileVisibility: 'public',
      showActivity: true,
      showEmail: false,
      showPhone: false
    },
    notifications: {
      eventReminders: true,
      clubUpdates: true,
      messages: true,
      achievements: true,
      newsletter: false
    },
    theme: 'light',
    language: 'english'
  });

  // State for social media links
  const [socialLinks, setSocialLinks] = useState({
    twitter: 'https://twitter.com/username',
    linkedin: 'https://linkedin.com/in/username',
    github: 'https://github.com/username',
    instagram: 'https://instagram.com/username',
    youtube: '',
    facebook: '',
    website: 'https://myportfolio.com'
  });

  // State for achievements
  const [achievements, setAchievements] = useState([
    {
      id: 1,
      title: 'Tech Star 2023',
      description: 'Awarded for outstanding contribution to tech clubs',
      date: '2023-12-15',
      icon: '🏆',
      category: 'Leadership'
    },
    {
      id: 2,
      title: 'Event Organizer',
      description: 'Successfully organized 3 major campus events',
      date: '2023-11-20',
      icon: '📅',
      category: 'Event Management'
    },
    {
      id: 3,
      title: 'Volunteer 100+ Hours',
      description: 'Completed 120+ hours of campus volunteering',
      date: '2023-09-10',
      icon: '❤️',
      category: 'Community Service'
    }
  ]);

  // State for adding new achievement
  const [newAchievement, setNewAchievement] = useState({
    title: '',
    description: '',
    date: new Date().toISOString().split('T')[0],
    icon: '🏆',
    category: ''
  });

  // State for editing mode
  const [editingSocial, setEditingSocial] = useState(false);
  const [editingAchievementId, setEditingAchievementId] = useState(null);
  const [showAddAchievement, setShowAddAchievement] = useState(false);

  // Available icons for achievements
  const achievementIcons = ['🏆', '🥇', '🥈', '🥉', '🎖️', '⭐', '🌟', '📜', '🏅', '💡', '🚀', '❤️', '📅', '👑'];

  // Available categories
  const categories = ['Leadership', 'Academic', 'Sports', 'Arts', 'Community Service', 'Event Management', 'Technical', 'Research'];

  // Handle social media link changes
  const handleSocialLinkChange = (platform, value) => {
    setSocialLinks(prev => ({
      ...prev,
      [platform]: value
    }));
  };

  // Handle achievement changes
  const handleAchievementChange = (id, field, value) => {
    setAchievements(prev => 
      prev.map(achievement => 
        achievement.id === id 
          ? { ...achievement, [field]: value }
          : achievement
      )
    );
  };

  // Add new achievement
  const handleAddAchievement = () => {
    if (!newAchievement.title.trim()) {
      alert('Please enter achievement title');
      return;
    }

    const newAchievementObj = {
      id: achievements.length + 1,
      ...newAchievement
    };

    setAchievements(prev => [newAchievementObj, ...prev]);
    setNewAchievement({
      title: '',
      description: '',
      date: new Date().toISOString().split('T')[0],
      icon: '🏆',
      category: ''
    });
    setShowAddAchievement(false);
  };

  // Delete achievement
  const handleDeleteAchievement = (id) => {
    if (window.confirm('Are you sure you want to delete this achievement?')) {
      setAchievements(prev => prev.filter(achievement => achievement.id !== id));
    }
  };

  // Handle logout
  const handleLogout = () => {
    if (window.confirm('Are you sure you want to logout?')) {
      // In a real app, this would clear auth tokens and redirect
      alert('Logged out successfully!');
      // Redirect to login page
      // window.location.href = '/login';
    }
  };

  // Handle settings changes
  const handleSettingChange = (section, key, value) => {
    setSettings(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [key]: value
      }
    }));
  };

  // Download user data
  const handleDownloadData = () => {
    const userData = {
      settings,
      socialLinks,
      achievements
    };
    
    const dataStr = JSON.stringify(userData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'user-settings-data.json';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-white">
      {/* Header */}
      <div className="bg-white shadow-lg">
        <div className="container mx-auto px-6 py-6">
          <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
          <p className="text-gray-600 mt-2">Manage your account preferences and privacy</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Left Column - Navigation */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Settings Menu</h2>
              <nav className="space-y-2">
                <button className="w-full text-left px-4 py-3 rounded-lg bg-blue-50 text-blue-600 font-semibold">
                  Account Settings
                </button>
                <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-50 text-gray-700">
                  Privacy & Security
                </button>
                <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-50 text-gray-700">
                  Notifications
                </button>
                <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-50 text-gray-700">
                  Appearance
                </button>
              </nav>
            </div>
          </div>

          {/* Right Column - Settings Content */}
          <div className="lg:w-3/4">
            {/* Account Settings Section */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Account Settings</h2>
                <button className="text-blue-600 hover:text-blue-700">
                  <FaSave className="w-5 h-5" />
                </button>
              </div>

              {/* Social Media Links Section */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                    <FaLink className="w-5 h-5 text-blue-600" />
                    Social Media Links
                  </h3>
                  <button
                    onClick={() => setEditingSocial(!editingSocial)}
                    className="flex items-center gap-2 px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg"
                  >
                    {editingSocial ? <FaTimes className="w-4 h-4" /> : <FaEdit className="w-4 h-4" />}
                    <span>{editingSocial ? 'Cancel' : 'Edit Links'}</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Twitter */}
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-gray-700">
                      <FaTwitter className="w-5 h-5 text-blue-400" />
                      Twitter
                    </label>
                    <input
                      type="url"
                      value={socialLinks.twitter}
                      onChange={(e) => handleSocialLinkChange('twitter', e.target.value)}
                      disabled={!editingSocial}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-50"
                      placeholder="https://twitter.com/username"
                    />
                  </div>

                  {/* LinkedIn */}
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-gray-700">
                      <FaLinkedin className="w-5 h-5 text-blue-700" />
                      LinkedIn
                    </label>
                    <input
                      type="url"
                      value={socialLinks.linkedin}
                      onChange={(e) => handleSocialLinkChange('linkedin', e.target.value)}
                      disabled={!editingSocial}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-50"
                      placeholder="https://linkedin.com/in/username"
                    />
                  </div>

                  {/* GitHub */}
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-gray-700">
                      <FaGithub className="w-5 h-5 text-gray-800" />
                      GitHub
                    </label>
                    <input
                      type="url"
                      value={socialLinks.github}
                      onChange={(e) => handleSocialLinkChange('github', e.target.value)}
                      disabled={!editingSocial}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-50"
                      placeholder="https://github.com/username"
                    />
                  </div>

                  {/* Instagram */}
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-gray-700">
                      <FaInstagram className="w-5 h-5 text-pink-600" />
                      Instagram
                    </label>
                    <input
                      type="url"
                      value={socialLinks.instagram}
                      onChange={(e) => handleSocialLinkChange('instagram', e.target.value)}
                      disabled={!editingSocial}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-50"
                      placeholder="https://instagram.com/username"
                    />
                  </div>

                  {/* YouTube */}
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-gray-700">
                      <FaYoutube className="w-5 h-5 text-red-600" />
                      YouTube
                    </label>
                    <input
                      type="url"
                      value={socialLinks.youtube}
                      onChange={(e) => handleSocialLinkChange('youtube', e.target.value)}
                      disabled={!editingSocial}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-50"
                      placeholder="https://youtube.com/c/username"
                    />
                  </div>

                  {/* Website */}
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-gray-700">
                      <FaGlobe className="w-5 h-5 text-green-600" />
                      Personal Website
                    </label>
                    <input
                      type="url"
                      value={socialLinks.website}
                      onChange={(e) => handleSocialLinkChange('website', e.target.value)}
                      disabled={!editingSocial}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-50"
                      placeholder="https://myportfolio.com"
                    />
                  </div>
                </div>
              </div>

              {/* Achievements Section */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                    <FaTrophy className="w-5 h-5 text-yellow-600" />
                    Achievements
                  </h3>
                  <button
                    onClick={() => setShowAddAchievement(true)}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  >
                    <FaPlus className="w-4 h-4" />
                    <span>Add Achievement</span>
                  </button>
                </div>

                {/* Add Achievement Form */}
                {showAddAchievement && (
                  <div className="bg-blue-50 rounded-xl p-6 mb-6">
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="font-bold text-gray-900">Add New Achievement</h4>
                      <button
                        onClick={() => setShowAddAchievement(false)}
                        className="text-gray-500 hover:text-gray-700"
                      >
                        <FaTimes className="w-5 h-5" />
                      </button>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-gray-700">Title *</label>
                        <input
                          type="text"
                          value={newAchievement.title}
                          onChange={(e) => setNewAchievement(prev => ({ ...prev, title: e.target.value }))}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Enter achievement title"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-gray-700">Category</label>
                        <select
                          value={newAchievement.category}
                          onChange={(e) => setNewAchievement(prev => ({ ...prev, category: e.target.value }))}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="">Select Category</option>
                          {categories.map(category => (
                            <option key={category} value={category}>{category}</option>
                          ))}
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label className="text-gray-700">Icon</label>
                        <div className="flex flex-wrap gap-2">
                          {achievementIcons.map((icon, index) => (
                            <button
                              key={index}
                              type="button"
                              onClick={() => setNewAchievement(prev => ({ ...prev, icon }))}
                              className={`p-2 rounded-lg text-2xl ${newAchievement.icon === icon ? 'bg-blue-100 border-2 border-blue-500' : 'bg-gray-100 hover:bg-gray-200'}`}
                            >
                              {icon}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-gray-700">Date</label>
                        <input
                          type="date"
                          value={newAchievement.date}
                          onChange={(e) => setNewAchievement(prev => ({ ...prev, date: e.target.value }))}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>

                      <div className="md:col-span-2 space-y-2">
                        <label className="text-gray-700">Description</label>
                        <textarea
                          value={newAchievement.description}
                          onChange={(e) => setNewAchievement(prev => ({ ...prev, description: e.target.value }))}
                          rows="3"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Describe your achievement"
                        />
                      </div>
                    </div>

                    <div className="flex justify-end gap-3 mt-6">
                      <button
                        onClick={() => setShowAddAchievement(false)}
                        className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={handleAddAchievement}
                        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2"
                      >
                        <FaSave className="w-4 h-4" />
                        Save Achievement
                      </button>
                    </div>
                  </div>
                )}

                {/* Achievements List */}
                <div className="space-y-4">
                  {achievements.map(achievement => (
                    <div key={achievement.id} className="bg-gray-50 rounded-xl p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-4">
                          <div className="text-4xl">{achievement.icon}</div>
                          <div>
                            <div className="flex items-center gap-2">
                              <h4 className="font-bold text-gray-900">
                                {editingAchievementId === achievement.id ? (
                                  <input
                                    type="text"
                                    value={achievement.title}
                                    onChange={(e) => handleAchievementChange(achievement.id, 'title', e.target.value)}
                                    className="px-2 py-1 border border-gray-300 rounded"
                                  />
                                ) : (
                                  achievement.title
                                )}
                              </h4>
                              {achievement.category && (
                                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded">
                                  {editingAchievementId === achievement.id ? (
                                    <select
                                      value={achievement.category}
                                      onChange={(e) => handleAchievementChange(achievement.id, 'category', e.target.value)}
                                      className="bg-transparent"
                                    >
                                      {categories.map(category => (
                                        <option key={category} value={category}>{category}</option>
                                      ))}
                                    </select>
                                  ) : (
                                    achievement.category
                                  )}
                                </span>
                              )}
                            </div>
                            <p className="text-gray-600 mt-2">
                              {editingAchievementId === achievement.id ? (
                                <textarea
                                  value={achievement.description}
                                  onChange={(e) => handleAchievementChange(achievement.id, 'description', e.target.value)}
                                  className="w-full px-2 py-1 border border-gray-300 rounded"
                                  rows="2"
                                />
                              ) : (
                                achievement.description
                              )}
                            </p>
                            <div className="text-sm text-gray-500 mt-2">
                              {editingAchievementId === achievement.id ? (
                                <input
                                  type="date"
                                  value={achievement.date}
                                  onChange={(e) => handleAchievementChange(achievement.id, 'date', e.target.value)}
                                  className="px-2 py-1 border border-gray-300 rounded"
                                />
                              ) : (
                                `Achieved on ${new Date(achievement.date).toLocaleDateString('en-US', { 
                                  year: 'numeric', 
                                  month: 'long', 
                                  day: 'numeric' 
                                })}`
                              )}
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex gap-2">
                          {editingAchievementId === achievement.id ? (
                            <>
                              <button
                                onClick={() => setEditingAchievementId(null)}
                                className="p-2 text-green-600 hover:bg-green-50 rounded-lg"
                              >
                                <FaSave className="w-4 h-4" />
                              </button>
                              <button
                                onClick={() => setEditingAchievementId(null)}
                                className="p-2 text-gray-500 hover:bg-gray-100 rounded-lg"
                              >
                                <FaTimes className="w-4 h-4" />
                              </button>
                            </>
                          ) : (
                            <>
                              <button
                                onClick={() => setEditingAchievementId(achievement.id)}
                                className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg"
                              >
                                <FaEdit className="w-4 h-4" />
                              </button>
                              <button
                                onClick={() => handleDeleteAchievement(achievement.id)}
                                className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                              >
                                <FaTrash className="w-4 h-4" />
                              </button>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Privacy Settings */}
              <div className="mb-8">
                <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2 mb-4">
                  <FaLock className="w-5 h-5 text-gray-600" />
                  Privacy Settings
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-gray-900">Profile Visibility</div>
                      <div className="text-sm text-gray-500">Who can see your profile</div>
                    </div>
                    <select
                      value={settings.privacy.profileVisibility}
                      onChange={(e) => handleSettingChange('privacy', 'profileVisibility', e.target.value)}
                      className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="public">Public</option>
                      <option value="friends">Friends Only</option>
                      <option value="private">Private</option>
                    </select>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-gray-900">Show Activity Status</div>
                      <div className="text-sm text-gray-500">Display when you're active</div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={settings.privacy.showActivity}
                        onChange={(e) => handleSettingChange('privacy', 'showActivity', e.target.checked)}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-gray-900">Show Email Address</div>
                      <div className="text-sm text-gray-500">Display email on profile</div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={settings.privacy.showEmail}
                        onChange={(e) => handleSettingChange('privacy', 'showEmail', e.target.checked)}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                </div>
              </div>

              {/* Notification Settings */}
              <div className="mb-8">
                <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2 mb-4">
                  <FaBell className="w-5 h-5 text-gray-600" />
                  Notification Settings
                </h3>
                
                <div className="space-y-3">
                  {Object.entries(settings.notifications).map(([key, value]) => (
                    <div key={key} className="flex items-center justify-between">
                      <span className="text-gray-900 capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={value}
                          onChange={(e) => handleSettingChange('notifications', key, e.target.checked)}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Theme & Language */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2 mb-4">
                    <FaPalette className="w-5 h-5 text-gray-600" />
                    Theme
                  </h3>
                  <select
                    value={settings.theme}
                    onChange={(e) => setSettings(prev => ({ ...prev, theme: e.target.value }))}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="light">Light</option>
                    <option value="dark">Dark</option>
                    <option value="auto">Auto (System)</option>
                  </select>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2 mb-4">
                    <FaLanguage className="w-5 h-5 text-gray-600" />
                    Language
                  </h3>
                  <select
                    value={settings.language}
                    onChange={(e) => setSettings(prev => ({ ...prev, language: e.target.value }))}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="english">English</option>
                    <option value="spanish">Spanish</option>
                    <option value="french">French</option>
                    <option value="german">German</option>
                  </select>
                </div>
              </div>

              {/* Danger Zone */}
              <div className="border-t border-gray-200 pt-8">
                <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2 mb-4">
                  <FaExclamationTriangle className="w-5 h-5 text-red-600" />
                  Account Actions
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-red-50 rounded-lg">
                    <div>
                      <div className="font-medium text-gray-900">Download Your Data</div>
                      <div className="text-sm text-gray-600">Get a copy of your data</div>
                    </div>
                    <button
                      onClick={handleDownloadData}
                      className="flex items-center gap-2 px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg"
                    >
                      <FaDownload className="w-4 h-4" />
                      Download
                    </button>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-red-50 rounded-lg">
                    <div>
                      <div className="font-medium text-gray-900">Logout</div>
                      <div className="text-sm text-gray-600">Sign out from your account</div>
                    </div>
                    <button
                      onClick={handleLogout}
                      className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                    >
                      <FaSignOutAlt className="w-4 h-4" />
                      Logout
                    </button>
                  </div>
                </div>
              </div>

              {/* Save Button */}
              <div className="flex justify-end gap-3 mt-8 pt-8 border-t border-gray-200">
                <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50">
                  Cancel
                </button>
                <button className="px-6 py-3 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-lg flex items-center gap-2">
                  <FaSave className="w-5 h-5" />
                  Save All Changes
                </button>
              </div>
            </div>

            {/* Help & Support */}
            <div className="bg-linear-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-4">Need Help?</h3>
                  <p className="opacity-90 mb-6">If you have any questions or need assistance with your settings, our support team is here to help.</p>
                  <button className="px-6 py-2 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100">
                    Contact Support
                  </button>
                </div>
                <FaQuestionCircle className="w-16 h-16 opacity-20" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySettings;