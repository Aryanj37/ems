const employees = [
    {
      "id": 1,
      "email": "employee1@example.com",
      "password": "123",
      "firstName": "Rahul",
      "taskCount": {
        "active": 2,
        "newTask": 1,
        "completed": 1,
        "failed": 0
      },
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Update Profile",
          "taskDescription": "Update employee profile details.",
          "taskDate": "2024-10-25",
          "category": "Profile"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Submit Report",
          "taskDescription": "Submit quarterly report.",
          "taskDate": "2024-09-30",
          "category": "Reports"
        },
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "taskTitle": "Team Meeting",
          "taskDescription": "Attend weekly team meeting.",
          "taskDate": "2024-10-26",
          "category": "Meetings"
        }
      ]
    },
    {
      "id": 2,
      "email": "employee2@example.com",
      "password": "123",
      "firstName": "Priya",
      "taskCount": {
        "active": 1,
        "newTask": 1,
        "completed": 1,
        "failed": 0
      },
      "tasks": [
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Client Follow-up",
          "taskDescription": "Follow up with client regarding project.",
          "taskDate": "2024-10-20",
          "category": "Client Work"
        },
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Code Review",
          "taskDescription": "Review code for project X.",
          "taskDate": "2024-10-25",
          "category": "Development"
        }
      ]
    },
    {
      "id": 3,
      "email": "employee3@example.com",
      "password": "123",
      "firstName": "Amit",
      "taskCount": {
        "active": 2,
        "newTask": 1,
        "completed": 1,
        "failed": 0
      },
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Design Mockups",
          "taskDescription": "Create initial mockups for new UI.",
          "taskDate": "2024-10-27",
          "category": "Design"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Bug Fixing",
          "taskDescription": "Fix bugs reported by QA.",
          "taskDate": "2024-10-21",
          "category": "Development"
        },
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "taskTitle": "Team Presentation",
          "taskDescription": "Prepare slides for team presentation.",
          "taskDate": "2024-10-28",
          "category": "Meetings"
        }
      ]
    },
    {
      "id": 4,
      "email": "employee4@example.com",
      "password": "123",
      "firstName": "Neha",
      "taskCount": {
        "active": 1,
        "newTask": 1,
        "completed": 1,
        "failed": 0
      },
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Database Optimization",
          "taskDescription": "Optimize database queries.",
          "taskDate": "2024-10-29",
          "category": "Database"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Documentation",
          "taskDescription": "Complete project documentation.",
          "taskDate": "2024-10-22",
          "category": "Documentation"
        }
      ]
    },
    {
      "id": 5,
      "email": "employee5@example.com",
      "password": "123",
      "firstName": "Vikram",
      "taskCount": {
        "active": 1,
        "newTask": 1,
        "completed": 0,
        "failed": 1
      },
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "API Development",
          "taskDescription": "Develop API endpoints for project.",
          "taskDate": "2024-10-30",
          "category": "Backend"
        },
        {
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true,
          "taskTitle": "Client Demo",
          "taskDescription": "Prepare and conduct client demo.",
          "taskDate": "2024-10-24",
          "category": "Client Work"
        }
      ]
    }
  ];
  const admin = [
    {
      "id": 1,
      "email": "admin@example.com",
      "firstName": "Admin",
      "password": "123"
    }
  ];

  export const setLocalStorage =()=>{
    localStorage.setItem('employees',JSON.stringify(employees));
    localStorage.setItem('admin',JSON.stringify(admin));
  };
  
  export const getLocalStorage =()=>{
   const employees =JSON.parse(localStorage.getItem('employees'))
   const admin =JSON.parse(localStorage.getItem('admin'))

   return {employees,admin}
  }