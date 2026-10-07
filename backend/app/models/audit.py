from sqlalchemy import Column, Integer, String, DateTime, ForeignKey, JSON, Text
from sqlalchemy.sql import func
from sqlalchemy.orm import relationship
from app.db.session import Base
import enum


class AuditStatus(str, enum.Enum):
    PENDING = "pending"
    RUNNING = "running"
    COMPLETED = "completed"
    FAILED = "failed"


class SEOAudit(Base):
    __tablename__ = "seo_audits"

    id = Column(Integer, primary_key=True, index=True)
    clinic_id = Column(Integer, ForeignKey("clinics.id"), nullable=False)
    website_url = Column(String, nullable=False)
    status = Column(String, default=AuditStatus.PENDING, nullable=False)
    score = Column(Integer, nullable=True)
    issues_found = Column(Integer, default=0, nullable=False)
    details = Column(JSON, nullable=True)
    audit_metadata = Column(JSON, nullable=True)
    error_message = Column(Text, nullable=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())
    completed_at = Column(DateTime(timezone=True), nullable=True)

    # Relationships
    clinic = relationship("Clinic", back_populates="audits")
