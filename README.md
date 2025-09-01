Insect-Borne Disease API

This API provides information about insect-borne diseases, including their vectors, pathogens, regions, symptoms, treatments, and prevention. Admin routes allow adding, editing, and deleting diseases, while public routes provide read-only access.

Features

View all diseases and details by vector

Upload and store disease images with Cloudinary

Admin-only endpoints for managing diseases

Error handling and clean JSON responses

Endpoints
Public

GET /api/diseases – Get all diseases

GET /api/diseases/:id – Get a single disease by ID

GET /api/vectors/:vector – Get diseases transmitted by a vector

Admin

POST /api/diseases – Add a new disease

PUT /api/diseases/:id – Update a disease

DELETE /api/diseases/:id – Delete a disease

Tech Stack

Node.js + Express for the server

MongoDB + Mongoose for the database

Cloudinary for image storage
