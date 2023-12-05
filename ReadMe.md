# Features, APIs, and Guide

## APIs

### Authentication APIs

#### Login API

- **Description:** This API allows users to log in and obtain authentication tokens.
- **Endpoint:** `POST /v1/auth/login`
- **Request:**
  - **Headers:**
    - Content-Type: application/json
  - **Body:**
    ```json
    {
      "email": "user@example.com",
      "password": "your_secure_password"
    }
    ```
- **Response:**
  - **Status Code:** 200 OK
  - **Body:**
    ```json
    {
      "user": {
        "id": "user_id",
        "name": "John Doe",
        "email": "user@example.com"
        // Additional user properties
      },
      "tokens": {
        "accessToken": "your_access_token",
        "refreshToken": "your_refresh_token"
      }
    }
    ```

- **Error Handling:**
  - **Status Code:** 400 Bad Request
    - **Body:**
      ```json
      {
        "message": "Validation error message"
      }
      ```

  - **Status Code:** 401 Unauthorized
    - **Body:**
      ```json
      {
        "message": "Invalid credentials"
      }
      ```

  - **Status Code:** 500 Internal Server Error
    - **Body:**
      ```json
      {
        "message": "Internal server error"
      }
      ```

#### Register API

- **Description:** This API allows users to register and obtain authentication tokens.
- **Endpoint:** `POST /v1/auth/register`
- **Request:**
  - **Headers:**
    - Content-Type: application/json
  - **Body:**
    ```json
    {
      "email": "user@example.com",
      "password": "your_secure_password",
      "name": "John Doe"
    }
    ```
- **Response:**
  - **Status Code:** 201 Created
  - **Body:**
    ```json
    {
      "user": {
        "id": "user_id",
        "name": "John Doe",
        "email": "user@example.com"
        // Additional user properties
      },
      "token": {
        "accessToken": "your_access_token",
        "refreshToken": "your_refresh_token"
      }
    }
    ```

- **Error Handling:**
  - **Status Code:** 400 Bad Request
    - **Body:**
      ```json
      {
        "message": "Validation error message"
      }
      ```

  - **Status Code:** 500 Internal Server Error
    - **Body:**
      ```json
      {
        "message": "Internal server error"
      }
      ```

### Task Management APIs

#### Create Task API

- **Description:** This API allows users to create a new task.
- **Endpoint:** `POST /v1/tasks/create`
- **Request:**
  - **Headers:**
    - Authorization: Bearer your_access_token
    - Content-Type: application/json
  - **Body:**
    ```json
    {
      "description": "Complete task assignment",
      "status": "pending"
    }
    ```
- **Response:**
  - **Status Code:** 201 Created
  - **Body:**
    ```json
    {
      "id": "task_id",
      "description": "Complete task assignment",
      "status": "pending",
      "userId": "user_id",
      "createdAt": "2023-01-01T00:00:00.000Z",
      "updatedAt": "2023-01-01T00:00:00.000Z"
    }
    ```

- **Error Handling:**
  - **Status Code:** 400 Bad Request
    - **Body:**
      ```json
      {
        "message": "Validation error message"
      }
      ```

  - **Status Code:** 401 Unauthorized
    - **Body:**
      ```json
      {
        "message": "Unauthorized: Invalid or expired token"
      }
      ```

  - **Status Code:** 500 Internal Server Error
    - **Body:**
      ```json
      {
        "message": "Internal server error"
      }
      ```

#### Get Tasks API

- **Description:** This API allows users to retrieve their tasks.
- **Endpoint:** `GET /v1/tasks/get-tasks`
- **Request:**
  - **Headers:**
    - Authorization: Bearer your_access_token
  - **Query Parameters:**
    - status: (Optional) Filter tasks by status (e.g., 'pending', 'completed', 'in_progress')

- **Response:**
  - **Status Code:** 200 OK
  - **Body:**
    ```json
    {
      "tasks": [
        {
          "id": "task_id",
          "description": "Complete task assignment",
          "status": "pending",
          "userId": "user_id",
          "createdAt": "2023-01-01T00:00:00.000Z",
          "updatedAt": "2023-01-01T00:00:00.000Z"
        },
        // Additional tasks
      ]
    }
    ```

- **Error Handling:**
  - **Status Code:** 401 Unauthorized
    - **Body:**
      ```json
      {
        "message": "Unauthorized: Invalid or expired token"
      }
      ```

  - **Status Code:** 500 Internal Server Error
    - **Body:**
      ```json
      {
        "message": "Internal server error"
      }
      ```

#### Update Task API

- **Description:** This API allows users to update a specific task.
- **Endpoint:** `POST /v1/tasks/update/:taskId`
- **Request:**
  - **Headers:**
    - Authorization: Bearer your_access_token
    - Content-Type: application/json
  - **Params:**
    - taskId: ID of the task to be updated
  - **Body:**
    ```json
    {
      "description": "Updated task assignment",
      "status": "in_progress"
    }
    ```
- **Response:**
  - **Status Code:** 200 OK
  - **Body:**
    ```json
    {
      "id": "task_id",
      "description": "Updated task assignment",
      "status": "in_progress",
      "userId": "user_id",
      "createdAt": "2023-01-01T00:00:00.000Z",
      "updatedAt": "2023-01-02T00:00:00.000Z"
    }
    ```

- **Error Handling:**
  - **Status Code:** 400 Bad Request
    - **Body:**
      ```json
      {
        "message": "Validation error message"
      }
      ```

  - **Status Code:** 401 Unauthorized
    - **Body:**
      ```json
      {
        "message": "Unauthorized: Invalid or expired token"
      }
      ```

  - **Status Code:** 404 Not Found
    - **Body:**
      ```json
      {
        "message": "Task not found"
      }
      ```

  - **Status Code:** 500 Internal Server Error
    - **Body:**
      ```json
      {
        "message": "Internal server error"
      }
      ```

#### Delete Task API

- **Description:** This API allows users to delete a specific task.
- **Endpoint:** `DELETE /v1/tasks/:taskId`
- **Request:**
  - **Headers:**
    - Authorization: Bearer your_access_token
  - **Params:**
    - taskId: ID of the task to be deleted

- **Response:**
  - **Status Code:** 204 No Content

- **Error Handling:**
  - **Status Code:** 401 Unauthorized
    - **Body:**
      ```json
      {
        "message": "Unauthorized: Invalid or expired token"
      }
      ```

  - **Status Code:** 404 Not Found
    - **Body:**
      ```json
      {
        "message": "Task not found"
      }
      ```

  - **Status Code:** 500 Internal Server Error
    - **Body:**
      ```json
      {
        "message": "Internal server error"
      }
      ```
## UI
<img width="1709" alt="Screenshot 2023-12-05 at 11 23 10 AM" src="https://github.com/Mayankkhannaaa/evivve-assignment/assets/55352124/f0358c9b-c506-43fa-9ff9-70f5048f025f">
<img width="1710" alt="Screenshot 2023-12-05 at 11 23 21 AM" src="https://github.com/Mayankkhannaaa/evivve-assignment/assets/55352124/67eb82ed-a59b-4508-b562-5183feee2d86">
<img width="1710" alt="Screenshot 2023-12-05 at 11 23 30 AM" src="https://github.com/Mayankkhannaaa/evivve-assignment/assets/55352124/6ffe1116-24c5-4848-a67d-67485d9eb5a2">


## Features

### 1. User Authentication

#### 1.1 Login

- **Description:** This feature allows registered users to log in securely.
- **Benefits:**
  - Ensure the security of your account.
  - Access personalized features based on your user profile.
- **How to Use:**
  - Visit the login page.
  - Enter your registered email address and password.
  - Click the "Login" button.
- **Security Note:**
  - Always use a strong, unique password for enhanced account security.

#### 1.2 Register

- **Description:** This feature enables new users to create an account on our platform.
- **Benefits:**
  - Unlock access to exclusive features.
  - Seamlessly manage and organize your tasks.
- **How to Use:**
  - Navigate to the registration page.
  - Fill in the required details, including your name, email, and password.
  - Click the "Register" button to create your account.
- **Security Note:**
  - Ensure your password meets the security standards for a safe registration process.

### 2. Task Management

#### 2.1 Add Task

- **Description:** Users can effortlessly add new tasks to keep track of their activities.
- **Benefits:**
  - Stay organized by categorizing tasks.
  - Set reminders for important deadlines.
- **How to Use:**
  - Access the task management dashboard.
  - Click the "Add Task" button.
  - Enter a task description and select a status (e.g., pending, completed, in progress).
  - Save the task to start tracking it.

#### 2.2 Update Task

- **Description:** This feature allows users to modify existing tasks to reflect changes.
- **Benefits:**
  - Adapt tasks based on evolving priorities.
  - Edit task details or update its status as needed.
- **How to Use:**
  - Navigate to the task management dashboard.
  - Locate the task you want to update.
  - Click the "Edit" button and modify the task details.
  - Save the changes to update the task.

#### 2.3 Delete Task

- **Description:** Users can remove tasks that are no longer relevant or completed.
- **Benefits:**
  - Maintain a clutter-free task list.
  - Focus on current and upcoming tasks.
- **How to Use:**
  - Access the task management dashboard.
  - Locate the task you want to delete.
  - Click the "Delete" button to permanently remove the task.

#### 2.4 Editable Task Details

- **Description:** Users have the flexibility to edit task descriptions and statuses.
- **Benefits:**
  - Ensure task details are accurate and up-to-date.
  - Easily adapt to changes in project requirements.
- **How to Use:**
  - Click on the task you wish to edit.
  - Modify the task description or select a different status.
  - Save the changes to update the task details.

## Get Started

- **Login or register to start managing your tasks today!**
- **Experience the convenience of organized task management and streamline your daily activities.**


## Guide

### Setting Up MySQL Server Locally using Docker
### Prerequisites
- **Docker installed on your machine.**
- ** Node installed on your machine **

### Step 1: Pull MySQL Docker Image

```shell script
docker pull mysql:latest
```
### Step 2: Create a MySQL Container

```shell script
docker run -d --name evivve -e MYSQL_ROOT_PASSWORD=password -e MYSQL_DATABASE=evivve -p 3306:3306 mysql
  ```

### Step 3: Navigate to API directory

- **Start Migration**
```shell script
npx knex migrate:latest
```

- **Run Express Server**
```shell script
  npm run dev
```

### Step 4: Navigate to UI directory in new Terminal

- **Start the Web App**
```shell script
docker run -p 3000:3000 -v $(pwd):/ui -w /ui --name ui node:14 npm start
```

## Libraries

### Frontend

### Tailwind CSS

[Tailwind CSS](https://tailwindcss.com/) is a utility-first CSS framework that provides low-level utility classes to build designs directly in your markup. It promotes a highly customizable and responsive design approach.

### Moment.js

[Moment.js](https://momentjs.com/) is a JavaScript library for parsing, validating, manipulating, and formatting dates. It simplifies date handling in your application, making it easier to work with date and time.

### Backend

### bcrypt

[Bcrypt](https://www.npmjs.com/package/bcrypt) is a password hashing library for Node.js. It securely hashes passwords to protect user credentials. It's commonly used for storing and comparing hashed passwords in authentication systems.

### Passport

[Passport](http://www.passportjs.org/) is authentication middleware for Node.js. It is flexible and modular, supporting various authentication strategies. Passport simplifies the process of integrating user authentication into your application.

### JWT

[JSON Web Token (JWT)](https://jwt.io/) is a compact, URL-safe means of representing claims to be transferred between two parties. It's commonly used for creating authentication tokens. JWTs can encode user information and be securely transmitted between the client and server.
