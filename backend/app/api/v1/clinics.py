from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from app.db.session import get_db
from app.schemas.clinic import ClinicCreate, ClinicResponse
from app.models.clinic import Clinic
from app.models.user import User
from app.core.deps import get_current_user

router = APIRouter(prefix="/clinics", tags=["Clinics"])


@router.post("/", response_model=ClinicResponse)
async def create_clinic(
    clinic: ClinicCreate,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    """
    Create a new clinic for the current user
    """
    db_clinic = Clinic(**clinic.model_dump(), user_id=current_user.id)
    db.add(db_clinic)
    db.commit()
    db.refresh(db_clinic)
    return db_clinic


@router.get("/", response_model=list[ClinicResponse])
async def get_user_clinics(
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    """
    Get all clinics for the current user
    """
    clinics = db.query(Clinic).filter(Clinic.user_id == current_user.id).all()
    return clinics


@router.get("/{clinic_id}", response_model=ClinicResponse)
async def get_clinic(
    clinic_id: int,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    """
    Get a specific clinic by ID
    """
    clinic = db.query(Clinic).filter(
        Clinic.id == clinic_id,
        Clinic.user_id == current_user.id
    ).first()
    
    if not clinic:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Clinic not found"
        )
    
    return clinic


@router.put("/{clinic_id}", response_model=ClinicResponse)
async def update_clinic(
    clinic_id: int,
    clinic_update: ClinicCreate,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    """
    Update a clinic
    """
    clinic = db.query(Clinic).filter(
        Clinic.id == clinic_id,
        Clinic.user_id == current_user.id
    ).first()
    
    if not clinic:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Clinic not found"
        )
    
    for field, value in clinic_update.model_dump().items():
        setattr(clinic, field, value)
    
    db.commit()
    db.refresh(clinic)
    return clinic
