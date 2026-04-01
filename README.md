# Beathub API

A music discovery and browsing API that helps users find music based on their preferred categories. The API provides features for user authentication, song management, artist browsing, and playlist creation.

## Overview

Beathub API is built with Node.js and Express, using MongoDB as the database. It includes secure user authentication with JWT tokens and password hashing.

## Features

- User authentication and authorization
- Browse songs by category, artist, and playlist
- Create and manage personal playlists
- User account management

## Getting Started

### Prerequisites

- Docker and Docker Compose (for containerized deployment)
- Node.js 18+ (for local development)
- MongoDB connection

### Installation

#### Using Docker (Recommended)

1. Build and run the application:
   ```bash
   docker-compose up --build
   ```

2. The API will be available at `http://localhost:3000`

#### Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Configure environment variables in a `.env` file

3. Start the development server:
   ```bash
   npm run dev
   ```

## Docker Setup

The application uses a multi-stage Docker build for optimized image size:

- **Stage 1 (Builder)**: Installs dependencies from Node.js 18-alpine
- **Stage 2 (Runner)**: Runs the application with a non-root user for enhanced security

The container exposes port `3000` and runs the main application entry point.

## Project Structure

- `/models` - Database models for Users, Artists, Songs, Playlists, and Albums
- `/middleware` - Authentication and authorization middleware
- `/scripts/controllers` - Business logic controllers
- `/scripts/routes` - API endpoint definitions
- `/utils` - Utility functions
- `/docs` - Design documentation

## Technologies Used

- **Express.js** - Web framework
- **Mongoose** - MongoDB object modeling
- **JWT** - Token-based authentication
- **bcryptjs** - Password hashing and verification

## API Security

The API implements JWT-based authentication with secure password hashing to protect user data and endpoints.