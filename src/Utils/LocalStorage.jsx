const employees = [
  {
    id: 1,
    firstName: "Amit",
    email: "amit@123.com",
    password: "123",
    taskCounts: {
      active: 3,
      newTask: 0,
      completed: 0,
      failed: 0
    },
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Prepare report",
        description: "Prepare monthly sales report",
        date: "2026-04-10",
        category: "Reporting"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Team meeting",
        description: "Attend weekly team meeting",
        date: "2026-04-08",
        category: "Meeting"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Client follow-up",
        description: "Call client regarding feedback",
        date: "2026-04-07",
        category: "Communication"
      }
    ]
  },
  {
    id: 2,
    firstName: "Neha",
    email: "neha@123.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 0,
      completed: 2,
      failed: 0
    },
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Design UI",
        description: "Create UI mockups for dashboard",
        date: "2026-04-10",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Fix bugs",
        description: "Resolve reported bugs",
        date: "2026-04-09",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Code review",
        description: "Review teammate code",
        date: "2026-04-08",
        category: "Development"
      }
    ]
  },
  {
    id: 3,
    firstName: "Sanju",
    email: "sanju@123.com",
    password: "123",
    taskCounts: {
      active: 0,
      newTask: 0,
      completed: 3,
      failed: 0
    },
    tasks: [
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Write docs",
        description: "Document API endpoints",
        date: "2026-04-10",
        category: "Documentation"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Deploy app",
        description: "Deploy latest version",
        date: "2026-04-09",
        category: "DevOps"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Test feature",
        description: "Test new login module",
        date: "2026-04-08",
        category: "Testing"
      }
    ]
  },
  {
    id: 4,
    firstName: "Priya",
    email: "priya@123.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 0,
      completed: 2,
      failed: 0
    },
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Market research",
        description: "Analyze competitor products",
        date: "2026-04-10",
        category: "Research"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Email campaign",
        description: "Send marketing emails",
        date: "2026-04-09",
        category: "Marketing"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Lead follow-up",
        description: "Follow up on leads",
        date: "2026-04-08",
        category: "Sales"
      }
    ]
  },
  {
    id: 5,
    firstName: "Karan",
    email: "karan@123.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 0,
      failed: 1
    },
    tasks: [
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        title: "Database backup",
        description: "Backup production database",
        date: "2026-04-10",
        category: "IT"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Server check",
        description: "Monitor server health",
        date: "2026-04-09",
        category: "IT"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Security audit",
        description: "Perform security checks",
        date: "2026-04-08",
        category: "Security"
      }
    ]
  }
];

const admin = [
  {
    id: 1,
    email: "admin@me.com",
    password: "admin123"
  }
];

export const setLocalStorage = () =>{
    localStorage.setItem('employees',JSON.stringify(employees));
    localStorage.setItem('admin',JSON.stringify(admin));
}

export const getLocalStorage = () =>{
    const employeesData = JSON.parse(localStorage.getItem('employees'));
    const adminData = JSON.parse(localStorage.getItem('admin'));
    return {employees:employeesData,admin:adminData}
}