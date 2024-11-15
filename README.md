# Task Manager App

## 📋 Overview

The Task Manager App is a simple yet powerful tool to help you manage your tasks efficiently. Built with **React** and **TypeScript**, this application allows you to add, search, and prioritize tasks. It also includes features to mark tasks as complete and delete them, with data persistence using **localStorage**.

## 🚀 Features

- **Add Tasks**: Create tasks with a title and assign a priority level (Low, Medium, High).
- **Task Persistence**: All tasks are stored in `localStorage`, ensuring they are saved even after refreshing the page.
- **Delete Tasks**: Remove tasks when they are no longer needed.
- **Task Completion**: Mark tasks as complete/incomplete with a simple toggle.
- **Search Tasks**: Quickly find tasks using a search bar.
- **Priority Sorting**: Sort tasks by priority or completion status.
- **UI Animations**: Smooth animations for adding, deleting, and updating tasks using `framer-motion`.

## 🛠️ Tech Stack

- **React**: Frontend framework for building user interfaces.
- **TypeScript**: For type safety and enhanced development experience.
- **Framer Motion**: Library for animations.
- **CSS**: Custom styles for a clean and responsive UI.


## 🚧 Assumptions Made

- The tasks are identified using unique timestamps (`Date.now()`) as IDs.
- Priority levels are limited to **Low**, **Medium**, and **High**.
- Tasks are stored locally using `localStorage`, so they will be available only on the same browser and device.
- The `max-height` of the task list container is set to `500px` to prevent UI overflow, and it will show a scrollbar if the task count exceeds the visible limit.

## 🛠️ Setup & Launch

Follow these steps to get the Task Manager up and running on your local machine:

### Prerequisites

- **Node.js** (version 14 or above)
- **npm** (version 6 or above)

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-username/task-manager.git
   cd task-manager

2. **Install Dependencies**

   ```bash
   npm install


4. **Run the Application**

   ```bash
   npm start
   
6. **Access the Application**

   Open your browser and go to:  http://localhost:3000

 ## 💡 Future Improvements

Add due dates for tasks.
Implement user authentication for multiple users.
Dark mode for a better user experience.
Drag-and-drop support for reordering tasks.

## 🤝 Contributions
Contributions are welcome! Feel free to submit a pull request or open an issue to improve the project.
