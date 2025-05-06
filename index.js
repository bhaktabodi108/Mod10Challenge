const inquirer = require('inquirer');
const db = require('./db');

async function mainMenu() {
  const { choice } = await inquirer.prompt({
    type: 'list',
    name: 'choice',
    message: 'What would you like to do?',
    choices: [
      'View all departments',
      'View all roles',
      'View all employees',
      'Add a department',
      'Add a role',
      'Add an employee',
      'Update an employee role',
      'Exit'
    ]
  });

  switch (choice) {
    case 'View all departments':
      return viewDepartments();
    case 'Add a department':
      return addDepartment();
    // etc.
  }
}

async function viewDepartments() {
    const res = await db.query('SELECT * FROM department');
    console.table(res.rows);
    mainMenu();
  }
  