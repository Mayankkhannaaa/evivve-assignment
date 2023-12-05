# Use an official Node.js Alpine image as a parent image
FROM node:14-alpine

# Set the working directory in the container
WORKDIR /api

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Expose the port the app runs on
EXPOSE 8080

# Define the command to run your app
CMD ["npm", "start"]
