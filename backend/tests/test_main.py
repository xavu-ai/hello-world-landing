"""Tests for the Hello World Backend API."""

from collections.abc import AsyncGenerator

import pytest
from httpx import ASGITransport, AsyncClient


@pytest.fixture
async def client() -> AsyncGenerator[AsyncClient, None]:
    """Create an async test client for the FastAPI app."""
    from backend.main import app

    async with AsyncClient(
        transport=ASGITransport(app=app),
        base_url="http://test",
    ) as client:
        yield client


@pytest.mark.asyncio
async def test_root_endpoint_returns_200(client: AsyncClient) -> None:
    """Test that the root endpoint returns HTTP 200."""
    response = await client.get("/")
    assert response.status_code == 200


@pytest.mark.asyncio
async def test_root_endpoint_returns_correct_json(client: AsyncClient) -> None:
    """Test that the root endpoint returns the correct JSON payload."""
    response = await client.get("/")
    assert response.status_code == 200
    assert response.json() == {"message": "Hello World", "status": "ok"}


@pytest.mark.asyncio
async def test_health_endpoint_returns_200(client: AsyncClient) -> None:
    """Test that the health endpoint returns HTTP 200."""
    response = await client.get("/health")
    assert response.status_code == 200


@pytest.mark.asyncio
async def test_health_endpoint_returns_correct_json(client: AsyncClient) -> None:
    """Test that the health endpoint returns the correct JSON payload."""
    response = await client.get("/health")
    assert response.status_code == 200
    assert response.json() == {"status": "healthy"}
