# Food Insecurity Toolkit

A comprehensive suite of full-stack tools to analyze and address food insecurity in the U.S., combining geospatial analysis, policy simulation, and optimization algorithms.

## Motivation

This project stems from my award-winning research on food insecurity, where my team won 1st place nationally in the American Statistical Association's Fall Data Challenge. Through analyzing USDA datasets and comparing food access patterns across states, we discovered critical gaps in food accessibility - particularly the stark difference between access to parks versus grocery stores.

Our research revealed that nationwide, significantly fewer people live within walking distance of grocery stores compared to parks, highlighting transportation as a key barrier to food security. This finding, combined with my community work with homeless populations, drives my commitment to building data-driven solutions for food access challenges.

## Plan for Project Components

### 1. Food Access Navigator
**Stack:** React + Flask + Leaflet.js + Python  
A mapping tool that shows users nearby SNAP retailers and food pantries using real walk/bike/transit times, with food insecurity risk scoring based on location and mobility data.

### 2. Policy Simulator  
**Stack:** Streamlit + Python  
Dashboard simulating the impact of SNAP policy changes on projected food access in different communities.

### 3. Public Park Pantry Planner
**Stack:** Python + Geospatial Libraries  
Optimization tool using clustering algorithms and census data to recommend optimal food pantry locations in underserved areas.

## Current Status

**In Progress:** Food Access Navigator development  
**Upcoming:** Policy Simulator, Pantry Planner

## Development Timeline
- **6/23/25**: Initial setup complete - Flask backend + React frontend
- **7/9/25**: Added Leaflet.js mapping with location search using Nomanatim geocoding API
- **7/10/25**: Added SNAP retailer markers to Leaflet map, pulled data from Flask backend, rendered locations as red markers
- **7/14/25**: Downloaded and cleaned real-world SNAP retailer dataset from https://www.fns.usda.gov/snap/retailer/historical-data (reduced dataset from 968,562 entries to 254,817 entries)
- **7/15/25**: Installed+used pandas to load and parse snap_cleaned.csv, created /api/snap route in Flask that loads dataset once on server start and sends only necessary fields, returns JSON to frontend
- **Upcoming**: Integrate real data into frontend, add filtering by location proximity and SNAP eligibility

## Current Features

### Food Access Navigator
- **Interactive mapping** with Leaflet.js and OpenStreetMap
- **Location search** using Nominatim geocoding API
- **Responsive design** with real-time map updates
- **Dynamic SNAP retailer markers** pulled from Flask backend API (/api/snap)
- **Custom red icons** for SNAP markers to distinguish from user-selected location
- **Popup displays** for SNAP sites with name and address
- **Tech stack**: React + TypeScript + Leaflet.js + Flask

*Next: Add real SNAP and food pantry data, ZIP-level risk scoring, filtering by distance or type*

## Technical Approach

Building on insights from my national data challenge project, this toolkit addresses food insecurity through:
- **Real-time accessibility analysis** using actual transportation data
- **Predictive modeling** for food insecurity risk assessment  
- **Geospatial optimization** for strategic resource placement
- **Policy impact simulation** for evidence-based decision making
