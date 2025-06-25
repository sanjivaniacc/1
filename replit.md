# System Overview

This is a full-stack web application built with a React frontend and Express backend, featuring a modern UI design with animated bubble backgrounds and glassmorphism effects. The application uses TypeScript throughout and includes database integration via Drizzle ORM.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **UI Library**: Radix UI components with shadcn/ui styling system
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **State Management**: TanStack Query (React Query) for server state
- **Routing**: Wouter for client-side routing
- **Build Tool**: Vite with React plugin and runtime error overlay

### Backend Architecture
- **Runtime**: Node.js with TypeScript
- **Framework**: Express.js with RESTful API structure
- **Database**: PostgreSQL with Drizzle ORM
- **Session Storage**: PostgreSQL-based session store via connect-pg-simple
- **Development**: tsx for TypeScript execution in development

### UI Design System
- **Theme**: Custom design system with light/dark mode support
- **Components**: Comprehensive UI component library based on Radix UI primitives
- **Visual Effects**: Animated bubble background with glassmorphism styling
- **Typography**: Inter font family for consistent branding

## Key Components

### Database Layer
- **ORM**: Drizzle ORM with PostgreSQL adapter
- **Schema**: Centralized schema definition in `shared/schema.ts`
- **Migrations**: Automated via drizzle-kit
- **Connection**: Neon Database serverless driver for PostgreSQL

### Data Models
- **Users Table**: Basic user authentication structure with username/password
- **Schema Validation**: Zod integration for type-safe data validation
- **Storage Interface**: Abstracted storage layer with in-memory implementation for development

### API Structure
- **Route Organization**: Centralized route registration in `server/routes.ts`
- **Middleware**: Request logging, JSON parsing, and error handling
- **Storage Layer**: Pluggable storage interface supporting different backends

### Frontend Components
- **Layout**: Responsive design with mobile-first approach
- **Navigation**: Collapsible navigation with glassmorphism styling
- **Background**: Animated bubble background with CSS animations
- **Pages**: Home page with team information and feature cards

## Data Flow

1. **Client Requests**: React components use TanStack Query for API calls
2. **API Layer**: Express routes handle HTTP requests with middleware processing
3. **Data Layer**: Storage interface abstracts database operations
4. **Response**: JSON responses with proper error handling and logging

## External Dependencies

### Database & ORM
- **@neondatabase/serverless**: Serverless PostgreSQL driver
- **drizzle-orm**: Type-safe ORM with PostgreSQL support
- **drizzle-zod**: Schema validation integration

### UI & Styling
- **@radix-ui/react-***: Comprehensive UI primitive components
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Component variant management
- **framer-motion**: Animation library for enhanced UX

### Development Tools
- **tsx**: TypeScript execution for development
- **esbuild**: Fast bundling for production builds
- **@replit/vite-plugin-***: Replit-specific development enhancements

## Deployment Strategy

### Development Environment
- **Port Configuration**: Backend on 5000, frontend served via Vite dev server
- **Hot Reload**: Vite HMR with React Fast Refresh
- **Database**: PostgreSQL module provisioned in Replit environment

### Production Build
- **Frontend**: Vite builds static assets to `dist/public`
- **Backend**: esbuild bundles server code to `dist/index.js`
- **Deployment**: Autoscale deployment target with health checks

### Environment Configuration
- **Database URL**: Required environment variable for PostgreSQL connection
- **Build Process**: Two-stage build (frontend assets + backend bundle)
- **Static Serving**: Production server serves built frontend assets

## Changelog
- June 24, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.