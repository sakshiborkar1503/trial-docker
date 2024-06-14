FROM node:14

# Create app directory
WORKDIR internal/modules/cjs/loader.js

# Install app dependencies
COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .

# Expose port and start application
EXPOSE 3021
CMD ["node", "index.js"]
