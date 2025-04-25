# Freezer Inventory App

An Angular-based application for tracking items in your freezer. Keep track of what you have stored, when you added it, and manage quantities easily.

## Features

- **Track Freezer Contents**: Add, remove, and update items in your freezer
- **Item Management**: Increment/decrement quantities with easy-to-use controls
- **Image Support**: Add images to your freezer items for easy identification
- **Persistent Storage**: Data is saved to localStorage for persistence between sessions

Potential Future Options: [Potential Features](./POTENTIAL_FEATURES.md)

## Getting Started

### Local Development

1. **Prerequisites**
   - Node.js (v20 or later recommended)
   - npm (included with Node.js)

2. **Installation**
   ```bash
   # Clone the repository
   git clone <repository-url>
   cd freezerapp
   
   # Install dependencies
   npm install
   ```

3. **Development Server**
   ```bash
   # Start the development server
   ng serve
   ```

   Once running, open your browser to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Docker

#### Production Environment

1. **Prerequisites**
   - [Docker](https://docs.docker.com/get-docker/)
   - [Docker Compose](https://docs.docker.com/compose/install/) (usually included with Docker Desktop)

2. **Build and Run**
   ```bash
   # Build and start the application
   docker-compose up -d
   
   # The application will be available at http://localhost:4200
   ```

   To stop the application:
   ```bash
   docker-compose down
   ```

#### Development Environment

For development with hot reloading:

```bash
# Build and start the development environment
docker-compose -f docker-compose.dev.yml up -d

# The development server will be available at http://localhost:4200
```

To stop the development environment:
```bash
docker-compose -f docker-compose.dev.yml down
```

## Building the Application

```bash
# Build for production
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory.

## Running Tests

```bash
# Execute unit tests
ng test

# Run tests for a specific component
ng test --include=src/app/path/to/file.spec.ts
```

## Docker Configuration

The application includes:

- `Dockerfile` - Production build with Nginx server
- `Dockerfile.dev` - Development setup with hot reloading
- `docker-compose.yml` - Production environment configuration
- `docker-compose.dev.yml` - Development environment with volume mapping
- `nginx.conf` - Custom Nginx configuration for Angular routing

See [README.docker.md](README.docker.md) for detailed Docker instructions.

## Additional Resources

For more information on using the Angular CLI, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
