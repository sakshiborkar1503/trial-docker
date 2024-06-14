# Use the official Node.js image as a base image
FROM node 

# Create and change to the app directory
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json (if available)
COPY package*.json ./

# Install the project dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Expose the port the app runs on
EXPOSE 3021

# Command to run the app
CMD ["node"]

