from pydantic import BaseModel
from typing import Optional, Any
from datetime import datetime


class VisibilityScoreBase(BaseModel):
    score: int
    explanation: Optional[str] = None
    confidence: Optional[float] = None
    ai_mentions: int = 0
    google_ranking: Optional[int] = None


class VisibilityScoreCreate(VisibilityScoreBase):
    clinic_id: int


class VisibilityScoreResponse(VisibilityScoreBase):
    id: int
    clinic_id: int
    sources_analyzed: Optional[Any] = None
    created_at: datetime

    class Config:
        from_attributes = True
