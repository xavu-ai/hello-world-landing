# Hello World Landing Page Backend

A simple FastAPI backend for the Hello World landing page.

## Features

- FastAPI REST API with root and health endpoints
- Automatic OpenAPI documentation (Swagger UI and ReDoc)
- CORS middleware for frontend integration
- Docker and Docker Compose support
- pytest with async test support

## Tech Stack

- **Python 3.12+**
- **FastAPI** - Modern Python web framework
- **Uvicorn** - ASGI server
- **pytest** - Testing framework

## Setup

### Prerequisites

- Python 3.12+
- Docker and Docker Compose (for containerized development)

### Local Development

1. Install dependencies:

```bash
pip install -e ".[dev]"
```

2. Run the server:

```bash
uvicorn backend.main:app --host 0.0.0.0 --port 8000 --reload
```

Or run directly:

```bash
python -m backend.main
```

### Docker Compose

Build and run with Docker Compose:

```bash
docker compose up --build
```

The server will be available at http://localhost:8000

## API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/` | GET | Returns `{"message": "Hello World", "status": "ok"}` |
| `/health` | GET | Health check returning `{"status": "healthy"}` |

## API Documentation

Once the server is running:

- **Swagger UI**: http://localhost:8000/docs
- **ReDoc**: http://localhost:8000/redoc
- **OpenAPI JSON**: http://localhost:8000/openapi.json

## Running Tests

Run the test suite:

```bash
pytest -v
```

## Linting and Type Checking

```bash
# Lint with ruff
ruff check .

# Format with ruff
ruff format .

# Type check with mypy
mypy backend/ --strict
```

## License

MIT
