import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Calendar, CreditCard, Settings, AlertCircle } from 'lucide-react';
import Button from '../components/ui/Button';
import { useAuth } from '../context/AuthContext';
import { useReservation } from '../context/ReservationContext';

const ProfilePage = () => {
  const { user, logout } = useAuth();
  const { reservations, cancelReservation } = useReservation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('profile');

  if (!user) {
    navigate('/login');
    return null;
  }

  // Mock user profile data
  const profile = {
    name: user.name,
    email: user.email,
    phone: '+33 6 12 34 56 78',
    address: '123 Rue de Paris, 75001 Paris, France',
    preferences: {
      dietaryRestrictions: ['None'],
      favoriteWines: ['Bordeaux', 'Burgundy'],
      seatingPreference: 'Window'
    },
    loyaltyPoints: 450
  };

  // Mock reservation history
  const reservationHistory = [
    {
      id: '101',
      date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days in future
      time: '19:30',
      guests: 2,
      status: 'confirmed'
    },
    {
      id: '102',
      date: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000), // 14 days in past
      time: '20:00',
      guests: 4,
      status: 'completed'
    },
    {
      id: '103',
      date: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000), // 30 days in past
      time: '19:00',
      guests: 2,
      status: 'completed'
    }
  ];

  const handleCancelReservation = async (id: string) => {
    if (window.confirm('Are you sure you want to cancel this reservation?')) {
      await cancelReservation(id);
    }
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div className="min-h-screen pt-24 pb-16 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            {/* Profile Header */}
            <div className="bg-[#7D0633] text-white p-6">
              <h1 className="text-2xl font-bold">Welcome, {profile.name}</h1>
              <p>Manage your account and reservations</p>
            </div>
            
            {/* Tab Navigation */}
            <div className="flex border-b">
              <button
                className={`flex items-center px-6 py-3 focus:outline-none ${
                  activeTab === 'profile'
                    ? 'border-b-2 border-[#7D0633] text-[#7D0633] font-medium'
                    : 'text-neutral-500 hover:text-neutral-800'
                }`}
                onClick={() => setActiveTab('profile')}
              >
                <User size={18} className="mr-2" />
                Profile
              </button>
              <button
                className={`flex items-center px-6 py-3 focus:outline-none ${
                  activeTab === 'reservations'
                    ? 'border-b-2 border-[#7D0633] text-[#7D0633] font-medium'
                    : 'text-neutral-500 hover:text-neutral-800'
                }`}
                onClick={() => setActiveTab('reservations')}
              >
                <Calendar size={18} className="mr-2" />
                Reservations
              </button>
              <button
                className={`flex items-center px-6 py-3 focus:outline-none ${
                  activeTab === 'preferences'
                    ? 'border-b-2 border-[#7D0633] text-[#7D0633] font-medium'
                    : 'text-neutral-500 hover:text-neutral-800'
                }`}
                onClick={() => setActiveTab('preferences')}
              >
                <Settings size={18} className="mr-2" />
                Preferences
              </button>
            </div>
            
            {/* Profile Tab */}
            {activeTab === 'profile' && (
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="md:col-span-2">
                    <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div>
                        <label className="block text-sm font-medium text-neutral-500 mb-1">
                          Full Name
                        </label>
                        <p className="font-medium">{profile.name}</p>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-neutral-500 mb-1">
                          Email Address
                        </label>
                        <p className="font-medium">{profile.email}</p>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-neutral-500 mb-1">
                          Phone Number
                        </label>
                        <p className="font-medium">{profile.phone}</p>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-neutral-500 mb-1">
                          Address
                        </label>
                        <p className="font-medium">{profile.address}</p>
                      </div>
                    </div>
                    
                    <Button variant="outline">
                      Edit Profile
                    </Button>
                  </div>
                  
                  <div className="bg-neutral-50 p-4 rounded-lg">
                    <div className="text-center mb-4">
                      <h3 className="font-semibold text-lg">Loyalty Program</h3>
                      <div className="text-3xl font-bold text-[#7D0633] mt-2">
                        {profile.loyaltyPoints} points
                      </div>
                    </div>
                    
                    <div className="bg-white p-3 rounded border border-neutral-200 mb-3">
                      <p className="text-sm mb-2">Your current membership level:</p>
                      <div className="font-medium">Gold Member</div>
                    </div>
                    
                    <div className="text-sm text-neutral-600">
                      <p>You need 50 more points to reach Platinum level.</p>
                      <button className="text-[#7D0633] hover:underline mt-2">
                        View benefits
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Reservations Tab */}
            {activeTab === 'reservations' && (
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-4">Your Reservations</h2>
                
                <div className="mb-8">
                  <h3 className="font-medium text-neutral-700 mb-3">Upcoming Reservations</h3>
                  
                  {reservationHistory.filter(r => r.date > new Date()).length > 0 ? (
                    <div className="space-y-4">
                      {reservationHistory
                        .filter(r => r.date > new Date())
                        .map(reservation => (
                          <div key={reservation.id} className="border rounded-lg overflow-hidden">
                            <div className="bg-neutral-50 px-4 py-3 flex justify-between items-center">
                              <div className="font-medium">{formatDate(reservation.date)}</div>
                              <div>
                                <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                  {reservation.status}
                                </span>
                              </div>
                            </div>
                            <div className="p-4">
                              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                                <div>
                                  <p className="text-sm text-neutral-500">Time</p>
                                  <p className="font-medium">{reservation.time}</p>
                                </div>
                                <div>
                                  <p className="text-sm text-neutral-500">Party Size</p>
                                  <p className="font-medium">{reservation.guests} guests</p>
                                </div>
                                <div>
                                  <p className="text-sm text-neutral-500">Reservation #</p>
                                  <p className="font-medium">{reservation.id}</p>
                                </div>
                              </div>
                              <div className="flex space-x-2">
                                <Button variant="outline" size="sm">
                                  Modify
                                </Button>
                                <Button 
                                  variant="outline" 
                                  size="sm"
                                  className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
                                  onClick={() => handleCancelReservation(reservation.id)}
                                >
                                  Cancel
                                </Button>
                              </div>
                            </div>
                          </div>
                        ))}
                    </div>
                  ) : (
                    <div className="bg-white border rounded-lg p-6 text-center">
                      <AlertCircle size={32} className="mx-auto mb-2 text-neutral-400" />
                      <p className="text-neutral-600">You don't have any upcoming reservations.</p>
                      <Button 
                        variant="primary" 
                        className="mt-4"
                        onClick={() => navigate('/reservations')}
                      >
                        Make a Reservation
                      </Button>
                    </div>
                  )}
                </div>
                
                <div>
                  <h3 className="font-medium text-neutral-700 mb-3">Past Reservations</h3>
                  
                  <div className="space-y-4">
                    {reservationHistory
                      .filter(r => r.date <= new Date())
                      .map(reservation => (
                        <div key={reservation.id} className="border rounded-lg overflow-hidden">
                          <div className="bg-neutral-50 px-4 py-3 flex justify-between items-center">
                            <div className="font-medium">{formatDate(reservation.date)}</div>
                            <div>
                              <span className="px-3 py-1 rounded-full text-xs font-medium bg-neutral-200 text-neutral-700">
                                {reservation.status}
                              </span>
                            </div>
                          </div>
                          <div className="p-4">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                              <div>
                                <p className="text-sm text-neutral-500">Time</p>
                                <p className="font-medium">{reservation.time}</p>
                              </div>
                              <div>
                                <p className="text-sm text-neutral-500">Party Size</p>
                                <p className="font-medium">{reservation.guests} guests</p>
                              </div>
                              <div>
                                <p className="text-sm text-neutral-500">Reservation #</p>
                                <p className="font-medium">{reservation.id}</p>
                              </div>
                            </div>
                            <Button variant="outline" size="sm">
                              Leave Review
                            </Button>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            )}
            
            {/* Preferences Tab */}
            {activeTab === 'preferences' && (
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-4">Your Preferences</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-medium mb-3">Dining Preferences</h3>
                    
                    <div className="space-y-4 mb-6">
                      <div>
                        <label className="block text-sm font-medium text-neutral-500 mb-1">
                          Dietary Restrictions
                        </label>
                        <div className="flex flex-wrap gap-2">
                          {profile.preferences.dietaryRestrictions.map((diet, index) => (
                            <span 
                              key={index}
                              className="bg-neutral-100 px-3 py-1 rounded-full text-sm"
                            >
                              {diet}
                            </span>
                          ))}
                          <button className="text-[#7D0633] text-sm hover:underline">
                            + Add
                          </button>
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-neutral-500 mb-1">
                          Favorite Wines
                        </label>
                        <div className="flex flex-wrap gap-2">
                          {profile.preferences.favoriteWines.map((wine, index) => (
                            <span 
                              key={index}
                              className="bg-neutral-100 px-3 py-1 rounded-full text-sm"
                            >
                              {wine}
                            </span>
                          ))}
                          <button className="text-[#7D0633] text-sm hover:underline">
                            + Add
                          </button>
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-neutral-500 mb-1">
                          Seating Preference
                        </label>
                        <p className="font-medium">{profile.preferences.seatingPreference}</p>
                      </div>
                    </div>
                    
                    <Button variant="outline">
                      Update Preferences
                    </Button>
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-3">Communication Preferences</h3>
                    
                    <div className="space-y-4 mb-6">
                      <div className="flex items-center justify-between">
                        <label className="text-sm font-medium">
                          Reservation Confirmations
                        </label>
                        <div className="relative inline-block w-12 h-6 rounded-full bg-[#7D0633]">
                          <span className="absolute right-1 top-1 w-4 h-4 rounded-full bg-white"></span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <label className="text-sm font-medium">
                          Special Offers & Events
                        </label>
                        <div className="relative inline-block w-12 h-6 rounded-full bg-[#7D0633]">
                          <span className="absolute right-1 top-1 w-4 h-4 rounded-full bg-white"></span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <label className="text-sm font-medium">
                          SMS Notifications
                        </label>
                        <div className="relative inline-block w-12 h-6 rounded-full bg-neutral-300">
                          <span className="absolute left-1 top-1 w-4 h-4 rounded-full bg-white"></span>
                        </div>
                      </div>
                    </div>
                    
                    <Button variant="outline">
                      Save Communication Preferences
                    </Button>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t">
                  <h3 className="font-medium mb-3">Account Settings</h3>
                  
                  <Button 
                    variant="outline" 
                    className="mr-3"
                  >
                    Change Password
                  </Button>
                  
                  <Button 
                    variant="outline"
                    className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
                    onClick={logout}
                  >
                    Sign Out
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;