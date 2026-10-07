from sqlalchemy import Column, Integer, String, DateTime, ForeignKey, Text
from sqlalchemy.sql import func
from app.db.session import Base
import enum


class ReportStatus(str, enum.Enum):
    PENDING = "pending"
    COMPLETED = "completed"
    FAILED = "failed"


class ReportType(str, enum.Enum):
    VISIBILITY = "visibility"
    SEO_AUDIT = "seo_audit"
    COMPETITOR = "competitor"
    COMPREHENSIVE = "comprehensive"


class Report(Base):
    __tablename__ = "reports"

    id = Column(Integer, primary_key=True, index=True)
    clinic_id = Column(Integer, ForeignKey("clinics.id"), nullable=False)
    report_type = Column(String, nullable=False)
    status = Column(String, default=ReportStatus.PENDING, nullable=False)
    download_url = Column(String, nullable=True)
    error_message = Column(Text, nullable=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    completed_at = Column(DateTime(timezone=True), nullable=True)
