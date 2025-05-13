import React, { useState } from 'react';
import { BarChart, Calendar, Users, Clock, Settings, LogOut, PieChart, TrendingUp,Boxes } from 'lucide-react';
import './AdminDashboard.css';

const AdminDashboard: React.FC = () => {
  const [activePage, setActivePage] = useState<string>('dashboard');

  const renderContent = () => {
    switch (activePage) {
      case 'dashboard':
        return <DashboardContent />;
      case 'reservations':
        return <ReservationsContent />;
      case 'tables':
        return <TablesContent />;
      case 'menu':
        return <MenuContent />;
      case 'clients':
        return <ClientsContent />;
      case 'settings':
        return <SettingsContent />;
      default:
        return <DashboardContent />;
    }
  };

  return (
    <div className="admin-dashboard">
      <aside className="admin-sidebar">
        <div className="sidebar-header">
          <h2 className="admin-logo">L'Élégance</h2>
          <p className="admin-subtitle">Administration</p>
        </div>

        <nav className="sidebar-nav">
          <button 
            className={`nav-item ${activePage === 'dashboard' ? 'active' : ''}`}
            onClick={() => setActivePage('dashboard')}
          >
            <BarChart size={20} />
            <span>Tableau de bord</span>
          </button>

          <button 
            className={`nav-item ${activePage === 'reservations' ? 'active' : ''}`}
            onClick={() => setActivePage('reservations')}
          >
            <Calendar size={20} />
            <span>Réservations</span>
          </button>

          <button 
            className={`nav-item ${activePage === 'tables' ? 'active' : ''}`}
            onClick={() => setActivePage('tables')}
          >
            <PieChart size={20} />
            <span>Tables</span>
          </button>

          <button 
            className={`nav-item ${activePage === 'menu' ? 'active' : ''}`}
            onClick={() => setActivePage('menu')}
          >
            <TrendingUp size={20} />
            <span>Menu & Commandes</span>
          </button>

          <button 
            className={`nav-item ${activePage === 'clients' ? 'active' : ''}`}
            onClick={() => setActivePage('clients')}
          >
            <Users size={20} />
            <span>Clients</span>
          </button>

          <button 
            className={`nav-item ${activePage === 'settings' ? 'active' : ''}`}
            onClick={() => setActivePage('settings')}
          >
            <Settings size={20} />
            <span>Paramètres</span>
          </button>

          <button 
            className={`nav-item ${activePage === 'inventory' ? 'active' : ''}`}
            onClick={() => setActivePage('inventory')}
          >
            <Boxes size={20} />
            <span>Inventaire</span>
          </button>
        </nav>

        <div className="sidebar-footer">
          <button className="logout-button">
            <LogOut size={20} />
            <span>Déconnexion</span>
          </button>
        </div>
      </aside>

      <main className="admin-content">
        <header className="admin-header">
          <h1 className="page-title">
            {activePage === 'dashboard' && 'Tableau de bord'}
            {activePage === 'reservations' && 'Gestion des réservations'}
            {activePage === 'tables' && 'Gestion des tables'}
            {activePage === 'menu' && 'Menu & Commandes'}
            {activePage === 'clients' && 'Gestion des clients'}
            {activePage === 'settings' && 'Paramètres'}
          </h1>
          <div className="admin-profile">
            <div className="admin-avatar">MA</div>
            <div className="admin-info">
              <p className="admin-name">Michel Arnaud</p>
              <p className="admin-role">Administrateur</p>
            </div>
          </div>
        </header>

        <div className="admin-page-content">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

const DashboardContent: React.FC = () => {
  return (
    <div className="dashboard-content">
      <div className="dashboard-stats">
        <div className="stat-card">
          <div className="stat-icon reservations">
            <Calendar size={24} />
          </div>
          <div className="stat-content">
            <h3>Réservations</h3>
            <p className="stat-value">24</p>
            <p className="stat-label">Aujourd'hui</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon clients">
            <Users size={24} />
          </div>
          <div className="stat-content">
            <h3>Clients</h3>
            <p className="stat-value">86</p>
            <p className="stat-label">Cette semaine</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon revenue">
            <TrendingUp size={24} />
          </div>
          <div className="stat-content">
            <h3>Chiffre d'affaires</h3>
            <p className="stat-value">4,250€</p>
            <p className="stat-label">Cette semaine</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon occupancy">
            <PieChart size={24} />
          </div>
          <div className="stat-content">
            <h3>Taux d'occupation</h3>
            <p className="stat-value">78%</p>
            <p className="stat-label">Moyenne</p>
          </div>
        </div>
      </div>

      <div className="dashboard-charts">
        <div className="chart-card large">
          <div className="chart-header">
            <h3>Réservations hebdomadaires</h3>
            <select className="chart-period">
              <option>Cette semaine</option>
              <option>Ce mois</option>
              <option>Cette année</option>
            </select>
          </div>
          <div className="chart-placeholder">
            <div className="bar-chart">
              <div className="chart-day">
                <div className="chart-bar" style={{ height: '60%' }}></div>
                <span className="chart-label">Lun</span>
              </div>
              <div className="chart-day">
                <div className="chart-bar" style={{ height: '45%' }}></div>
                <span className="chart-label">Mar</span>
              </div>
              <div className="chart-day">
                <div className="chart-bar" style={{ height: '75%' }}></div>
                <span className="chart-label">Mer</span>
              </div>
              <div className="chart-day">
                <div className="chart-bar" style={{ height: '90%' }}></div>
                <span className="chart-label">Jeu</span>
              </div>
              <div className="chart-day">
                <div className="chart-bar" style={{ height: '100%' }}></div>
                <span className="chart-label">Ven</span>
              </div>
              <div className="chart-day">
                <div className="chart-bar" style={{ height: '85%' }}></div>
                <span className="chart-label">Sam</span>
              </div>
              <div className="chart-day">
                <div className="chart-bar" style={{ height: '60%' }}></div>
                <span className="chart-label">Dim</span>
              </div>
            </div>
          </div>
        </div>

        <div className="chart-card">
          <div className="chart-header">
            <h3>Plats populaires</h3>
          </div>
          <div className="chart-placeholder">
            <ul className="popular-items">
              <li className="popular-item">
                <span className="item-name">Filet de Bœuf Rossini</span>
                <div className="item-bar-container">
                  <div className="item-bar" style={{ width: '95%' }}></div>
                  <span className="item-value">95</span>
                </div>
              </li>
              <li className="popular-item">
                <span className="item-name">Risotto aux Truffes</span>
                <div className="item-bar-container">
                  <div className="item-bar" style={{ width: '80%' }}></div>
                  <span className="item-value">80</span>
                </div>
              </li>
              <li className="popular-item">
                <span className="item-name">Carpaccio de Saint-Jacques</span>
                <div className="item-bar-container">
                  <div className="item-bar" style={{ width: '65%' }}></div>
                  <span className="item-value">65</span>
                </div>
              </li>
              <li className="popular-item">
                <span className="item-name">Paris-Brest</span>
                <div className="item-bar-container">
                  <div className="item-bar" style={{ width: '50%' }}></div>
                  <span className="item-value">50</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="chart-card">
          <div className="chart-header">
            <h3>Prochaines réservations</h3>
          </div>
          <div className="chart-placeholder">
            <ul className="upcoming-reservations">
              <li className="reservation-item">
                <div className="reservation-time">12:30</div>
                <div className="reservation-details">
                  <h4>Martin Dupont</h4>
                  <p>4 personnes • Table 5</p>
                </div>
                <div className="reservation-status confirmed">Confirmée</div>
              </li>
              <li className="reservation-item">
                <div className="reservation-time">13:00</div>
                <div className="reservation-details">
                  <h4>Sophie Laurent</h4>
                  <p>2 personnes • Table 8</p>
                </div>
                <div className="reservation-status confirmed">Confirmée</div>
              </li>
              <li className="reservation-item">
                <div className="reservation-time">13:30</div>
                <div className="reservation-details">
                  <h4>Jean Mercier</h4>
                  <p>6 personnes • Table 12</p>
                </div>
                <div className="reservation-status pending">En attente</div>
              </li>
              <li className="reservation-item">
                <div className="reservation-time">19:30</div>
                <div className="reservation-details">
                  <h4>Camille Petit</h4>
                  <p>2 personnes • Table 3</p>
                </div>
                <div className="reservation-status confirmed">Confirmée</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const ReservationsContent: React.FC = () => {
  return (
    <div className="reservations-content">
      <div className="admin-toolbar">
        <div className="search-container">
          <input type="text" placeholder="Rechercher une réservation..." className="admin-search" />
        </div>
        <div className="toolbar-actions">
          <select className="filter-select">
            <option>Aujourd'hui</option>
            <option>Demain</option>
            <option>Cette semaine</option>
            <option>Ce mois</option>
          </select>
          <select className="filter-select">
            <option>Toutes les réservations</option>
            <option>Confirmées</option>
            <option>En attente</option>
            <option>Annulées</option>
          </select>
          <button className="btn btn-primary">Nouvelle réservation</button>
        </div>
      </div>

      <div className="admin-table-container">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Client</th>
              <th>Date & Heure</th>
              <th>Personnes</th>
              <th>Table</th>
              <th>Statut</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="client-info">
                  <div className="client-avatar">MD</div>
                  <div>
                    <p className="client-name">Martin Dupont</p>
                    <p className="client-email">martin.dupont@email.com</p>
                  </div>
                </div>
              </td>
              <td>22/06/2025 • 12:30</td>
              <td>4 personnes</td>
              <td>Table 5</td>
              <td><span className="status-badge confirmed">Confirmée</span></td>
              <td>
                <div className="table-actions">
                  <button className="action-button edit">Modifier</button>
                  <button className="action-button cancel">Annuler</button>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="client-info">
                  <div className="client-avatar">SL</div>
                  <div>
                    <p className="client-name">Sophie Laurent</p>
                    <p className="client-email">sophie.laurent@email.com</p>
                  </div>
                </div>
              </td>
              <td>22/06/2025 • 13:00</td>
              <td>2 personnes</td>
              <td>Table 8</td>
              <td><span className="status-badge confirmed">Confirmée</span></td>
              <td>
                <div className="table-actions">
                  <button className="action-button edit">Modifier</button>
                  <button className="action-button cancel">Annuler</button>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="client-info">
                  <div className="client-avatar">JM</div>
                  <div>
                    <p className="client-name">Jean Mercier</p>
                    <p className="client-email">jean.mercier@email.com</p>
                  </div>
                </div>
              </td>
              <td>22/06/2025 • 13:30</td>
              <td>6 personnes</td>
              <td>Table 12</td>
              <td><span className="status-badge pending">En attente</span></td>
              <td>
                <div className="table-actions">
                  <button className="action-button confirm">Confirmer</button>
                  <button className="action-button cancel">Annuler</button>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="client-info">
                  <div className="client-avatar">CP</div>
                  <div>
                    <p className="client-name">Camille Petit</p>
                    <p className="client-email">camille.petit@email.com</p>
                  </div>
                </div>
              </td>
              <td>22/06/2025 • 19:30</td>
              <td>2 personnes</td>
              <td>Table 3</td>
              <td><span className="status-badge confirmed">Confirmée</span></td>
              <td>
                <div className="table-actions">
                  <button className="action-button edit">Modifier</button>
                  <button className="action-button cancel">Annuler</button>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="client-info">
                  <div className="client-avatar">RL</div>
                  <div>
                    <p className="client-name">Robert Lemaire</p>
                    <p className="client-email">robert.lemaire@email.com</p>
                  </div>
                </div>
              </td>
              <td>22/06/2025 • 20:00</td>
              <td>4 personnes</td>
              <td>Table 6</td>
              <td><span className="status-badge cancelled">Annulée</span></td>
              <td>
                <div className="table-actions">
                  <button className="action-button restore">Restaurer</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="admin-pagination">
        <button className="pagination-button">Précédent</button>
        <div className="pagination-pages">
          <button className="page-button active">1</button>
          <button className="page-button">2</button>
          <button className="page-button">3</button>
          <span className="page-ellipsis">...</span>
          <button className="page-button">10</button>
        </div>
        <button className="pagination-button">Suivant</button>
      </div>
    </div>
  );
};

const TablesContent: React.FC = () => {
  return (
    <div className="tables-content">
      <div className="admin-toolbar">
        <div className="search-container">
          <input type="text" placeholder="Rechercher une table..." className="admin-search" />
        </div>
        <div className="toolbar-actions">
          <select className="filter-select">
            <option>Toutes les tables</option>
            <option>Libres</option>
            <option>Réservées</option>
            <option>Occupées</option>
          </select>
          <button className="btn btn-primary">Ajouter une table</button>
        </div>
      </div>

      <div className="tables-grid">
        <div className="table-card free">
          <div className="table-card-header">
            <h3>Table 1</h3>
            <span className="table-status free">Libre</span>
          </div>
          <div className="table-card-content">
            <div className="table-info">
              <p><strong>Capacité:</strong> 2 personnes</p>
              <p><strong>Emplacement:</strong> Fenêtre</p>
            </div>
            <div className="table-actions">
              <button className="action-button reserve">Réserver</button>
              <button className="action-button edit-table">Modifier</button>
            </div>
          </div>
        </div>

        <div className="table-card reserved">
          <div className="table-card-header">
            <h3>Table 2</h3>
            <span className="table-status reserved">Réservée</span>
          </div>
          <div className="table-card-content">
            <div className="table-info">
              <p><strong>Capacité:</strong> 2 personnes</p>
              <p><strong>Emplacement:</strong> Centre</p>
              <p><strong>Réservée par:</strong> Sophie Laurent</p>
              <p><strong>Heure:</strong> 13:00</p>
            </div>
            <div className="table-actions">
              <button className="action-button edit-reservation">Voir réservation</button>
            </div>
          </div>
        </div>

        <div className="table-card occupied">
          <div className="table-card-header">
            <h3>Table 3</h3>
            <span className="table-status occupied">Occupée</span>
          </div>
          <div className="table-card-content">
            <div className="table-info">
              <p><strong>Capacité:</strong> 4 personnes</p>
              <p><strong>Emplacement:</strong> Fenêtre</p>
              <p><strong>Client:</strong> Martin Dupont</p>
              <p><strong>Arrivée:</strong> 12:30</p>
            </div>
            <div className="table-actions">
              <button className="action-button view-order">Voir commande</button>
              <button className="action-button free-table">Libérer</button>
            </div>
          </div>
        </div>

        <div className="table-card free">
          <div className="table-card-header">
            <h3>Table 4</h3>
            <span className="table-status free">Libre</span>
          </div>
          <div className="table-card-content">
            <div className="table-info">
              <p><strong>Capacité:</strong> 4 personnes</p>
              <p><strong>Emplacement:</strong> Centre</p>
            </div>
            <div className="table-actions">
              <button className="action-button reserve">Réserver</button>
              <button className="action-button edit-table">Modifier</button>
            </div>
          </div>
        </div>

        <div className="table-card free">
          <div className="table-card-header">
            <h3>Table 5</h3>
            <span className="table-status free">Libre</span>
          </div>
          <div className="table-card-content">
            <div className="table-info">
              <p><strong>Capacité:</strong> 6 personnes</p>
              <p><strong>Emplacement:</strong> Terrasse</p>
            </div>
            <div className="table-actions">
              <button className="action-button reserve">Réserver</button>
              <button className="action-button edit-table">Modifier</button>
            </div>
          </div>
        </div>

        <div className="table-card occupied">
          <div className="table-card-header">
            <h3>Table 6</h3>
            <span className="table-status occupied">Occupée</span>
          </div>
          <div className="table-card-content">
            <div className="table-info">
              <p><strong>Capacité:</strong> 6 personnes</p>
              <p><strong>Emplacement:</strong> Terrasse</p>
              <p><strong>Client:</strong> Jean Mercier</p>
              <p><strong>Arrivée:</strong> 13:00</p>
            </div>
            <div className="table-actions">
              <button className="action-button view-order">Voir commande</button>
              <button className="action-button free-table">Libérer</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const MenuContent: React.FC = () => {
  return <div>Contenu de la page Menu en cours de développement</div>;
};

const ClientsContent: React.FC = () => {
  return <div>Contenu de la page Clients en cours de développement</div>;
};

const SettingsContent: React.FC = () => {
  return <div>Contenu de la page Paramètres en cours de développement</div>;
};

export default AdminDashboard;