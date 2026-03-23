"""FastAPI application for Hello World landing page backend."""

import logging
from collections.abc import AsyncGenerator
from contextlib import asynccontextmanager

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse

# Configure structured logging
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s - %(name)s - %(levelname)s - %(message)s",
)
logger = logging.getLogger(__name__)


@asynccontextmanager
async def lifespan(app: FastAPI) -> AsyncGenerator[None, None]:
    """Application lifespan handler for startup/shutdown events."""
    logger.info("Starting Hello World Backend API")
    yield
    logger.info("Shutting down Hello World Backend API")


app = FastAPI(
    title="Hello World Landing API",
    description="Simple backend API for the Hello World landing page",
    version="0.1.0",
    docs_url="/docs",
    redoc_url="/redoc",
    lifespan=lifespan,
)

# Configure CORS for frontend integration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Configure specific origins in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/", tags=["root"])
async def root() -> JSONResponse:
    """Root endpoint returning Hello World message."""
    logger.info("Root endpoint called")
    return JSONResponse(
        content={"message": "Hello World", "status": "ok"},
        status_code=200,
    )


@app.get("/health", tags=["health"])
async def health_check() -> JSONResponse:
    """Health check endpoint for monitoring."""
    logger.info("Health check endpoint called")
    return JSONResponse(
        content={"status": "healthy"},
        status_code=200,
    )


if __name__ == "__main__":
    import uvicorn

    uvicorn.run(
        "backend.main:app",
        host="0.0.0.0",
        port=8000,
        reload=True,
    )
