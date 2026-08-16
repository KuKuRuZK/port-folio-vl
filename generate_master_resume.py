from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.lib.colors import HexColor
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, HRFlowable, ListFlowable, ListItem
)
from reportlab.lib.styles import ParagraphStyle

BLACK = HexColor('#1A1A1A')
GREY = HexColor('#6E6E6E')

styles = {
    'name': ParagraphStyle('name', fontName='Helvetica-Bold', fontSize=23, leading=25, textColor=BLACK, spaceAfter=1),
    'role': ParagraphStyle('role', fontName='Helvetica', fontSize=12.5, leading=15, textColor=BLACK, spaceAfter=5),
    'contact': ParagraphStyle('contact', fontName='Helvetica', fontSize=8.6, leading=11, textColor=BLACK, spaceAfter=6),
    'h2': ParagraphStyle('h2', fontName='Helvetica-Bold', fontSize=11.5, leading=13.5, textColor=BLACK, spaceBefore=8, spaceAfter=3),
    'body': ParagraphStyle('body', fontName='Helvetica', fontSize=9.3, leading=12.5, textColor=BLACK, spaceAfter=2),
    'job_title': ParagraphStyle('job_title', fontName='Helvetica-Bold', fontSize=10, leading=12, textColor=BLACK, spaceAfter=1),
    'job_meta': ParagraphStyle('job_meta', fontName='Helvetica', fontSize=9, leading=11, textColor=GREY, spaceAfter=2),
    'bullet': ParagraphStyle('bullet', fontName='Helvetica', fontSize=9.1, leading=11.5, textColor=BLACK, spaceAfter=0),
}

def hr():
    return HRFlowable(width="100%", thickness=0.7, color=BLACK, spaceBefore=1, spaceAfter=0)

def section(title):
    return [Paragraph(title, styles['h2']), hr(), Spacer(1, 3)]

def bullets(items):
    return ListFlowable(
        [ListItem(Paragraph(t, styles['bullet']), bulletColor=BLACK) for t in items],
        bulletType='bullet', start='•', leftIndent=12, bulletFontSize=7.5, spaceBefore=1, spaceAfter=3
    )

doc = SimpleDocTemplate(
    "Vladyslav_Sobakar_Resume_MASTER.pdf", pagesize=A4,
    topMargin=13 * mm, bottomMargin=10 * mm, leftMargin=17 * mm, rightMargin=17 * mm
)
flow = []

flow.append(Paragraph("VLADYSLAV SOBAKAR", styles['name']))

# === ADAPT PER JOB #1: change the title to match the exact posting wording ===
flow.append(Paragraph("Python Engineer", styles['role']))

flow.append(Paragraph(
    "Vilnius, Lithuania&nbsp;&nbsp;·&nbsp;&nbsp;+37062112974&nbsp;&nbsp;·&nbsp;&nbsp;vladyslavsobakar@gmail.com"
    "&nbsp;&nbsp;·&nbsp;&nbsp;linkedin.com/in/vladyslav-sobakar&nbsp;&nbsp;·&nbsp;&nbsp;port-folio-vl.netlify.app",
    styles['contact']
))

# === ADAPT PER JOB #2: rewrite this summary to mirror the posting's language ===
flow += section("SUMMARY")
flow.append(Paragraph(
    "Python Engineer building production FastAPI microservices and LLM-powered automation for an online travel "
    "platform. Comfortable across the stack: async REST APIs, multi-provider LLM integration (GPT, Claude), "
    "Docker, SQL, and testing with pytest. Ships complete systems end to end and learns fast by building real, "
    "working software.",
    styles['body']
))

# === ADAPT PER JOB #3: reorder / trim these lines so the most relevant row is first ===
flow += section("SKILLS")
for label, rest in [
    ("Languages:", "Python, SQL, JavaScript, C#"),
    ("Backend &amp; APIs:", "FastAPI, REST APIs, Pydantic, async / await, microservices"),
    ("AI &amp; LLM:", "OpenAI GPT, Anthropic Claude, Google Gemini, Groq, Ollama, prompt engineering, LLM integration"),
    ("DevOps &amp; Tools:", "Docker, Git, pytest, uv, CI/CD"),
    ("Data:", "SQL, BigQuery, Tableau"),
    ("Web:", "HTML, CSS, JavaScript"),
]:
    flow.append(Paragraph(f"<b>{label}</b> {rest}", styles['body']))

# ============================================================
# EXPERIENCE  —  every bullet follows Google's X-Y-Z formula:
#   "Accomplished [X], measured by [Y], by doing [Z]"
# Numbers in <b>bold</b> are where a real metric does the heavy lifting.
# ============================================================
flow += section("WORK EXPERIENCE")

flow.append(Paragraph("Python Engineer", styles['job_title']))
flow.append(Paragraph("WinWin.travel  |  May 2026 – Present", styles['job_meta']))
flow.append(bullets([
    "Developed and configured an AI assistant for the company's booking platform, integrating three LLM "
    "providers (OpenAI GPT, Anthropic Claude, MiniMax) through FastAPI services",
    "Shipped async FastAPI microservices behind an AI travel assistant, enforcing data integrity with Pydantic "
    "and guarding against regressions with pytest",
    "Maintained a shared action contract consumed by both Python and Java/Spring services, keeping two stacks "
    "integrated with no breaking changes",
    "Containerized services with Docker and standardized dependencies with uv for reproducible builds",
]))

flow.append(Paragraph("Python Instructor", styles['job_title']))
flow.append(Paragraph("GOITeens  |  October 2024 – June 2025", styles['job_meta']))
flow.append(bullets([
    "Taught Python to ~40 students by reviewing and debugging their code, improving its correctness, "
    "structure, and efficiency",
    "Translated complex programming concepts into clear explanations for learners of varying levels",
]))

flow.append(Paragraph("Freelance Web Developer", styles['job_title']))
flow.append(Paragraph("Self-employed  |  December 2024 – Present", styles['job_meta']))
flow.append(bullets([
    "Built and shipped 3 responsive client websites (Wix, WordPress), including an automated booking system "
    "that replaced manual scheduling",
]))

# ============================================================
flow += section("PROJECTS")
flow.append(Paragraph("Lin — Ukrainian Voice Assistant (Python, personal project)", styles['job_title']))
flow.append(bullets([
    "Built a voice assistant in Python (~5,700 lines) that executes 140+ voice commands by integrating five "
    "external APIs (Groq, Google Gemini, Spotify, Gmail, Google Calendar) into one system",
    "Made the LLM layer provider-agnostic behind one OpenAI-compatible adapter, so switching between Groq, "
    "Gemini and a local Ollama model is a one-line config change",
    "Cut inbox noise 30x with a rules engine that classifies incoming mail into 9 categories and archives "
    "the 75% that is newsletters, so the assistant only speaks up for mail that matters",
    "Kept the assistant running unattended by adding a watchdog that detects crashes and auto-restarts components",
    "Ran fully offline speech recognition (Vosk) and neural text-to-speech (edge-tts) as the local fallback path",
]))

flow.append(Paragraph("Netflix Content Analysis Dashboard — Tableau / BigQuery", styles['job_title']))
flow.append(bullets([
    "Analyzed a large content dataset in BigQuery and built interactive Tableau dashboards segmented by type, "
    "country, and release year",
]))

# ============================================================
flow += section("EDUCATION & COURSES")
flow.append(Paragraph("<b>Multimedia Design</b>  —  Vilnius Gediminas Technical University  |  2024–2027 (currently enrolled)", styles['body']))
flow.append(Paragraph("<b>Data Analyst</b>  —  Mate Academy  |  2025  (SQL, BigQuery, Tableau, EDA)", styles['body']))
flow.append(Paragraph("<b>Game Development &amp; Digital Animation</b>  —  Mykolo Romerio Universitetas  |  2022–2024", styles['body']))

doc.build(flow)
print("master resume done")
