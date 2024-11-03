# Dockerfile for backend
FROM node:18

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all other files
COPY . .

# Set environment variables (for demonstration; you should manage these securely)
ENV MONGO_URI=mongodb+srv://beasaini2002:IsTWuriDUj1BaAwQ@healthnfinity.cenia.mongodb.net/?retryWrites=true&w=majority&appName=Healthnfinity
ENV JWT_SECRET=Bc$2020064

# Expose port
EXPOSE 4000

# Command to run the application
CMD ["npm", "run", "dev"]
