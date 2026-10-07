from sqlalchemy import Column, Integer, String, DateTime, ForeignKey, JSON, Float
from sqlalchemy.sql import func
from sqlalchemy.orm import relationship
from app.db.session import Base


class VisibilityScore(Base):
    __tablename__ = "visibility_scores"

    id = Column(Integer, primary_key=True, index=True)
    clinic_id = Column(Integer, ForeignKey("clinics.id"), nullable=False)
    score = Column(Integer, nullable=False)
    explanation = Column(String, nullable=True)
    confidence = Column(Float, nullable=True)
    ai_mentions = Column(Integer, default=0, nullable=False)
    google_ranking = Column(Integer, nullable=True)
    sources_analyzed = Column(JSON, nullable=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now())

    # Relationships
    clinic = relationship("Clinic", back_populates="visibility_scores")


class Competitor(Base):
    __tablename__ = "competitors"

    id = Column(Integer, primary_key=True, index=True)
    clinic_id = Column(Integer, ForeignKey("clinics.id"), nullable=False)
    name = Column(String, nullable=False)
    website_url = Column(String, nullable=False)
    visibility_score = Column(Integer, nullable=True)
    last_analyzed = Column(DateTime(timezone=True), server_default=func.now())
    details = Column(JSON, nullable=True)
