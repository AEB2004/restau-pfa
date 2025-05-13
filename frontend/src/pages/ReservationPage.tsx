import React, { useState } from 'react';
import Button from '../components/ui/Button';
import TableSelector from '../components/reservation/TableSelector';
import ReservationForm from '../components/reservation/ReservationForm';
import { useReservation } from '../context/ReservationContext';

const ReservationPage = () => {
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [selectedTable, setSelectedTable] = useState<number | null>(null);
  const { createReservation, isLoading } = useReservation();

  const handleDateTimeSubmit = () => {
    if (selectedDate && selectedTime) {
      setStep(2);
    }
  };

  const handleTableSubmit = () => {
    if (selectedTable) {
      setStep(3);
    }
  };

  const handleReservationSubmit = async (formData: any) => {
    if (selectedDate && selectedTime && selectedTable) {
      await createReservation({
        date: selectedDate,
        time: selectedTime,
        tableId: selectedTable,
        ...formData
      });
      // Redirect or show confirmation
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-16 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-center">Reserve Your Table</h1>
          <p className="text-neutral-600 text-center mb-8">
            Experience the pinnacle of fine dining at L'Élégance
          </p>

          {/* Steps Progress */}
          <div className="flex justify-between mb-12 relative">
            <div className="w-full absolute top-1/2 h-1 bg-neutral-200 -translate-y-1/2 z-0"></div>
            {[1, 2, 3].map((i) => (
              <div key={i} className="relative z-10 flex flex-col items-center">
                <div 
                  className={`w-10 h-10 flex items-center justify-center rounded-full ${
                    step >= i 
                      ? 'bg-[#7D0633] text-white' 
                      : 'bg-neutral-200 text-neutral-600'
                  }`}
                >
                  {i}
                </div>
                <span 
                  className={`mt-2 text-sm ${
                    step >= i 
                      ? 'text-[#7D0633] font-medium' 
                      : 'text-neutral-500'
                  }`}
                >
                  {i === 1 ? 'Date & Time' : i === 2 ? 'Select Table' : 'Details'}
                </span>
              </div>
            ))}
          </div>

          {/* Step 1: Date and Time */}
          {step === 1 && (
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-6">Select Date & Time</h2>
              
              {/* Date Selection */}
              <div className="mb-6">
                <label htmlFor="date" className="block text-sm font-medium text-neutral-700 mb-2">
                  Date
                </label>
                <input
                  type="date"
                  id="date"
                  className="form-input"
                  min={new Date().toISOString().split('T')[0]}
                  onChange={(e) => setSelectedDate(e.target.value ? new Date(e.target.value) : null)}
                />
              </div>
              
              {/* Time Selection */}
              <div className="mb-8">
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Time
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {['18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30'].map((time) => (
                    <button
                      key={time}
                      type="button"
                      className={`py-2 px-3 rounded-md border transition-colors ${
                        selectedTime === time
                          ? 'bg-[#7D0633] text-white border-[#7D0633]'
                          : 'bg-white text-neutral-700 border-neutral-300 hover:border-[#7D0633]'
                      }`}
                      onClick={() => setSelectedTime(time)}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
              
              <Button
                onClick={handleDateTimeSubmit}
                disabled={!selectedDate || !selectedTime}
                fullWidth
              >
                Continue to Table Selection
              </Button>
            </div>
          )}

          {/* Step 2: Table Selection */}
          {step === 2 && (
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-6">Select Your Table</h2>
              
              <div className="mb-4">
                <p className="text-neutral-600">
                  Reservation for {selectedDate?.toLocaleDateString()} at {selectedTime}
                </p>
              </div>
              
              <div className="mb-8">
                <TableSelector 
                  selectedTable={selectedTable} 
                  onSelectTable={setSelectedTable}
                  date={selectedDate}
                  time={selectedTime}
                />
              </div>
              
              <div className="flex justify-between">
                <Button variant="outline" onClick={() => setStep(1)}>
                  Back
                </Button>
                <Button
                  onClick={handleTableSubmit}
                  disabled={!selectedTable}
                >
                  Continue to Details
                </Button>
              </div>
            </div>
          )}

          {/* Step 3: Customer Details */}
          {step === 3 && (
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-6">Complete Your Reservation</h2>
              
              <div className="mb-6">
                <p className="text-neutral-600">
                  Reservation for {selectedDate?.toLocaleDateString()} at {selectedTime}, Table #{selectedTable}
                </p>
              </div>
              
              <ReservationForm
                onSubmit={handleReservationSubmit}
                isLoading={isLoading}
                onBack={() => setStep(2)}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReservationPage;