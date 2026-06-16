from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.lib.colors import HexColor
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, HRFlowable, ListFlowable, ListItem
)
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.enums import TA_LEFT

BLACK = HexColor('#1A1A1A')
GREY = HexColor('#6E6E6E')

styles = {
    'name': ParagraphStyle('name', fontName='Helvetica-Bold', fontSize=23, leading=25, textColor=BLACK, spaceAfter=1),
    'role': ParagraphStyle('role', fontName='Helvetica', fontSize=12.5, leading=15, textColor=BLACK, spaceAfter=5),
    'contact': ParagraphStyle('contact', fontName='Helvetica', fontSize=9, leading=11, textColor=BLACK, spaceAfter=6),
    'h2': ParagraphStyle('h2', fontName='Helvetica-Bold', fontSize=11.5, leading=13.5, textColor=BLACK, spaceBefore=8, spaceAfter=3, tracking=1),
    'body': ParagraphStyle('body', fontName='Helvetica', fontSize=9.3, leading=12.3, textColor=BLACK, spaceAfter=2),
    'small_grey': ParagraphStyle('small_grey', fontName='Helvetica', fontSize=9.3, leading=11.5, textColor=GREY, spaceAfter=1),
    'job_title': ParagraphStyle('job_title', fontName='Helvetica-Bold', fontSize=10, leading=12, textColor=BLACK, spaceAfter=1),
    'job_meta': ParagraphStyle('job_meta', fontName='Helvetica', fontSize=9, leading=11, textColor=GREY, spaceAfter=2),
    'bullet': ParagraphStyle('bullet', fontName='Helvetica', fontSize=9.1, leading=11.3, textColor=BLACK, leftIndent=0, spaceAfter=0),
    'skill_label': ParagraphStyle('skill_label', fontName='Helvetica-Bold', fontSize=9.3, leading=12.3, textColor=BLACK),
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
    "VladyslvaSobakar_Resume.pdf", pagesize=A4,
    topMargin=13 * mm, bottomMargin=10 * mm, leftMargin=17 * mm, rightMargin=17 * mm
)

flow = []

flow.append(Paragraph("VLADYSLAV SOBAKAR", styles['name']))
flow.append(Paragraph("Python Engineer", styles['role']))
flow.append(Paragraph(
    "+37062112974&nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp;vladyslavsobakar@gmail.com&nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp;"
    "Vilnius, Lithuania&nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp;@VVVladyslavvv",
    styles['contact']
))

# ABOUT ME
flow += section("ABOUT ME")
flow.append(Paragraph(
    "Python Engineer with hands-on experience building FastAPI microservices and LLM-powered "
    "automation at WinWin.travel, an online travel platform. Comfortable across the stack — from "
    "async backend services and Docker containers to SQL/BigQuery analytics and Tableau dashboards. "
    "Builds and ships personal AI projects (a Ukrainian voice assistant with offline speech recognition "
    "and an LLM brain) end to end. Background in teaching Python and a Game Development degree, bringing "
    "strong problem-solving and a builder's mindset to backend and AI-assistant engineering.",
    styles['body']
))

# SKILLS
flow += section("SKILLS")
skill_rows = [
    ("Backend & APIs:", "Python, FastAPI, Pydantic, REST APIs, Async / Await"),
    ("AI & LLM:", "LLM tool / action orchestration (OpenAI, Groq), prompt-driven dispatch"),
    ("DevOps & Tooling:", "Docker, Git, pytest, uv"),
    ("Data & Analytics:", "SQL, BigQuery, Tableau, Advanced Excel"),
    ("Web:", "HTML, CSS, JavaScript"),
]
for label, rest in skill_rows:
    flow.append(Paragraph(f"<b>{label}</b> {rest}", styles['body']))
flow.append(Paragraph("<b>Languages:</b> English, Ukrainian, Russian", styles['body']))

# WORK EXPERIENCE
flow += section("WORK EXPERIENCE")
flow.append(Paragraph("Python Engineer", styles['job_title']))
flow.append(Paragraph("WinWin.travel  |  May 2026 – Present", styles['job_meta']))
flow.append(bullets([
    "Develop and maintain Python FastAPI microservices behind an AI-powered travel assistant",
    "Implement LLM tool/action orchestration (OpenAI) to select and run the right action per user request",
    "Maintain a shared action contract consumed by both Python and Java/Spring services",
    "Containerize services with Docker, manage dependencies with uv, and write tests with pytest",
]))

flow.append(Paragraph("Freelance Web Developer", styles['job_title']))
flow.append(Paragraph("Self-employed  |  December 2024 – Present", styles['job_meta']))
flow.append(bullets([
    "Built and customized responsive websites for clients using Wix and WordPress",
    "Automated client workflows, including an online booking system",
    "Designed clean, user-friendly interfaces tailored to each client's needs",
]))

flow.append(Paragraph("Python Instructor", styles['job_title']))
flow.append(Paragraph("GOITeens  |  October 2024 – June 2025", styles['job_meta']))
flow.append(bullets([
    "Delivered structured Python instruction focused on data handling, logic, and problem-solving",
    "Guided students of varying levels, simplifying complex programming topics",
    "Reviewed and corrected student code to improve accuracy, structure, and efficiency",
]))

# EDUCATION
flow += section("EDUCATION")
flow.append(Paragraph("<b>Multimedia Design</b>  —  Vilnius Gediminas Technical University  |  2024–2027", styles['body']))
flow.append(Paragraph("<b>Game Development and Digital Animation</b>  —  Mykolo Romerio Universitetas  |  2022–2024", styles['body']))

# COURSES
flow += section("COURSES")
flow.append(Paragraph("<b>Data Analyst</b> — Mate Academy  |  March – August 2025", styles['body']))
flow.append(Paragraph("<b>Python-Developer</b> — Polygon  |  March – June 2021", styles['body']))

# PROJECTS
flow += section("PROJECTS")
flow.append(Paragraph("Lin — Ukrainian Voice Assistant (Python, personal project)", styles['job_title']))
flow.append(bullets([
    "Built a Windows desktop voice assistant from scratch in Python (~4,600 lines, 140+ voice commands)",
    "Offline Ukrainian speech recognition (Vosk) and neural text-to-speech (edge-tts); LLM brain via Groq / Llama",
    "Integrated Spotify, Gmail, Google/YouTube and weather; runs as a background tray service with a watchdog",
]))
flow.append(Paragraph("Netflix Content Analysis Dashboard — Tableau", styles['job_title']))
flow.append(bullets([
    "Analyzed a Netflix content dataset and built interactive dashboards by type, country, and release year",
    "Presented insights through clear and structured visualizations",
]))

doc.build(flow)
print("done")
