# Premier Properties - Real Estate Platform

## Overview

Premier Properties is a modern real estate web application built to help users browse, search, and discover properties. The platform features property listings, agent profiles, an AI-powered chatbot assistant, and a clean, professional user interface. The application follows a client-server architecture with a React frontend and Express backend, designed to provide an aspirational real estate browsing experience inspired by industry leaders like Zillow and Airbnb.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- React 18+ with TypeScript for type-safe component development
- Vite as the build tool and development server for fast hot module replacement
- Wouter for client-side routing (lightweight React Router alternative)

**UI Component Strategy**
- Shadcn/ui component library built on Radix UI primitives for accessible, composable components
- Tailwind CSS for utility-first styling with custom design tokens
- New York style variant for Shadcn components
- Custom CSS variables for theming with light mode support

**Design System**
- Typography: Inter/DM Sans primary font, Playfair Display/Crimson Pro for headings
- Spacing: Tailwind units (4, 6, 8, 12, 16, 20)
- Container strategy: max-w-7xl for full sections, max-w-6xl for content, max-w-2xl for forms
- Responsive grid layouts: 1 column mobile, 2-3 columns desktop
- Elevation system using hover and active states for interactive elements

**State Management**
- TanStack Query (React Query) for server state management and API calls
- Local component state with React hooks
- Custom hooks for mobile detection and toast notifications

**Key Features**
- Property browsing with filtering and sorting capabilities
- Agent profiles with ratings and specializations
- AI-powered chatbot for customer support
- Responsive design with mobile-first approach
- Hero section with property search
- Featured properties showcase
- Mock data structure ready for backend integration

### Backend Architecture

**Framework**
- Express.js server running on Node.js with TypeScript
- ESM module system throughout the codebase
- Custom middleware for request logging and error handling

**API Design**
- RESTful endpoints under `/api` prefix
- Chat endpoint (`POST /api/chat`) for AI chatbot integration
- Zod schemas for request validation
- JSON request/response format with error handling

**Development Patterns**
- Separation of concerns: routes, storage, and business logic
- Vite middleware integration for development with HMR
- Static file serving in production build
- Request timing and logging middleware

**Session & Authentication Setup**
- Session infrastructure configured (connect-pg-simple)
- User schema defined but authentication not yet implemented
- Prepared for future auth integration

### Data Storage Solutions

**Database**
- PostgreSQL configured via Neon serverless driver
- Drizzle ORM for type-safe database queries and schema management
- Migration support configured via drizzle-kit

**Schema Design**
- Users table with username/password fields
- UUID primary keys with PostgreSQL's gen_random_uuid()
- Zod schemas for validation derived from Drizzle schemas

**Storage Abstraction**
- IStorage interface defining CRUD operations
- MemStorage in-memory implementation for development/testing
- Designed to swap between in-memory and database implementations

**Current State**
- Database connection configured but currently using in-memory storage
- Schema defined and ready for database migration
- Mock data in frontend components (properties, agents) awaiting database integration

### External Dependencies

**AI Integration**
- Google Gemini AI (Generative AI SDK) for chatbot functionality
- Context-aware responses limited to Premier Properties information
- Conversation history support for multi-turn dialogues
- API key authentication via environment variables

**UI Component Libraries**
- Radix UI primitives for 20+ accessible components (dialogs, dropdowns, navigation, etc.)
- class-variance-authority for component variant management
- Tailwind CSS with autoprefixer for cross-browser styling
- Lucide React for icon components

**Development Tools**
- Replit-specific plugins for dev banner, error overlay, and cartographer
- TypeScript for type safety across the stack
- ESBuild for production builds
- React Hook Form with Zod resolvers for form validation

**Font Resources**
- Google Fonts integration for DM Sans, Fira Code, Geist Mono, Playfair Display

**Third-Party Services Configuration**
- Google Gemini API key required (GEMINI_API_KEY environment variable)
- PostgreSQL database URL required (DATABASE_URL environment variable)
- Neon serverless database provider

**Asset Management**
- Generated images stored in attached_assets directory
- Property images, agent headshots, and hero images
- Vite alias configured for asset imports (@assets)