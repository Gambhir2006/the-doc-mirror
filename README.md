# The Doc Mirror AI

AI-Powered Doctor Visibility & Practice Intelligence SaaS Platform

## Overview

The Doc Mirror AI is a comprehensive SaaS platform that helps doctors and clinics improve their online visibility through AI-powered analytics, SEO audits, competitor intelligence, and automated reports.

## Features

- **AI Visibility Score**: Explainable 0-100 score for doctor's online presence
- **AI Search Intelligence**: Track mentions and citations across AI search platforms
- **Google Maps Intelligence**: Business profile and local search presence analysis
- **Competitor Intelligence**: Compare visibility with competitors
- **Advanced SEO Audit**: Website speed, metadata, headings, broken links analysis
- **AI Recommendations**: Personalized action plans to improve visibility
- **AI Content Studio**: Generate SEO-friendly doctor bios, blogs, FAQs
- **Live Analytics**: Historical trends, charts, and performance monitoring
- **Automated Reports**: PDF reports, scheduled analysis, email delivery
- **SaaS Subscription**: Free, Pro, and Enterprise plans with payment integration
- **AI Assistant**: Conversational assistant based on dashboard data
- **Multi-Clinic Management**: Manage multiple clinics and team members
- **Security Center**: Authentication, role-based access, audit logs, rate limiting

## Technology Stack

### Frontend
- **Framework**: Next.js 15 with TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React Query
- **Charts**: Recharts
- **Icons**: Lucide React
- **Authentication**: Supabase Auth
- **Forms**: React Hook Form + Zod
- **Deployment**: Vercel

### Backend
- **Framework**: FastAPI with Python 3.11
- **Database**: PostgreSQL with Supabase
- **ORM**: SQLAlchemy
- **Migrations**: Alembic
- **Cache/Queue**: Redis + Celery
- **Authentication**: JWT with python-jose
- **API Documentation**: Swagger UI (automatic)
- **Deployment**: Render

### Infrastructure
- **Containerization**: Docker & Docker Compose
- **Version Control**: Git
- **CI/CD**: GitHub Actions (recommended)

## Project Structure

```
the-doc-mirror/
├── frontend/                 # Next.js frontend application
│   ├── src/
│   │   ├── app/             # Pages and layouts
│   │   ├── components/      # Reusable UI components
│   │   ├── lib/             # Utilities and API clients
│   │   ├── hooks/           # Custom React hooks
│   │   └── types/           # TypeScript types
│   ├── public/              # Static assets
│   ├── .env.local           # Frontend environment variables
│   ├── package.json         # Frontend dependencies
│   └── Dockerfile           # Frontend container
├── backend/                 # FastAPI backend application
│   ├── app/
│   │   ├── api/v1/          # REST API routes
│   │   ├── core/            # Config, security, dependencies
│   │   ├── models/          # Database models
│   │   ├── schemas/         # Request/response schemas
│   │   ├── services/        # Business logic
│   │   ├── ai/              # AI analysis and recommendations
│   │   ├── integrations/    # External API integrations
│   │   ├── tasks/           # Celery background tasks
│   │   └── db/              # Database session
│   ├── alembic/             # Database migrations
│   ├── tests/               # Automated tests
│   ├── .env                 # Backend environment variables
│   ├── requirements.txt     # Python dependencies
│   └── Dockerfile           # Backend container
├── infrastructure/          # Docker compose and deployment configs
│   └── docker-compose.yml   # Local development setup
├── docs/                    # Documentation
├── .gitignore              # Git ignore rules
└── README.md               # This file
```

## Local Development Setup

### Prerequisites

- Node.js 18+ and npm
- Python 3.11+
- PostgreSQL 15+
- Redis 7+
- Git

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/the-doc-mirror.git
cd the-doc-mirror
```

### 2. Set Up Backend

```bash
cd backend

# Create virtual environment
python -m venv .venv
.venv\Scripts\activate  # On Windows
# source .venv/bin/activate  # On Linux/Mac

# Install dependencies
pip install -r requirements.txt

# Configure environment variables
cp .env.example .env
# Edit .env with your actual configuration

# Run database migrations
alembic upgrade head

# Start the backend server
uvicorn app.main:app --reload --host 127.0.0.1 --port 8000
```

Backend will be available at:
- API: http://localhost:8000
- API Documentation: http://localhost:8000/docs
- Health Check: http://localhost:8000/api/v1/health

### 3. Set Up Frontend

```bash
cd frontend

# Install dependencies
npm install

# Configure environment variables
cp .env.local.example .env.local
# Edit .env.local with your backend URL

# Start the development server
npm run dev
```

Frontend will be available at:
- Application: http://localhost:3000

### 4. Using Docker Compose (Optional)

For local development with PostgreSQL and Redis:

```bash
cd infrastructure
docker-compose up -d
```

This will start:
- PostgreSQL on port 5432
- Redis on port 6379
- Backend API on port 8000
- Celery Worker
- Celery Beat (scheduler)

## Environment Variables

### Backend (.env)

```env
APP_NAME=The Doc Mirror
ENVIRONMENT=development
DEBUG=true

FRONTEND_URL=http://localhost:3000
BACKEND_URL=http://localhost:8000

DATABASE_URL=postgresql+psycopg://USER:PASSWORD@HOST:5432/DATABASE

SUPABASE_URL=
SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=

OPENAI_API_KEY=
GOOGLE_MAPS_API_KEY=

RAZORPAY_KEY_ID=
RAZORPAY_KEY_SECRET=

CASHFREE_APP_ID=
CASHFREE_SECRET_KEY=

STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=

REDIS_URL=redis://localhost:6379/0

JWT_SECRET_KEY=your_secret_key_here
JWT_ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=30

RATE_LIMIT_PER_MINUTE=60

CELERY_BROKER_URL=redis://localhost:6379/1
CELERY_RESULT_BACKEND=redis://localhost:6379/2

SENTRY_DSN=
```

### Frontend (.env.local)

```env
NEXT_PUBLIC_API_URL=http://localhost:8000/api/v1

NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=

NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
```

## Deployment

### Frontend Deployment (Vercel)

1. Push code to GitHub
2. Go to Vercel Dashboard
3. Import repository
4. Set Root Directory to `frontend`
5. Configure environment variables
6. Deploy

### Backend Deployment (Render)

1. Push code to GitHub
2. Go to Render Dashboard
3. Create new Web Service
4. Connect GitHub repository
5. Set Root Directory to `backend`
6. Configure build and start commands
7. Add environment variables
8. Deploy

### Database (Supabase)

1. Create project on Supabase
2. Run migrations using Alembic
3. Configure Row-Level Security policies
4. Update backend DATABASE_URL

### Background Worker (Render)

1. Create Background Worker on Render
2. Use same repository as backend
3. Set start command: `celery -A app.tasks.celery_app worker --loglevel=info`
4. Configure environment variables

## API Documentation

Once the backend is running, visit:
- Swagger UI: http://localhost:8000/docs
- ReDoc: http://localhost:8000/redoc

## Development Roadmap

- [x] Foundation - Frontend and backend setup
- [x] Database schema and migrations
- [x] Authentication and user roles
- [ ] Doctor and clinic profiles
- [ ] Website SEO audit engine
- [ ] Google Maps and business profile analysis
- [ ] Evidence-based visibility scoring
- [ ] AI insights and recommendations
- [ ] AI content studio
- [ ] Competitor comparison
- [ ] Celery background tasks and scheduled reports
- [ ] Subscription plans and payments
- [ ] Verified payment webhooks
- [ ] Team and multi-clinic support
- [ ] RLS, audit logs, rate limiting
- [ ] Automated tests and CI/CD
- [ ] Performance optimization and caching
- [ ] Monitoring and error tracking

## Security Considerations

- Never commit `.env` files or secrets to version control
- Use strong, unique passwords for production databases
- Enable HTTPS in production
- Implement rate limiting on all public endpoints
- Use Row-Level Security (RLS) in Supabase
- Validate and sanitize all user inputs
- Keep dependencies updated
- Monitor for security vulnerabilities

## License

This project is proprietary software. All rights reserved.

## Support

For support, email support@thedocmirror.com or visit our documentation at docs.thedocmirror.com
