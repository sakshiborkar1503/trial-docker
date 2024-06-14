FROM ubuntu:latest

WORKDIR /app

COPY . .  # Copy current directory contents to /app within container

RUN apt-get update && apt-get install -y nodejs

# Install app dependencie
# RUN npm install

# Set environment variables 
# ENV MY_VAR=3021

EXPOSE 3000  # Optional: Expose port for container

CMD [ "node", "index.js" ]  # Run the application 
