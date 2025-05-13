// import React, { createContext, useContext, useState } from 'react';

// interface Reservation {
//   id: string;
//   date: Date;
//   time: string;
//   tableId: number;
//   guestName: string;
//   guestEmail: string;
//   guestPhone: string;
//   guests: number;
//   specialRequests?: string;
//   status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
// }

// interface ReservationContextType {
//   reservations: Reservation[];
//   isLoading: boolean;
//   createReservation: (data: Partial<Reservation>) => Promise<Reservation>;
//   updateReservation: (id: string, data: Partial<Reservation>) => Promise<Reservation>;
//   cancelReservation: (id: string) => Promise<void>;
//   getAvailableTables: (date: Date, time: string) => Promise<any[]>;
// }

// const ReservationContext = createContext<ReservationContextType | undefined>(undefined);

// export const ReservationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   const [reservations, setReservations] = useState<Reservation[]>([]);
//   const [isLoading, setIsLoading] = useState(false);

//   // Create a new reservation
//   const createReservation = async (data: Partial<Reservation>): Promise<Reservation> => {
//     setIsLoading(true);
//     try {
//       // Simulate API call
//       await new Promise(resolve => setTimeout(resolve, 1500));
      
//       const newReservation: Reservation = {
//         id: Date.now().toString(),
//         date: data.date!,
//         time: data.time!,
//         tableId: data.tableId!,
//         guestName: `${data.firstName} ${data.lastName}`,
//         guestEmail: data.email!,
//         guestPhone: data.phone!,
//         guests: data.guests || 1,
//         specialRequests: data.specialRequests,
//         status: 'confirmed',
//       };
      
//       setReservations([...reservations, newReservation]);
//       return newReservation;
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // Update an existing reservation
//   const updateReservation = async (id: string, data: Partial<Reservation>): Promise<Reservation> => {
//     setIsLoading(true);
//     try {
//       // Simulate API call
//       await new Promise(resolve => setTimeout(resolve, 1000));
      
//       const updatedReservations = reservations.map(res => 
//         res.id === id ? { ...res, ...data } : res
//       );
      
//       setReservations(updatedReservations);
//       return updatedReservations.find(res => res.id === id)!;
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // Cancel a reservation
//   const cancelReservation = async (id: string): Promise<void> => {
//     setIsLoading(true);
//     try {
//       // Simulate API call
//       await new Promise(resolve => setTimeout(resolve, 1000));
      
//       const updatedReservations = reservations.map(res => 
//         res.id === id ? { ...res, status: 'cancelled' } : res
//       );
      
//       setReservations(updatedReservations);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // Get available tables for a specific date and time
//   const getAvailableTables = async (date: Date, time: string) => {
//     setIsLoading(true);
//     try {
//       // Simulate API call
//       await new Promise(resolve => setTimeout(resolve, 1000));
      
//       // This would be replaced with actual API data
//       return [
//         { id: 1, status: 'available' },
//         { id: 2, status: 'available' },
//         { id: 3, status: 'reserved' },
//         { id: 4, status: 'available' },
//         { id: 5, status: 'occupied' },
//         { id: 6, status: 'available' },
//         { id: 7, status: 'available' },
//         { id: 8, status: 'available' },
//       ];
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <ReservationContext.Provider value={{
//       reservations,
//       isLoading,
//       createReservation,
//       updateReservation,
//       cancelReservation,
//       getAvailableTables
//     }}>
//       {children}
//     </ReservationContext.Provider>
//   );
// };

// export const useReservation = () => {
//   const context = useContext(ReservationContext);
//   if (context === undefined) {
//     throw new Error('useReservation must be used within a ReservationProvider');
//   }
//   return context;
// };