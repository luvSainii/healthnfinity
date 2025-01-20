# Dockerfile for frontend
FROM node:20

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy all other files
COPY . .

# Build the Next.js app
RUN npm run build

# Expose port
EXPOSE 3000

# Command to run the application
CMD ["npm", "run", "start"]
