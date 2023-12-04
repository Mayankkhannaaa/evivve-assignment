# Features, APIs, and Guide

## APIs

### Authentication APIs

#### Login API

- **Description:** This API allows users to log in and obtain authentication tokens.
- **Endpoint:** `POST /api/auth/login`
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
- **Endpoint:** `POST /api/auth/register`
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
### Step 1: Pull MySQL Docker Image

```shell script
docker pull mysql:latest
```
### Step 2: Create a MySQL Container

```shell script
docker run -d \
  --name mysql-container \
  -e MYSQL_ROOT_PASSWORD=<your_password> \
  -e MYSQL_DATABASE=<your_database> \
  -e MYSQL_USER=<your_user> \
  -e MYSQL_PASSWORD=<your_user_password> \
  -p 3306:3306 \
  mysql:latest
  ```
- **Replace <your_password>, <your_database>, <your_user>, and <your_user_password> with your desired values.**

- **MYSQL_ROOT_PASSWORD: Set the root password for MySQL.**
- **MYSQL_DATABASE: Create an initial database.**
- **MYSQL_USER: Create a non-root user.**
- **MYSQL_PASSWORD: Set the password for the non-root user.**

### Step 3: Connect to MySQL Container **

```shell script
mysql -h 127.0.0.1 -P 3306 -u root -p
```
- **Enter the password when prompted.**
