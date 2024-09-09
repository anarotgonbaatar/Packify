@echo off

:: Batch script for automating backend and frontend setup and running Packify.

:: Navigate to the backend directory
echo Setting up Packify
cd C:\Users\anaro\Desktop\Packify\backend

:: Seed the database
echo Seeding the database...
start /b node seed.js

:: Start the backend server in a new window
echo Starting the backend server...
:: start without opening a new window
start /b node index.js

:: Navigate to the frontend directory
cd C:\Users\anaro\Desktop\Packify\frontend

:: Start the frontend development server
echo Starting the frontend development server...
npm start