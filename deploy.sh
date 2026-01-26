#!/bin/bash

# Configuration
PROJECT_ID="signvrse"
REGION="europe-west1"
SERVICE_NAME="signvrse-website"
IMAGE_NAME="gcr.io/${PROJECT_ID}/${SERVICE_NAME}"
SERVICE_ACCOUNT="terp-animations@signvrse.iam.gserviceaccount.com"

echo "Deploying SignVRse Website to Cloud Run..."
echo ""

# Set the project
echo "Setting GCP project to ${PROJECT_ID}..."
gcloud config set project ${PROJECT_ID}

# Enable required APIs (if not already enabled)
echo "Enabling required APIs..."
gcloud services enable cloudbuild.googleapis.com run.googleapis.com containerregistry.googleapis.com

# Build Docker image using Cloud Build (no local Docker needed)
echo "Building Docker image with Cloud Build..."
gcloud builds submit --tag ${IMAGE_NAME}

if [ $? -ne 0 ]; then
  echo "Cloud Build failed!"
  exit 1
fi

# Deploy to Cloud Run
echo "Deploying to Cloud Run..."
gcloud run deploy ${SERVICE_NAME} \
  --image ${IMAGE_NAME} \
  --platform managed \
  --region ${REGION} \
  --allow-unauthenticated \
  --service-account ${SERVICE_ACCOUNT} \
  --memory 1Gi \
  --cpu 1 \
  --timeout 300 \
  --max-instances 10 \
  --min-instances 0 \
  --port 8080 \
  --cpu-boost \
  --no-cpu-throttling

if [ $? -ne 0 ]; then
  echo "Cloud Run deployment failed!"
  exit 1
fi

echo ""
echo "Deployment complete!"
echo ""
echo "Your website is now live at:"
gcloud run services describe ${SERVICE_NAME} --platform managed --region ${REGION} --format 'value(status.url)'
echo ""
