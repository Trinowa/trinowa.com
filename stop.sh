#!/bin/bash

# Find and kill the development server process
echo "Stopping development server..."
pkill -f "vite"
echo "Development server stopped."
