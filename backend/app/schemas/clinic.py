from pydantic import BaseModel
from typing import Optional
from datetime import datetime


class ClinicBase(BaseModel):
    name: str
    website_url: str
    address: Optional[str] = None
    city: Optional[str] = None
    state: Optional[str] = None
    country: Optional[str] = None
    phone: Optional[str] = None
    google_maps_url: Optional[str] = None


class ClinicCreate(ClinicBase):
    pass


class ClinicUpdate(ClinicBase):
    pass


class ClinicResponse(ClinicBase):
    id: int
    user_id: int
    created_at: datetime
    updated_at: Optional[datetime] = None

    class Config:
        from_attributes = True
