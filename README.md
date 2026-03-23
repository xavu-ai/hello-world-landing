# hello-world-landing

A simple landing page with a FastAPI backend.

## How to Run

### Prerequisites
- [Docker](https://docs.docker.com/get-docker/)

### Build and Run

```bash
docker compose up --build
```

The app will be available at **http://localhost:8000**

### Endpoints

- **/** — Hello World landing page
- **/health** — Health check endpoint (returns `{"status": "healthy"}`)
