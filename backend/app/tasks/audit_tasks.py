from app.tasks.celery_app import celery_app
import time


@celery_app.task(name="app.tasks.audit_tasks.run_seo_audit")
def run_seo_audit(clinic_id: int, website_url: str):
    """
    Background task to run SEO audit for a clinic website
    """
    time.sleep(2)  # Simulate work
    return {
        "clinic_id": clinic_id,
        "website_url": website_url,
        "status": "completed",
        "score": 75,
        "issues_found": 5,
    }


@celery_app.task(name="app.tasks.audit_tasks.run_visibility_analysis")
def run_visibility_analysis(clinic_id: int):
    """
    Background task to run AI visibility analysis
    """
    time.sleep(3)  # Simulate work
    return {
        "clinic_id": clinic_id,
        "status": "completed",
        "visibility_score": 82,
        "ai_mentions": 15,
        "google_ranking": 3,
    }
