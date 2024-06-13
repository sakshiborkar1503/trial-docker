# Use the official Node.js image
FROM node:latest

# Create and set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose the port the app runs on (e.g., 3000)
EXPOSE 3000

# Command to run the application
CMD ["node", "app.js"]
