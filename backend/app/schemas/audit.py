from pydantic import BaseModel
from typing import Optional, Any
from datetime import datetime


class SEOAuditBase(BaseModel):
    website_url: str


class SEOAuditCreate(SEOAuditBase):
    clinic_id: int


class SEOAuditResponse(SEOAuditBase):
    id: int
    clinic_id: int
    status: str
    score: Optional[int] = None
    issues_found: int
    details: Optional[Any] = None
    created_at: datetime
    updated_at: Optional[datetime] = None
    completed_at: Optional[datetime] = None

    class Config:
        from_attributes = True
