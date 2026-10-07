# The Doc Mirror AI - Implementation Guide

## Current Status & What's Been Done

### ✅ Completed Foundation Work:
1. **Backend Architecture**: FastAPI with proper structure, auth endpoints, database models
2. **Frontend Structure**: Next.js with all dashboard pages, navigation, billing with QR code
3. **Database Models**: User, Clinic, SEOAudit, VisibilityScore, Competitor, Report, Subscription
4. **Auth System**: JWT-based authentication with register/login endpoints
5. **Clinic API**: CRUD operations for clinic management
6. **Frontend-Backend Connection**: Login/Register pages now call real API endpoints

### 🔴 Critical Missing Components:
1. **Database Connection**: PostgreSQL not configured, no tables created
2. **Real Integrations**: AI, Google Maps, SEO audits are UI-only
3. **Background Jobs**: Celery configured but no actual tasks
4. **Real Analytics**: All metrics are hardcoded mock data

## Phase-by-Phase Implementation Plan

### Phase 1: Database Setup ✅ (Code Ready, Needs Configuration)

**What to do:**
1. Install PostgreSQL locally or use Supabase
2. Update `backend/.env` with real DATABASE_URL
3. Run database initialization:
   ```bash
   cd backend
   python -m app.db.init_db
   ```
4. Test connection by running backend server

**Files modified:**
- `backend/app/models/audit.py` - Fixed metadata column conflict
- `backend/app/db/init_db.py` - Created database initialization script

---

### Phase 2: Auth Connection ✅ (Code Ready, Needs Database)

**What to do:**
1. After database is set up, test registration at http://localhost:3000/register
2. Test login at http://localhost:3000/login
3. Verify JWT token is stored in localStorage
4. Verify dashboard accessible after login

**Files modified:**
- `frontend/src/app/login/page.tsx` - Connected to backend API
- `frontend/src/app/register/page.tsx` - Connected to backend API
- `backend/app/api/v1/clinics.py` - Added clinic CRUD endpoints
- `backend/app/api/v1/router.py` - Added clinics router

---

### Phase 3: Real Clinic & User Management (Needs Implementation)

**What to build:**
1. **Clinic Creation Flow**: After registration, redirect to clinic setup
2. **Clinic Selector**: Dropdown in dashboard to switch between clinics
3. **Profile Settings**: Allow users to update their profile
4. **Clinic Form**: Add/edit clinic details in settings page

**Backend endpoints needed:**
```python
# Already created in app/api/v1/clinics.py
POST /api/v1/clinics/ - Create clinic
GET /api/v1/clinics/ - List user's clinics
GET /api/v1/clinics/{id} - Get specific clinic
PUT /api/v1/clinics/{id} - Update clinic
```

**Frontend components needed:**
- Clinic creation form component
- Clinic selector in dashboard header
- Clinic settings form in settings page

---

### Phase 4: Real SEO Audit Engine (Needs Implementation)

**What to build:**
1. **Website Analysis Service**: Analyze URL for SEO factors
2. **Checks to implement:**
   - Page title and meta description
   - Heading structure (H1-H6)
   - Image alt text
   - Internal/external links
   - Broken links (404s)
   - Page speed (via Lighthouse API or similar)
   - Mobile responsiveness
   - SSL/HTTPS
   - Robots.txt
   - Sitemap.xml
   - Structured data (JSON-LD)

**Implementation approach:**
```python
# backend/app/services/seo_audit.py
import httpx
from bs4 import BeautifulSoup
from typing import Dict, Any

class SEOAuditService:
    async def analyze_website(self, url: str) -> Dict[str, Any]:
        # Fetch website
        # Parse HTML
        # Run checks
        # Calculate score
        # Return results
```

**Backend endpoint:**
```python
POST /api/v1/audits/ - Trigger audit
GET /api/v1/audits/{id} - Get audit results
GET /api/v1/audits/ - List audit history
```

**Frontend integration:**
- Update website-audit page to trigger real audits
- Show audit progress with Celery task
- Display detailed findings

---

### Phase 5: AI Visibility Scoring System (Needs Implementation)

**What to build:**
1. **Scoring Methodology**: Document how 0-100 score is calculated
2. **Component Scores**: Break down score into categories
3. **AI Search Presence**: Check if clinic appears in AI search results
4. **Historical Tracking**: Store score history over time

**Scoring factors:**
- Website SEO health (30%)
- Local search presence (25%)
- Content quality (20%)
- Reviews and ratings (15%)
- Technical health (10%)

**Implementation approach:**
```python
# backend/app/services/visibility_scoring.py
class VisibilityScoringService:
    def calculate_score(self, clinic_id: int) -> Dict[str, Any]:
        # Get SEO audit results
        # Get local search data
        # Get review data
        # Calculate weighted score
        # Generate explanation
        # Return result
```

**Important:** Do not fabricate AI mentions or rankings. Only show data from actual API integrations or mark as "not available".

---

### Phase 6: Google Maps Integration (Needs Implementation)

**What to build:**
1. **Google Business Profile API Integration**
2. **Location Management**: Add/edit clinic locations
3. **Review Monitoring**: Track public reviews
4. **Local Rankings**: Where data is legally available

**Prerequisites:**
- Google Maps API key
- Google Business Profile API access
- OAuth2 for user authorization

**Implementation approach:**
```python
# backend/app/integrations/google_maps.py
class GoogleMapsService:
    def get_business_profile(self, place_id: str) -> Dict:
        # Fetch from Google Places API
    
    def get_reviews(self, place_id: str) -> List[Dict]:
        # Fetch reviews
    
    def get_location_ranking(self, query: str, location: str) -> Dict:
        # Fetch local ranking where available
```

**Important:** Clearly label features that require Google API credentials. Provide demo mode when credentials not configured.

---

### Phase 7: Competitor Intelligence (Needs Implementation)

**What to build:**
1. **Competitor Addition**: Add competitor websites/profiles
2. **Comparison Metrics**: Compare SEO, reviews, visibility
3. **Keyword Gap Analysis**: Compare keyword visibility
4. **Historical Trends**: Track competitor changes over time

**Implementation approach:**
```python
# backend/app/services/competitor_analysis.py
class CompetitorService:
    def analyze_competitor(self, competitor_url: str) -> Dict:
        # Run SEO audit on competitor
        # Get public data where available
        # Calculate comparison metrics
```

**Important:** Only use publicly available data. Do not access private competitor information.

---

### Phase 8: AI Content Studio (Needs Implementation)

**What to build:**
1. **AI Integration**: Connect to OpenAI or similar
2. **Content Types**: Bio, blog, FAQ, social posts, etc.
3. **Content Workflow**: Draft → Review → Approve → Publish
4. **SEO Optimization**: Keyword suggestions, metadata
5. **Medical Safeguards**: Disclaimer, clinician review required

**Implementation approach:**
```python
# backend/app/services/ai_content.py
class AIContentService:
    def generate_content(
        self, 
        content_type: str,
        topic: str,
        tone: str,
        keywords: List[str]
    ) -> str:
        # Call AI API
        # Add medical disclaimers
        # Return draft
```

**Important:** Always include medical disclaimers. Require clinician review before publishing. Never generate false medical claims.

---

### Phase 9: AI Growth Assistant (Needs Implementation)

**What to build:**
1. **Chat Interface**: Natural language UI
2. **Data Connection**: Connect to user's actual analytics
3. **Question Answering**: Explain metrics, suggest actions
4. **Context Awareness**: Know which clinic/data user is asking about

**Implementation approach:**
```python
# backend/app/services/ai_assistant.py
class AIAssistantService:
    async def answer_question(
        self,
        question: str,
        user_id: int,
        clinic_id: int
    ) -> str:
        # Fetch relevant data
        # Build context for AI
        # Get AI response
        # Return with citations
```

**Important:** Only answer based on actual connected data. Do not claim access to integrations that aren't configured.

---

### Phase 10: Analytics & Reporting (Needs Implementation)

**What to build:**
1. **Data Aggregation**: Collect metrics from all sources
2. **Historical Trends**: Track changes over time
3. **Date Filters**: 7d, 30d, 90d, custom ranges
4. **Report Generation**: PDF/CSV exports
5. **Scheduled Reports**: Automated monthly reports

**Implementation approach:**
```python
# backend/app/services/analytics.py
class AnalyticsService:
    def get_dashboard_metrics(
        self,
        clinic_id: int,
        date_range: str
    ) -> Dict:
        # Aggregate metrics
        # Calculate trends
        # Return formatted data
```

---

### Phase 11: Smart Alerts & Notifications (Needs Implementation)

**What to build:**
1. **Alert Types**: Audit completion, score changes, new reviews
2. **Notification Channels**: In-app, email
3. **Thresholds**: Configurable alert triggers
4. **Alert History**: Track sent notifications

**Implementation approach:**
```python
# backend/app/services/notifications.py
class NotificationService:
    def send_alert(self, user_id: int, alert_type: str, data: Dict):
        # Create notification record
        # Send in-app notification
        # Send email if configured
```

---

### Phase 12: Multi-Clinic & Team Management (Needs Implementation)

**What to build:**
1. **Organization Model**: Support multiple clinics per account
2. **Team Invitations**: Invite team members
3. **Role-Based Access**: Owner, Admin, Doctor, Staff
4. **Permissions**: Control what each role can do

**Database additions:**
```python
class TeamMember(Base):
    user_id = Column(Integer, ForeignKey("users.id"))
    clinic_id = Column(Integer, ForeignKey("clinics.id"))
    role = Column(String)  # owner, admin, doctor, staff
    permissions = Column(JSON)
```

---

### Phase 13: Admin Panel (Needs Implementation)

**What to build:**
1. **Admin Routes**: Separate admin section
2. **User Management**: View/edit all users
3. **System Health**: Monitor API, database, background jobs
4. **Subscription Management**: View/edit subscriptions
5. **Audit Logs**: Track system changes

**Implementation approach:**
```python
# backend/app/api/v1/admin.py
@router.get("/users")
async def list_all_users(current_admin: User = Depends(get_current_admin)):
    # List all users

@router.get("/health")
async def system_health():
    # Return system health metrics
```

---

### Phase 14: Security Hardening (Needs Implementation)

**What to add:**
1. **Rate Limiting**: Already have slowapi, need to configure
2. **Input Validation**: Strengthen all inputs
3. **CSRF Protection**: Add CSRF tokens
4. **Secret Management**: Use environment variables properly
5. **Audit Logging**: Track all sensitive actions

**Implementation:**
```python
# backend/app/core/rate_limit.py
from slowapi import Limiter
from slowapi.util import get_remote_address

limiter = Limiter(key_func=get_remote_address)

@router.post("/audits/")
@limiter.limit("10/minute")
async def create_audit():
    # Rate limited endpoint
```

---

### Phase 15: Testing Suite (Needs Implementation)

**What to test:**
1. **Unit Tests**: Test individual functions
2. **API Tests**: Test all endpoints
3. **Auth Tests**: Test login, permissions
4. **Integration Tests**: Test end-to-end flows
5. **Tenant Isolation**: Ensure users can't access others' data

**Implementation:**
```python
# backend/tests/test_auth.py
def test_register_user(client):
    response = client.post("/api/v1/auth/register", {...})
    assert response.status_code == 200
    assert "access_token" in response.json()
```

---

### Phase 16: Performance Optimization (Needs Implementation)

**What to optimize:**
1. **Database Queries**: Add indexes, use eager loading
2. **API Response Times**: Add caching with Redis
3. **Frontend Rendering**: Optimize component rendering
4. **Image Optimization**: Use Next.js Image component
5. **Background Jobs**: Use Celery for long tasks

---

### Phase 17: Production Deployment (Needs Implementation)

**What to do:**
1. **Environment Setup**: Configure production variables
2. **Database Migration**: Run migrations on production DB
3. **Background Workers**: Deploy Celery workers
4. **Monitoring**: Add Sentry or similar
5. **Backups**: Set up automated database backups

**Deployment checklist:**
- [ ] PostgreSQL database ready
- [ ] Redis instance ready
- [ ] Environment variables configured
- [ ] SSL certificates enabled
- [ ] Database backups configured
- [ ] Monitoring set up
- [ ] Error tracking configured

---

## Next Steps - Priority Order

### Immediate (Do Now):
1. **Set up PostgreSQL** - This blocks everything else
2. **Configure environment variables** - Update `.env` with real values
3. **Run database initialization** - Create tables
4. **Test auth flow** - Register, login, access dashboard

### Short-term (This Week):
5. **Implement SEO audit service** - Core feature
6. **Connect clinic management** - Essential for multi-clinic
7. **Add real analytics** - Replace mock data

### Medium-term (This Month):
8. **AI integration** - OpenAI for content and scoring
9. **Google Maps integration** - Local SEO
10. **Competitor analysis** - Comparison features

### Long-term (Next Quarter):
11. **Team management** - Multi-user support
12. **Admin panel** - Platform management
13. **Advanced security** - Rate limiting, audit logs
14. **Testing suite** - Quality assurance
15. **Performance optimization** - Caching, indexing

---

## Configuration Required

### Environment Variables Needed:

**Backend (.env):**
```env
DATABASE_URL=postgresql+psycopg://user:password@localhost:5432/thedocmirror
OPENAI_API_KEY=sk-...
GOOGLE_MAPS_API_KEY=AIza...
REDIS_URL=redis://localhost:6379/0
JWT_SECRET_KEY=your-secret-key-here
```

**Frontend (.env.local):**
```env
NEXT_PUBLIC_API_URL=http://localhost:8000/api/v1
```

---

## Development Workflow

1. **Start Backend:**
   ```bash
   cd backend
   .venv\Scripts\activate
   python -m app.db.init_db  # First time only
   uvicorn app.main:app --reload
   ```

2. **Start Frontend:**
   ```bash
   cd frontend
   npm run dev
   ```

3. **Start Celery Worker (for background jobs):**
   ```bash
   cd backend
   celery -A app.tasks.celery_app worker --loglevel=info
   ```

---

## Important Notes

### Data Integrity:
- Never present mock data as real data
- Clearly label sample/estimated metrics
- Show data sources and limitations
- Mark unavailable features clearly

### Medical Ethics:
- Always include health disclaimers
- Require clinician review before publishing
- Never generate false medical claims
- Keep patient data separate from analytics

### Security:
- Never commit secrets to Git
- Use environment variables for all sensitive data
- Implement proper authentication on backend
- Validate all user inputs
- Use HTTPS in production

### Performance:
- Use database indexes on frequently queried fields
- Cache expensive computations
- Use background jobs for long tasks
- Optimize images and assets

---

## Getting Help

For each phase, refer to:
- AGENTS.md - Development commands and architecture
- README.md - Project overview and setup
- API Documentation - http://localhost:8000/docs

---

## Conclusion

This is a massive undertaking. I've completed the foundational work (database models, auth system, API structure, frontend-backend connection). 

**To proceed:**
1. Set up PostgreSQL database
2. Configure environment variables
3. Run database initialization
4. Test auth flow
5. Then implement features phase by phase

Each phase should be implemented, tested, and verified before moving to the next. This ensures a stable, production-ready application rather than a half-baked system with many incomplete features.
