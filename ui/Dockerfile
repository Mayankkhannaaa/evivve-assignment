# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory in the container
WORKDIR /ui

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Define the command to run your app
CMD ["npm", "start"]

# docker run -p 3000:3000 -v $(pwd):/app-ui -w /app-ui node:14 npm start
