// React 16.x code​​​​​​‌‌‌​​‌​‌​‌​​‌​​‌​​‌‌‌‌‌‌‌ below
import React, { createContext, useState, useContext } from "react";

// Default settings
const defaultSettings = {
  notifications: true,
  darkMode: false
};

// Create SettingsContext
const SettingsContext = createContext(
    {
    settings: defaultSettings,
    toggleNotifications: () => {},
    toggleDarkMode: () => {}
    }
);

// Create a custom hook useSettings
// It should use the SettingsContext and return current settings and toggle functions
const useSettings = () => {
    const context = useContext(SettingsContext);
    if (!context) {
        throw new Error("useSettings must be used within a SettingsProvider");
    } 
    return context;
}

// SettingsProvider component
function SettingsProvider({ children }) {
  // Implement the SettingsProvider
  // 1. Create state for the settings using defaultSettings
  // 2. Create functions to toggle notifications and dark mode
  // 3. Return the SettingsContext.Provider with the appropriate value: 
  //    {settings, toggleNotifications, toggleDarkMode}
    const [settings, setSettings] = useState(defaultSettings);
    const toggleNotifications = () => {
        setSettings(prev => ({...prev, notifications: !prev.notifications}));
    }
    const toggleDarkMode = () => {
        setSettings(prev => ({...prev, darkMode: !prev.darkMode}));
    }

    const value = {settings, toggleNotifications, toggleDarkMode};
  
  return (
    <SettingsContext.Provider value={value}>
        <div>{children}</div>
    </SettingsContext.Provider>
  );
}

// SettingsControls component
function SettingsControls() {
  // Use the useSettings hook to get settings and toggle functions
    const {settings, toggleNotifications, toggleDarkMode} = useSettings();
  
  return (
    <div className="flex flex-col gap-4 p-4 bg-gray-50 rounded-lg shadow-inner">
        <h2 className="text-lg font-semibold text-gray-800">Settings Controls</h2>

        {/* Notifications Toggle */}
        <div className="flex items-center justify-between">
            <span className="text-gray-700">Notifications</span>
            <label className="relative inline-flex items-center cursor-pointer">
            <input
                type="checkbox"
                checked={settings.notifications}
                onChange={toggleNotifications}
                className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 rounded-full peer peer-checked:bg-blue-600 transition-all duration-300"></div>
            <div className="absolute left-0.5 top-0.5 bg-white w-5 h-5 rounded-full transition-transform duration-300 peer-checked:translate-x-full"></div>
            </label>
        </div>

        {/* Dark Mode Toggle */}
        <div className="flex items-center justify-between">
            <span className="text-gray-700">Dark Mode</span>
            <label className="relative inline-flex items-center cursor-pointer">
            <input
                type="checkbox"
                checked={settings.darkMode}
                onChange={toggleDarkMode}
                className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 rounded-full peer peer-checked:bg-blue-600 transition-all duration-300"></div>
            <div className="absolute left-0.5 top-0.5 bg-white w-5 h-5 rounded-full transition-transform duration-300 peer-checked:translate-x-full"></div>
            </label>
        </div>
    </div>

  );
}

// DisplaySettings component
function DisplaySettings() {
  // TODO: Use the useSettings hook to get current settings
  const {settings} = useSettings();
  
  return (
    <div className="flex flex-col gap-4 p-4 bg-gray-50 rounded-lg shadow-md border border-gray-200">
    <h2 className="text-lg font-semibold text-gray-800">Current Settings</h2>

    <ul className="space-y-2">
        <li className="flex items-center justify-between">
        <span className="text-gray-700">Notifications</span>
        <span
            className={`text-xs font-medium px-2 py-1 rounded-full 
            ${settings.notifications ? "bg-green-100 text-green-700" : "bg-gray-200 text-gray-600"}`}
        >
            {settings.notifications ? "On" : "Off"}
        </span>
        </li>
        <li className="flex items-center justify-between">
        <span className="text-gray-700">Dark Mode</span>
        <span
            className={`text-xs font-medium px-2 py-1 rounded-full 
            ${settings.darkMode ? "bg-green-100 text-green-700" : "bg-gray-200 text-gray-600"}`}
        >
            {settings.darkMode ? "On" : "Off"}
        </span>
        </li>
    </ul>
    </div>

  );
}

// Main App component
function SettingManager() {
  return (
    <SettingsProvider>
      <div >
        <h1 className="text-2xl font-bold mb-6 text-gray-800">Settings Manager</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <SettingsControls />

            <DisplaySettings />
        </div>
      </div>
    </SettingsProvider>
  );
}

/* Ignore and do not change the code below */
/**
 * Preview function
 * This function renders the `App` component and is used for visual rendering
 * during the challenge. Candidates do not need to modify this.
 */
export function Preview() {
  return <SettingManager />;
}
/* Ignore and do not change the code above */

// Export the main App component
export default SettingManager;
