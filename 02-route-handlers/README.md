# Next.js Route Handlers Demo

A comprehensive Next.js 16 project demonstrating various Route Handlers features, API routes, and modern web development patterns.

## Features

### 🔄 Route Handlers

- **Basic API Routes**: GET and POST endpoints for profiles, time, and categories
- **Dynamic Routes**: Parameterized routes with `[id]` patterns
- **HTTP Methods**: Full CRUD operations (GET, POST, PUT, DELETE)
- **Request/Response Handling**: JSON responses, HTML responses, form data processing

### 🎨 UI Components & Pages

- **Interactive Forms**: User input forms with real-time updates
- **3D Graphics**: Integration with Tripo API for 3D model generation
- **Image Upload**: File upload functionality for 3D processing
- **Responsive Design**: Modern UI with Tailwind CSS and backdrop blur effects
- **Theme Provider**: Custom theming system

### 📊 Data Management

- **Comments API**: Full CRUD operations with search and filtering
- **Static Generation**: Time API with `force-static` and revalidation
- **Dynamic Rendering**: Server-side and client-side rendering examples

### 🛠️ Technical Stack

- **Next.js 16.2.5** - Latest App Router
- **React 19.2.4** - Latest React with concurrent features
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Three.js & React Three Fiber** - 3D graphics and animations
- **Axios** - HTTP client for API calls
- **Lucide React** - Modern icon library

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

1. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

2. Set up environment variables:
   Create a `.env.local` file in the root directory and add your Tripo API key:

```env
TRIPO_API_KEY=your_api_key_here
```

### Development

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### API Routes

The project includes several API endpoints:

- `GET /api/profile` - Returns HTML response with headers info
- `GET /api/time` - Returns current time (statically generated, revalidates every 10s)
- `GET/POST /api/comments` - Comments CRUD with search functionality
- `GET/POST /api/comments/[id]` - Individual comment operations
- `GET /api/categories` - Categories data

### Build & Production

```bash
npm run build
npm start
```

## Project Structure

```
app/
├── api/                    # API route handlers
│   ├── generate-3d/       # 3D model generation
│   └── profile/           # Profile endpoints
├── categories/            # Categories API
├── comments/              # Comments CRUD API
│   └── [id]/             # Dynamic comment routes
├── get/                   # Simple GET endpoint
├── products/              # Product pages
│   └── [id]/             # Dynamic product routes
├── profile/               # Profile page
├── rendering/             # Rendering examples
│   ├── dynamic/          # Dynamic rendering
│   └── static/           # Static rendering
├── slider/                # Slider component demo
├── time/                  # Time API
└── tripo/                 # 3D generation interface
```

## Key Concepts Demonstrated

- **Route Handlers**: Modern Next.js API routes
- **Static vs Dynamic Rendering**: Different rendering strategies
- **File Uploads**: Form data processing
- **Environment Variables**: Secure API key management
- **TypeScript Integration**: Type-safe API development
- **3D Graphics**: WebGL integration with Three.js
- **Responsive Design**: Mobile-first approach
- **Error Handling**: Proper API error responses

## Learn More

- [Next.js Documentation](https://nextjs.org/docs) - Official Next.js docs
- [Route Handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers) - API routes guide
- [Tripo 3D API](https://docs.tripo3d.ai/) - 3D generation API documentation

## Contributing

This is a demo project showcasing Next.js Route Handlers. Feel free to explore and modify the code to understand different patterns and approaches.
