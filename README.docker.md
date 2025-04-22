# Docker Setup for Freezer App

This document provides instructions for building and running the Freezer App using Docker.

## Prerequisites

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/) (usually included with Docker Desktop)

## Building and Running with Docker Compose

The easiest way to run the application is using Docker Compose:

```bash
# Navigate to the project directory
cd freezerapp

# Build and start the application
docker-compose up -d

# The application will be available at http://localhost:4200
```

To stop the application:

```bash
docker-compose down
```

## Building and Running with Docker

If you prefer to use Docker commands directly:

```bash
# Navigate to the project directory
cd freezerapp

# Build the Docker image
docker build -t freezerapp .

# Run the container
docker run -d -p 4200:80 --name freezerapp freezerapp
```

To stop the container:

```bash
docker stop freezerapp
docker rm freezerapp
```

## Development vs Production

### Production

The default Dockerfile is configured to build the application in production mode, which:
- Builds the Angular application with production optimizations
- Serves the static files using Nginx
- Is optimized for performance and security

### Development

For development, we've included a separate Docker setup:

- `Dockerfile.dev` - A development-focused Dockerfile that:
  - Runs the Angular development server
  - Enables hot reloading
  - Exposes debugging capabilities

- `docker-compose.dev.yml` - A development Docker Compose configuration that:
  - Maps your local source code into the container
  - Preserves node_modules in the container
  - Exposes the development server on port 4200

To run the application in development mode:

```bash
# Navigate to the project directory
cd freezerapp

# Build and start the development environment
docker-compose -f docker-compose.dev.yml up -d

# The development server will be available at http://localhost:4200
```

To stop the development environment:

```bash
docker-compose -f docker-compose.dev.yml down
```

## Nginx Configuration

A custom Nginx configuration is included and enabled by default in the Dockerfile. The configuration includes:

- Angular routing support (HTML5 pushState)
- Gzip compression for better performance
- Cache headers for static assets
- Error page handling

If you need to modify the Nginx configuration:

1. Edit the `nginx.conf` file in the project root
2. Rebuild the Docker image
