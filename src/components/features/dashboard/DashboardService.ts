import { ActivityData } from './RecentActivitiesTable';
import { SummaryCardData } from './SummaryCards';
import { PerformanceData } from './AgentPerformanceChart';
import { DateRange } from './DateRangeSelector';

// Esta interfaz representa todos los datos necesarios para el dashboard
export interface DashboardData {
  summaryCards: SummaryCardData[];
  performanceData: PerformanceData[];
  activities: ActivityData[];
  performanceAverage: number;
  performanceTrend: string;
  isPositiveTrend: boolean;
}

// Datos mock para diferentes rangos de fecha
const mockData: Record<DateRange, DashboardData> = {
  today: {
    summaryCards: [
      {
        title: 'Agentes Activos',
        value: 42,
        change: '+5%',
        icon: 'mdi:account-group',
        color: '#4CAF50',
        isPositive: true
      },
      {
        title: 'Tickets Abiertos',
        value: 73,
        change: '-8%',
        icon: 'mdi:ticket',
        color: '#2196F3',
        isPositive: true
      },
      {
        title: 'Tiempo Promedio',
        value: '4.1m',
        change: '-15%',
        icon: 'mdi:clock-outline',
        color: '#FF9800',
        isPositive: true
      },
      {
        title: 'Satisfacciu00f3n',
        value: '96%',
        change: '+3%',
        icon: 'mdi:emoticon-happy-outline',
        color: '#E91E63',
        isPositive: true
      }
    ],
    performanceData: [
      { month: '9AM', performance: 45 },
      { month: '10AM', performance: 52 },
      { month: '11AM', performance: 70 },
      { month: '12PM', performance: 65 },
      { month: '1PM', performance: 58 },
      { month: '2PM', performance: 75 },
      { month: '3PM', performance: 85 },
    ],
    activities: [
      {
        id: 1,
        agent: {
          name: 'Carlos Mu00e9ndez',
          avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
        },
        activity: 'Ticket resuelto',
        ticketId: 'TKT-2593',
        time: '3 min',
        customer: 'LeanTech',
        status: 'success'
      },
      {
        id: 2,
        agent: {
          name: 'Ana Gu00f3mez',
          avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
        },
        activity: 'Nuevo ticket',
        ticketId: 'TKT-2594',
        time: '10 min',
        customer: 'AgentQ Inc',
        status: 'pending'
      },
      {
        id: 3,
        agent: {
          name: 'Mario Silva',
          avatar: 'https://randomuser.me/api/portraits/men/56.jpg'
        },
        activity: 'Ticket asignado',
        ticketId: 'TKT-2590',
        time: '32 min',
        customer: 'TechSoft',
        status: 'warning'
      }
    ],
    performanceAverage: 64.2,
    performanceTrend: '+8.5%',
    isPositiveTrend: true
  },
  week: {
    summaryCards: [
      {
        title: 'Agentes Activos',
        value: 87,
        change: '+12%',
        icon: 'mdi:account-group',
        color: '#4CAF50',
        isPositive: true
      },
      {
        title: 'Tickets Abiertos',
        value: 156,
        change: '-3%',
        icon: 'mdi:ticket',
        color: '#2196F3',
        isPositive: false
      },
      {
        title: 'Tiempo Promedio',
        value: '5.2m',
        change: '-10%',
        icon: 'mdi:clock-outline',
        color: '#FF9800',
        isPositive: true
      },
      {
        title: 'Satisfacciu00f3n',
        value: '94%',
        change: '+2%',
        icon: 'mdi:emoticon-happy-outline',
        color: '#E91E63',
        isPositive: true
      }
    ],
    performanceData: [
      { month: 'Lun', performance: 65 },
      { month: 'Mar', performance: 59 },
      { month: 'Mie', performance: 80 },
      { month: 'Jue', performance: 81 },
      { month: 'Vie', performance: 56 },
      { month: 'Su00e1b', performance: 55 },
      { month: 'Dom', performance: 40 },
    ],
    activities: [
      {
        id: 1,
        agent: {
          name: 'Carlos Mu00e9ndez',
          avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
        },
        activity: 'Ticket resuelto',
        ticketId: 'TKT-2593',
        time: '3 min',
        customer: 'LeanTech',
        status: 'success'
      },
      {
        id: 2,
        agent: {
          name: 'Ana Gu00f3mez',
          avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
        },
        activity: 'Nuevo ticket',
        ticketId: 'TKT-2594',
        time: '10 min',
        customer: 'AgentQ Inc',
        status: 'pending'
      },
      {
        id: 3,
        agent: {
          name: 'Mario Silva',
          avatar: 'https://randomuser.me/api/portraits/men/56.jpg'
        },
        activity: 'Ticket asignado',
        ticketId: 'TKT-2590',
        time: '32 min',
        customer: 'TechSoft',
        status: 'warning'
      },
      {
        id: 4,
        agent: {
          name: 'Laura Benu00edtez',
          avatar: 'https://randomuser.me/api/portraits/women/63.jpg'
        },
        activity: 'Chat finalizado',
        ticketId: 'TKT-2588',
        time: '1h 15m',
        customer: 'InnovaSys',
        status: 'success'
      },
      {
        id: 5,
        agent: {
          name: 'Eduardo Paz',
          avatar: 'https://randomuser.me/api/portraits/men/72.jpg'
        },
        activity: 'Ticket escalado',
        ticketId: 'TKT-2585',
        time: '2h 40m',
        customer: 'LeanTech',
        status: 'error'
      }
    ],
    performanceAverage: 62.3,
    performanceTrend: '+5.2%',
    isPositiveTrend: true
  },
  month: {
    summaryCards: [
      {
        title: 'Agentes Activos',
        value: 95,
        change: '+18%',
        icon: 'mdi:account-group',
        color: '#4CAF50',
        isPositive: true
      },
      {
        title: 'Tickets Abiertos',
        value: 320,
        change: '+15%',
        icon: 'mdi:ticket',
        color: '#2196F3',
        isPositive: false
      },
      {
        title: 'Tiempo Promedio',
        value: '5.8m',
        change: '+2%',
        icon: 'mdi:clock-outline',
        color: '#FF9800',
        isPositive: false
      },
      {
        title: 'Satisfacciu00f3n',
        value: '91%',
        change: '-1%',
        icon: 'mdi:emoticon-happy-outline',
        color: '#E91E63',
        isPositive: false
      }
    ],
    performanceData: [
      { month: 'Sem 1', performance: 60 },
      { month: 'Sem 2', performance: 65 },
      { month: 'Sem 3', performance: 55 },
      { month: 'Sem 4', performance: 70 }
    ],
    activities: [
      {
        id: 1,
        agent: {
          name: 'Carlos Mu00e9ndez',
          avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
        },
        activity: 'Ticket resuelto',
        ticketId: 'TKT-2593',
        time: '3 min',
        customer: 'LeanTech',
        status: 'success'
      },
      {
        id: 2,
        agent: {
          name: 'Ana Gu00f3mez',
          avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
        },
        activity: 'Nuevo ticket',
        ticketId: 'TKT-2594',
        time: '10 min',
        customer: 'AgentQ Inc',
        status: 'pending'
      },
      {
        id: 3,
        agent: {
          name: 'Mario Silva',
          avatar: 'https://randomuser.me/api/portraits/men/56.jpg'
        },
        activity: 'Ticket asignado',
        ticketId: 'TKT-2590',
        time: '32 min',
        customer: 'TechSoft',
        status: 'warning'
      }
    ],
    performanceAverage: 62.5,
    performanceTrend: '-2.3%',
    isPositiveTrend: false
  },
  year: {
    summaryCards: [
      {
        title: 'Agentes Activos',
        value: 120,
        change: '+45%',
        icon: 'mdi:account-group',
        color: '#4CAF50',
        isPositive: true
      },
      {
        title: 'Tickets Abiertos',
        value: 543,
        change: '+28%',
        icon: 'mdi:ticket',
        color: '#2196F3',
        isPositive: false
      },
      {
        title: 'Tiempo Promedio',
        value: '7.2m',
        change: '+15%',
        icon: 'mdi:clock-outline',
        color: '#FF9800',
        isPositive: false
      },
      {
        title: 'Satisfacciu00f3n',
        value: '89%',
        change: '-3%',
        icon: 'mdi:emoticon-happy-outline',
        color: '#E91E63',
        isPositive: false
      }
    ],
    performanceData: [
      { month: 'Ene', performance: 65 },
      { month: 'Feb', performance: 59 },
      { month: 'Mar', performance: 80 },
      { month: 'Abr', performance: 81 },
      { month: 'May', performance: 56 },
      { month: 'Jun', performance: 55 },
      { month: 'Jul', performance: 40 },
      { month: 'Ago', performance: 45 },
      { month: 'Sep', performance: 60 },
      { month: 'Oct', performance: 70 },
      { month: 'Nov', performance: 65 },
      { month: 'Dic', performance: 75 }
    ],
    activities: [
      {
        id: 1,
        agent: {
          name: 'Carlos Mu00e9ndez',
          avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
        },
        activity: 'Ticket resuelto',
        ticketId: 'TKT-2593',
        time: '3 min',
        customer: 'LeanTech',
        status: 'success'
      },
      {
        id: 2,
        agent: {
          name: 'Ana Gu00f3mez',
          avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
        },
        activity: 'Nuevo ticket',
        ticketId: 'TKT-2594',
        time: '10 min',
        customer: 'AgentQ Inc',
        status: 'pending'
      },
      {
        id: 3,
        agent: {
          name: 'Mario Silva',
          avatar: 'https://randomuser.me/api/portraits/men/56.jpg'
        },
        activity: 'Ticket asignado',
        ticketId: 'TKT-2590',
        time: '32 min',
        customer: 'TechSoft',
        status: 'warning'
      }
    ],
    performanceAverage: 62.5,
    performanceTrend: '+10.2%',
    isPositiveTrend: true
  },
  custom: {
    summaryCards: [
      {
        title: 'Agentes Activos',
        value: 85,
        change: '+10%',
        icon: 'mdi:account-group',
        color: '#4CAF50',
        isPositive: true
      },
      {
        title: 'Tickets Abiertos',
        value: 210,
        change: '+5%',
        icon: 'mdi:ticket',
        color: '#2196F3',
        isPositive: false
      },
      {
        title: 'Tiempo Promedio',
        value: '6.1m',
        change: '+8%',
        icon: 'mdi:clock-outline',
        color: '#FF9800',
        isPositive: false
      },
      {
        title: 'Satisfacciu00f3n',
        value: '92%',
        change: '+1%',
        icon: 'mdi:emoticon-happy-outline',
        color: '#E91E63',
        isPositive: true
      }
    ],
    performanceData: [
      { month: 'Seg 1', performance: 65 },
      { month: 'Seg 2', performance: 70 },
      { month: 'Seg 3', performance: 75 },
      { month: 'Seg 4', performance: 65 },
      { month: 'Seg 5', performance: 60 },
    ],
    activities: [
      {
        id: 1,
        agent: {
          name: 'Carlos Mu00e9ndez',
          avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
        },
        activity: 'Ticket resuelto',
        ticketId: 'TKT-2593',
        time: '3 min',
        customer: 'LeanTech',
        status: 'success'
      },
      {
        id: 2,
        agent: {
          name: 'Ana Gu00f3mez',
          avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
        },
        activity: 'Nuevo ticket',
        ticketId: 'TKT-2594',
        time: '10 min',
        customer: 'AgentQ Inc',
        status: 'pending'
      },
      {
        id: 3,
        agent: {
          name: 'Mario Silva',
          avatar: 'https://randomuser.me/api/portraits/men/56.jpg'
        },
        activity: 'Ticket asignado',
        ticketId: 'TKT-2590',
        time: '32 min',
        customer: 'TechSoft',
        status: 'warning'
      }
    ],
    performanceAverage: 67.0,
    performanceTrend: '+4.8%',
    isPositiveTrend: true
  }
};

// Clase que simula un servicio para obtener datos del dashboard
export class DashboardService {
  // En una implementaciu00f3n real, esta funciu00f3n haru00eda una llamada a la API
  static async getDashboardData(dateRange: DateRange = 'week', customDateStart?: string, customDateEnd?: string): Promise<DashboardData> {
    // Simulamos una carga asincru00f3nica
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockData[dateRange]);
      }, 800); // Agregamos un retraso de 800ms para simular la carga de datos
    });
  }

  // Mu00e9todo para obtener datos de actividades recientes con paginaciu00f3n
  static async getRecentActivities(page: number = 1, pageSize: number = 5): Promise<{
    data: ActivityData[];
    total: number;
  }> {
    // En una implementaciu00f3n real, esta funciu00f3n haru00eda una llamada a la API con paru00e1metros de paginaciu00f3n
    const allActivities: ActivityData[] = [
      {
        id: 1,
        agent: {
          name: 'Carlos Mu00e9ndez',
          avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
        },
        activity: 'Ticket resuelto',
        ticketId: 'TKT-2593',
        time: '3 min',
        customer: 'LeanTech',
        status: 'success'
      },
      {
        id: 2,
        agent: {
          name: 'Ana Gu00f3mez',
          avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
        },
        activity: 'Nuevo ticket',
        ticketId: 'TKT-2594',
        time: '10 min',
        customer: 'AgentQ Inc',
        status: 'pending'
      },
      {
        id: 3,
        agent: {
          name: 'Mario Silva',
          avatar: 'https://randomuser.me/api/portraits/men/56.jpg'
        },
        activity: 'Ticket asignado',
        ticketId: 'TKT-2590',
        time: '32 min',
        customer: 'TechSoft',
        status: 'warning'
      },
      {
        id: 4,
        agent: {
          name: 'Laura Benu00edtez',
          avatar: 'https://randomuser.me/api/portraits/women/63.jpg'
        },
        activity: 'Chat finalizado',
        ticketId: 'TKT-2588',
        time: '1h 15m',
        customer: 'InnovaSys',
        status: 'success'
      },
      {
        id: 5,
        agent: {
          name: 'Eduardo Paz',
          avatar: 'https://randomuser.me/api/portraits/men/72.jpg'
        },
        activity: 'Ticket escalado',
        ticketId: 'TKT-2585',
        time: '2h 40m',
        customer: 'LeanTech',
        status: 'error'
      },
      {
        id: 6,
        agent: {
          name: 'Ricardo Vega',
          avatar: 'https://randomuser.me/api/portraits/men/42.jpg'
        },
        activity: 'Ticket cerrado',
        ticketId: 'TKT-2580',
        time: '3h 25m',
        customer: 'TechSoft',
        status: 'success'
      },
      {
        id: 7,
        agent: {
          name: 'Patricia Lu00f3pez',
          avatar: 'https://randomuser.me/api/portraits/women/28.jpg'
        },
        activity: 'Chat iniciado',
        ticketId: 'TKT-2575',
        time: '4h 10m',
        customer: 'AgentQ Inc',
        status: 'pending'
      },
      {
        id: 8,
        agent: {
          name: 'Fernando Ruiz',
          avatar: 'https://randomuser.me/api/portraits/men/15.jpg'
        },
        activity: 'Ticket reabierto',
        ticketId: 'TKT-2570',
        time: '5h 30m',
        customer: 'LeanTech',
        status: 'warning'
      },
      {
        id: 9,
        agent: {
          name: 'Sofu00eda Martu00ednez',
          avatar: 'https://randomuser.me/api/portraits/women/36.jpg'
        },
        activity: 'Ticket asignado',
        ticketId: 'TKT-2565',
        time: '6h 15m',
        customer: 'InnovaSys',
        status: 'pending'
      },
      {
        id: 10,
        agent: {
          name: 'Gabriel Castro',
          avatar: 'https://randomuser.me/api/portraits/men/22.jpg'
        },
        activity: 'Ticket escalado',
        ticketId: 'TKT-2560',
        time: '8h 40m',
        customer: 'TechSoft',
        status: 'error'
      }
    ];

    // Simulamos paginaciu00f3n
    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    const paginatedData = allActivities.slice(start, end);

    // Simulamos una carga asincru00f3nica
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          data: paginatedData,
          total: allActivities.length
        });
      }, 500);
    });
  }
}
