from app.tasks.celery_app import celery_app
import time


@celery_app.task(name="app.tasks.report_tasks.generate_pdf_report")
def generate_pdf_report(clinic_id: int, report_type: str):
    """
    Background task to generate PDF reports
    """
    time.sleep(5)  # Simulate work
    return {
        "clinic_id": clinic_id,
        "report_type": report_type,
        "status": "completed",
        "download_url": f"/reports/{clinic_id}_{report_type}.pdf",
    }


@celery_app.task(name="app.tasks.report_tasks.send_email_report")
def send_email_report(clinic_id: int, recipient_email: str):
    """
    Background task to send reports via email
    """
    time.sleep(2)  # Simulate work
    return {
        "clinic_id": clinic_id,
        "recipient_email": recipient_email,
        "status": "sent",
    }
