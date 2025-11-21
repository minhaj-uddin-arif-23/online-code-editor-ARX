"use client";

import { useState } from "react";
import { Settings, Bell, User, Shield, Palette, HomeIcon } from "lucide-react";
import Link from "next/link";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg p-6 hidden md:block">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Settings size={22} /> Settings
        </h2>

        <ul className="space-y-3 text-gray-700">
          <li
            onClick={() => setActiveTab("profile")}
            className={`cursor-pointer p-2 rounded-lg flex items-center gap-2 ${
              activeTab === "profile"
                ? "bg-red-100 text-red-600"
                : "hover:bg-gray-100"
            }`}
          >
            <User size={18} /> Profile
          </li>

          <li
            onClick={() => setActiveTab("notifications")}
            className={`cursor-pointer p-2 rounded-lg flex items-center gap-2 ${
              activeTab === "notifications"
                ? "bg-red-100 text-red-600"
                : "hover:bg-gray-100"
            }`}
          >
            <Bell size={18} /> Notifications
          </li>

          <li
            onClick={() => setActiveTab("security")}
            className={`cursor-pointer p-2 rounded-lg flex items-center gap-2 ${
              activeTab === "security"
                ? "bg-red-100 text-red-600"
                : "hover:bg-gray-100"
            }`}
          >
            <Shield size={18} /> Security
          </li>

          <li
            onClick={() => setActiveTab("appearance")}
            className={`cursor-pointer p-2 rounded-lg flex items-center gap-2 ${
              activeTab === "appearance"
                ? "bg-red-100 text-red-600"
                : "hover:bg-gray-100"
            }`}
          >
            <Palette size={18} /> Appearance
          </li>
          <li className="">
            <Link
              href={"/dashboard"}
              className="cursor-pointer p-2 rounded-lg flex items-center gap-2"
            >
              {" "}
              <HomeIcon size={18} /> Home
            </Link>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        {/* MOBILE Title */}
        <div className="md:hidden mb-6">
          <h2 className="text-3xl font-bold">Settings</h2>
        </div>

        {/* PROFILE TAB */}
        {activeTab === "profile" && (
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">Profile Settings</h3>
            <p className="text-gray-600">
              Manage your display name, avatar, and account visibility
              preferences.
            </p>

            <div className="p-4 bg-white shadow rounded-xl">
              <p className="font-medium">Avatar</p>
              <p className="text-sm text-gray-500">
                Change your profile picture to customise your identity.
              </p>
            </div>

            <div className="p-4 bg-white shadow rounded-xl">
              <p className="font-medium">Display Name</p>
              <p className="text-sm text-gray-500">
                Update how your name appears across the platform.
              </p>
            </div>
          </div>
        )}

        {/* NOTIFICATIONS */}
        {activeTab === "notifications" && (
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">Notification Settings</h3>
            <p className="text-gray-600">
              Control how you receive updates and platform alerts.
            </p>

            <div className="p-4 bg-white shadow rounded-xl">
              <p className="font-medium">Push Notifications</p>
              <p className="text-sm text-gray-500">
                Enable alerts for updates, new messages, and important activity.
              </p>
            </div>

            <div className="p-4 bg-white shadow rounded-xl">
              <p className="font-medium">Email Updates</p>
              <p className="text-sm text-gray-500">
                Receive weekly summaries and important announcements.
              </p>
            </div>
          </div>
        )}

        {/* SECURITY */}
        {activeTab === "security" && (
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">Security Settings</h3>
            <p className="text-gray-600">
              Update your security preferences and protect your account.
            </p>

            <div className="p-4 bg-white shadow rounded-xl">
              <p className="font-medium">Two-Factor Authentication</p>
              <p className="text-sm text-gray-500">
                Add an extra layer of protection to your account.
              </p>
            </div>

            <div className="p-4 bg-white shadow rounded-xl">
              <p className="font-medium">Active Sessions</p>
              <p className="text-sm text-gray-500">
                Review and manage devices logged into your account.
              </p>
            </div>
          </div>
        )}

        {/* APPEARANCE */}
        {activeTab === "appearance" && (
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">Appearance</h3>
            <p className="text-gray-600">
              Customise the UI theme and visual experience.
            </p>

            <div className="p-4 bg-white shadow rounded-xl">
              <p className="font-medium">Theme</p>
              <p className="text-sm text-gray-500">
                Choose between light mode, dark mode, or system default.
              </p>
            </div>

            <div className="p-4 bg-white shadow rounded-xl">
              <p className="font-medium">Accent Color</p>
              <p className="text-sm text-gray-500">
                Change the highlight color used across the interface.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
