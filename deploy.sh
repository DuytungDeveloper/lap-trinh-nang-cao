#!/bin/bash

# Step 1: Run docker-compose
echo "Starting Docker containers..."
docker-compose up -d

# Check if docker-compose was successful
if [ $? -ne 0 ]; then
  echo "Failed to start Docker containers."
  exit 1
fi

# Step 2: Navigate to the convert directory
cd convert || { echo "Directory 'convert' not found."; exit 1; }

# Step 3: Run index.js using Node.js
echo "Running index.js..."
env MONGO_URI='mongodb://root:123456@localhost:27017/lap-trinh-nang-cao?authSource=admin' node index.js

# Check if the Node.js script was successful
if [ $? -ne 0 ]; then
  echo "Failed to run index.js."
  exit 1
fi

echo "Script executed successfully."