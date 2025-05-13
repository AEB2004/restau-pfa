import React, { useEffect, useState } from 'react';
import { Calendar, Clock, Users, Info } from 'lucide-react';
import './Reservation.css';
import axios from 'axios'; 

interface Table {
  id: number;
  number: number;
  seats: number;
  status: 'free' | 'reserved' | 'occupied';
  type: 'round' | 'rectangular';
  x: number;
  y: number;
  width: number;
  height: number;
}

const Reservation: React.FC = () => {
  const [date, setDate] = useState<string>('');
  const [time, setTime] = useState<string>('');
  const [party, setParty] = useState<string>('2');
  const [selectedTable, setSelectedTable] = useState<number | null>(null);
  const [step, setStep] = useState<number>(1);

  // Sample table data
  const tables: Table[] = [
    { id: 1, number: 1, seats: 2, status: 'free', type: 'round', x: 10, y: 20, width: 50, height: 50 },
    { id: 2, number: 2, seats: 2, status: 'reserved', type: 'round', x: 80, y: 20, width: 50, height: 50 },
    { id: 3, number: 3, seats: 4, status: 'free', type: 'rectangular', x: 150, y: 20, width: 70, height: 50 },
    { id: 4, number: 4, seats: 4, status: 'occupied', type: 'rectangular', x: 230, y: 20, width: 70, height: 50 },
    { id: 5, number: 5, seats: 6, status: 'free', type: 'rectangular', x: 10, y: 100, width: 90, height: 60 },
    { id: 6, number: 6, seats: 6, status: 'free', type: 'rectangular', x: 120, y: 100, width: 90, height: 60 },
    { id: 7, number: 7, seats: 8, status: 'reserved', type: 'rectangular', x: 230, y: 100, width: 110, height: 70 },
    { id: 8, number: 8, seats: 2, status: 'free', type: 'round', x: 10, y: 190, width: 50, height: 50 },
    { id: 9, number: 9, seats: 2, status: 'free', type: 'round', x: 80, y: 190, width: 50, height: 50 },
    { id: 10, number: 10, seats: 4, status: 'free', type: 'rectangular', x: 150, y: 190, width: 70, height: 50 },
    { id: 11, number: 11, seats: 4, status: 'free', type: 'rectangular', x: 230, y: 190, width: 70, height: 50 },
    { id: 12, number: 12, seats: 6, status: 'free', type: 'rectangular', x: 10, y: 270, width: 90, height: 60 },
  ];

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  };

  const handleTimeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTime(e.target.value);
  };

  const handlePartyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setParty(e.target.value);
  };

  const handleTableClick = (tableId: number) => {
    const table = tables.find(t => t.id === tableId);
    if (table && table.status === 'free') {
      setSelectedTable(tableId);
    }
  };

  const isTableSelectable = (table: Table) => {
    const partySize = parseInt(party, 10);
    return table.status === 'free' && table.seats >= partySize;
  };

  const nextStep = () => {
    if (step === 1 && date && time && party) {
      setStep(2);
    } else if (step === 2 && selectedTable !== null) {
      setStep(3);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };



  const submitReservation = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const formData = {
      date,
      time,
      nombrepersonnes: parseInt(party, 10),
      party,
      table_id: selectedTable,
      user_id: 1, 
      special_requests: (e.target as any).specialRequests.value,
    };
  
    try {
      await axios.get('/sanctum/csrf-cookie');
      

      await axios.post('http://localhost:8000/api/reservations', formData, { headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`, 
      }, });

      alert("Réservation confirmée !");
      // Redirige ou réinitialise le formulaire
    } catch (error) {
      alert("Erreur lors de la réservation : " + error.response?.data?.message);
    }
  };

  return (
    <div className="reservation-page section">
      <div className="container">
        <h1 className="section-title">Réservation de table</h1>
        <p className="section-subtitle">Choisissez votre date, heure et table préférée</p>

        <div className="reservation-process">
          <div className="reservation-steps">
            <div className={`step ${step >= 1 ? 'active' : ''}`}>
              <div className="step-number">1</div>
              <div className="step-text">Détails</div>
            </div>
            <div className="step-connector"></div>
            <div className={`step ${step >= 2 ? 'active' : ''}`}>
              <div className="step-number">2</div>
              <div className="step-text">Table</div>
            </div>
            <div className="step-connector"></div>
            <div className={`step ${step >= 3 ? 'active' : ''}`}>
              <div className="step-number">3</div>
              <div className="step-text">Confirmation</div>
            </div>
          </div>

          <div className="reservation-content">
            {step === 1 && (
              <div className="reservation-details">
                <div className="form-group">
                  <label htmlFor="date" className="form-label">
                    <Calendar size={16} className="icon" /> Date
                  </label>
                  <input 
                    type="date" 
                    id="date" 
                    className="form-input" 
                    value={date} 
                    onChange={handleDateChange}
                    min={new Date().toISOString().split('T')[0]}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="time" className="form-label">
                    <Clock size={16} className="icon" /> Heure
                  </label>
                  <select 
                    id="time" 
                    className="form-select" 
                    value={time} 
                    onChange={handleTimeChange}
                    required
                  >
                    <option value="">Sélectionnez une heure</option>
                    <option value="12:00">12:00</option>
                    <option value="12:30">12:30</option>
                    <option value="13:00">13:00</option>
                    <option value="13:30">13:30</option>
                    <option value="14:00">14:00</option>
                    <option value="19:00">19:00</option>
                    <option value="19:30">19:30</option>
                    <option value="20:00">20:00</option>
                    <option value="20:30">20:30</option>
                    <option value="21:00">21:00</option>
                    <option value="21:30">21:30</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="party" className="form-label">
                    <Users size={16} className="icon" /> Nombre de personnes
                  </label>
                  <select 
                    id="party" 
                    className="form-select" 
                    value={party} 
                    onChange={handlePartyChange}
                    required
                  >
                    <option value="1">1 personne</option>
                    <option value="2">2 personnes</option>
                    <option value="3">3 personnes</option>
                    <option value="4">4 personnes</option>
                    <option value="5">5 personnes</option>
                    <option value="6">6 personnes</option>
                    <option value="7">7 personnes</option>
                    <option value="8">8 personnes</option>
                  </select>
                </div>

                <div className="reservation-actions">
                  <button 
                    className="btn btn-primary" 
                    onClick={nextStep} 
                    disabled={!date || !time || !party}
                  >
                    Suivant
                  </button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="table-selection">
                <div className="table-legend">
                  <div className="legend-item">
                    <div className="legend-color free"></div>
                    <span>Disponible</span>
                  </div>
                  <div className="legend-item">
                    <div className="legend-color reserved"></div>
                    <span>Réservée</span>
                  </div>
                  <div className="legend-item">
                    <div className="legend-color occupied"></div>
                    <span>Occupée</span>
                  </div>
                </div>

                <div className="restaurant-map">
                  <div className="restaurant-entrance">Entrée</div>
                  <div className="restaurant-bar">Bar</div>
                  <div className="restaurant-kitchen">Cuisine</div>
                  
                  {tables.map(table => (
                    <div 
                      key={table.id}
                      className={`table table-${table.type} table-${table.status} ${selectedTable === table.id ? 'selected' : ''} ${isTableSelectable(table) ? 'selectable' : 'not-selectable'}`}
                      style={{
                        left: `${table.x}px`,
                        top: `${table.y}px`,
                        width: `${table.width}px`,
                        height: `${table.height}px`
                      }}
                      onClick={() => isTableSelectable(table) && handleTableClick(table.id)}
                    >
                      <span className="table-number">{table.number}</span>
                      <span className="table-seats">{table.seats}p</span>
                    </div>
                  ))}
                </div>

                <div className="table-selection-info">
                  {selectedTable ? (
                    <div className="selected-table-info">
                      <h3>Table sélectionnée</h3>
                      <p>
                        Table N°{tables.find(t => t.id === selectedTable)?.number} - 
                        {tables.find(t => t.id === selectedTable)?.seats} personnes
                      </p>
                    </div>
                  ) : (
                    <div className="no-table-selected">
                      <Info size={18} />
                      <p>Veuillez sélectionner une table disponible</p>
                    </div>
                  )}
                </div>

                <div className="reservation-actions">
                  <button className="btn btn-outline" onClick={prevStep}>
                    Retour
                  </button>
                  <button 
                    className="btn btn-primary" 
                    onClick={nextStep} 
                    disabled={selectedTable === null}
                  >
                    Suivant
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="reservation-confirmation">
                <div className="confirmation-details">
                  <h3>Vérifiez vos informations</h3>
                  
                  <div className="detail-item">
                    <span className="detail-label">Date:</span>
                    <span className="detail-value">{date}</span>
                  </div>
                  
                  <div className="detail-item">
                    <span className="detail-label">Heure:</span>
                    <span className="detail-value">{time}</span>
                  </div>
                  
                  <div className="detail-item">
                    <span className="detail-label">Personnes:</span>
                    <span className="detail-value">{party}</span>
                  </div>
                  
                  <div className="detail-item">
                    <span className="detail-label">Table:</span>
                    <span className="detail-value">N°{tables.find(t => t.id === selectedTable)?.number}</span>
                  </div>
                </div>

                <form onSubmit={submitReservation} className="contact-form">
                  <h3>Vos coordonnées</h3>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="firstName" className="form-label">Prénom</label>
                      <input type="text" id="firstName" className="form-input" required />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="lastName" className="form-label">Nom</label>
                      <input type="text" id="lastName" className="form-input" required />
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" id="email" className="form-input" required />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="phone" className="form-label">Téléphone</label>
                    <input type="tel" id="phone" className="form-input" required />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="specialRequests" className="form-label">Demandes spéciales (optionnel)</label>
                    <textarea id="specialRequests" className="form-textarea" rows={3}></textarea>
                  </div>

                  <div className="reservation-actions">
                    <button type="button" className="btn btn-outline" onClick={prevStep}>
                      Retour
                    </button>
                    <button type="submit" className="btn btn-primary">
                      Confirmer la réservation
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservation;