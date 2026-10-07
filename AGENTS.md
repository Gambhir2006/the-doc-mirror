# The Doc Mirror AI - Development Guide

## Project Overview

This is a production-grade AI-Powered Doctor Visibility & Practice Intelligence SaaS platform built with Next.js (frontend) and FastAPI (backend).

## Development Commands

### Backend Development

```bash
# Navigate to backend
cd backend

# Activate virtual environment (Windows)
.venv\Scripts\activate

# Activate virtual environment (Linux/Mac)
source .venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Run database migrations
alembic upgrade head

# Start development server
uvicorn app.main:app --reload --host 127.0.0.1 --port 8000

# Run Celery worker (separate terminal)
celery -A app.tasks.celery_app worker --loglevel=info

# Run Celery beat scheduler (separate terminal)
celery -A app.tasks.celery_app beat --loglevel=info

# Run tests
pytest

# Code linting
ruff check .
ruff format .
```

### Frontend Development

```bash
# Navigate to frontend
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

### Docker Development

```bash
# Start all services (PostgreSQL, Redis, Backend, Celery)
cd infrastructure
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down

# Stop and remove volumes
docker-compose down -v
```

## Project Structure

```
the-doc-mirror/
├── frontend/                 # Next.js application
│   ├── src/
│   │   ├── app/             # Next.js app router pages
│   │   ├── components/      # React components
│   │   ├── lib/             # Utilities (API client, etc.)
│   │   ├── hooks/           # Custom React hooks
│   │   └── types/           # TypeScript types
│   ├── public/              # Static assets
│   └── package.json
├── backend/                 # FastAPI application
│   ├── app/
│   │   ├── api/v1/          # API endpoints
│   │   ├── core/            # Configuration & security
│   │   ├── models/          # SQLAlchemy models
│   │   ├── schemas/         # Pydantic schemas
│   │   ├── services/        # Business logic
│   │   ├── ai/              # AI integrations
│   │   ├── integrations/    # External APIs
│   │   ├── tasks/           # Celery tasks
│   │   └── db/              # Database session
│   ├── alembic/             # Database migrations
│   ├── tests/               # Test files
│   └── requirements.txt
├── infrastructure/          # Docker configurations
│   └── docker-compose.yml
└── docs/                    # Documentation
```

## Key Technologies

### Frontend
- Next.js 15 with App Router
- TypeScript
- Tailwind CSS
- React Query (TanStack Query)
- Recharts (charts)
- Lucide React (icons)
- Supabase (auth)
- React Hook Form + Zod (forms)

### Backend
- FastAPI
- Python 3.11
- SQLAlchemy (ORM)
- PostgreSQL
- Alembic (migrations)
- Redis + Celery (background tasks)
- JWT authentication
- OpenAI (AI integration)
- Google Maps API
- Stripe & Razorpay (payments)

## API Endpoints

### Authentication
- `POST /api/v1/auth/register` - Register new user
- `POST /api/v1/auth/login` - Login user
- `GET /api/v1/auth/me` - Get current user

### Health
- `GET /api/v1/health` - Health check

### API Documentation
- Swagger UI: http://localhost:8000/docs
- ReDoc: http://localhost:8000/redoc

## Database Models

- `User` - User accounts with roles
- `Clinic` - Clinic/doctor profiles
- `SEOAudit` - SEO audit results
- `VisibilityScore` - AI visibility scores
- `Competitor` - Competitor tracking
- `Report` - Generated reports
- `Subscription` - User subscriptions

## Environment Configuration

### Backend (.env)
- Database connection (PostgreSQL)
- Redis connection
- API keys (OpenAI, Google Maps, etc.)
- Payment gateway credentials
- JWT secret
- Supabase credentials

### Frontend (.env.local)
- Backend API URL
- Supabase public keys
- Stripe publishable key

## Development Workflow

1. **Feature Development**
   - Create feature branch
   - Implement backend models/schemas/API
   - Create database migration
   - Implement frontend components
   - Test locally

2. **Database Changes**
   - Modify models in `backend/app/models/`
   - Generate migration: `alembic revision --autogenerate -m "description"`
   - Review migration file
   - Apply migration: `alembic upgrade head`

3. **Testing**
   - Write unit tests in `backend/tests/`
   - Run tests: `pytest`
   - Test API endpoints via Swagger UI

4. **Code Quality**
   - Run linter: `ruff check .`
   - Format code: `ruff format .`
   - Fix any issues before committing

## Deployment

### Frontend (Vercel)
1. Connect GitHub repository
2. Set root directory to `frontend`
3. Configure environment variables
4. Deploy automatically on push

### Backend (Render)
1. Connect GitHub repository
2. Set root directory to `backend`
3. Configure build/start commands
4. Add environment variables
5. Deploy automatically on push

### Database (Supabase)
1. Create Supabase project
2. Get connection string
3. Run migrations
4. Configure RLS policies

## Security Notes

- Never commit `.env` files
- Use strong secrets in production
- Enable HTTPS
- Implement rate limiting
- Validate all inputs
- Keep dependencies updated

## Troubleshooting

### Backend won't start
- Check PostgreSQL is running
- Verify DATABASE_URL in .env
- Check port 8000 is not in use

### Frontend build fails
- Clear .next cache: `rm -rf .next`
- Reinstall dependencies: `rm -rf node_modules && npm install`
- Check environment variables

### Celery tasks not running
- Verify Redis is running
- Check CELERY_BROKER_URL
- Check worker logs

## Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [FastAPI Documentation](https://fastapi.tiangolo.com)
- [SQLAlchemy Documentation](https://docs.sqlalchemy.org)
- [Celery Documentation](https://docs.celeryq.dev)
- [Supabase Documentation](https://supabase.com/docs)
