# NVX JS GIS

<h3 align="center">🗺️ A JavaScript-Powered Geographic Information System (GIS) 🗺️</h3>

<p align="center">
  A full-stack application for spatial data management and visualization, featuring a Node.js backend and a flexible architecture ready for any frontend client.
</p>

<p align="center">
  <!-- Badges/Shields -->
  <img src="https://img.shields.io/badge/license-MIT-green.svg" alt="License">
  <img src="https://img.shields.io/badge/Node.js-18.x-green?logo=node.js" alt="Node.js">
  <img src="https://img.shields.io/badge/Express-4.x-black?logo=express" alt="Express.js">
  <img src="https://img.shields.io/badge/PostGIS-15-blue?logo=postgresql" alt="PostGIS">
  <img src="https://img.shields.io/badge/Postman-API-orange?logo=postman" alt="Postman">
</p>

---

## About The Project

`nvx-js-gis-svc` is a comprehensive GIS (Geographic Information System) project built with JavaScript. It provides a
RESTful API for performing spatial data operations, making it a powerful backend for any mapping or location-based
application. The project is structured to separate backend and frontend concerns, allowing for flexible development and
deployment.

A complete Postman collection is available for easy API exploration and testing.

## ✨ Key Features

- ✅ **RESTful API:** A well-defined API for creating, reading, updating, and deleting spatial data.
- ✅ **Spatial Queries:** Built to support complex geographic queries (e.g., proximity, intersections).
- ✅ **Modular Structure:** A clean separation between backend and frontend codebases.
- ✅ **Comprehensive Documentation:** Full API documentation available via Postman.
- ✅ **Scalable Foundation:** A solid starting point for building sophisticated GIS applications.

## 🛠️ Tech Stack

- **Backend:** [Node.js](https://nodejs.org/en/), [Express.js](https://expressjs.com/)
- **Database:** [PostgreSQL](https://www.postgresql.org/) with [PostGIS](https://postgis.net/) for spatial data support
- **ORM/Query Builder:** (Specify your tool, e.g., Sequelize, Knex.js, or pg)
- **GIS Libraries:** (Specify any, e.g., Turf.js, GeoJSON)

## 🚀 Getting Started

Follow these steps to set up the backend service on your local machine.

### 1. Prerequisites

- [Node.js](https://nodejs.org/en/) (v18.x or later)
- [pnpm](https://pnpm.io/installation) (or `npm`/`yarn`)
- A running [PostgreSQL](https://www.postgresql.org/) server with the [PostGIS](https://postgis.net/install/) extension
  enabled.

### 2. Installation & Setup

1. **Clone the repository:**
    ```
    git clone [this project]
    cd project
    ```

2. **Install backend dependencies:**
   ```bash
   cd app
   pnpm install
   ```

3. **Set up Environment Variables:**

- Navigate to the `app` directory.
- Create a `.env` file and add your database connection details.
  ```env
  # app/.env
  DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE"
  PORT="8080"
  ```

### 3. Running the Backend

Start the backend server from within the `app` directory:

```bash
pnpm start
```

The API will be available at `http://localhost:8080`.

## 📂 Project Structure

```
nvx-js-gis/
├── app/        # Backend source code (Node.js, Express)
│   ├── src/
│   └── ...
├── front-end/       # Frontend source code (e.g., React, Vue) - Optional
└── README.md
```

## 📖 API Documentation

The API is fully documented with examples in Postman. This is the best way to understand and test the available
endpoints.

- [**View API Documentation on Postman**](https://documenter.getpostman.com/view/16127230/2s8ZDSajok)

[![Run in Postman](https://run.pstmn.io/button.svg)](https://god.postman.co/run-collection/16127230-dd7e5f14-e5e3-41ea-a2a1-12c823053f19?action=collection%2Ffork&source=rip_markdown)

## 🤝 Contributing

Contributions are welcome! If you have ideas for new features or find a bug, please feel free to:

1. **Fork** the repository.
2. Create your **Feature Branch** (`git checkout -b feature/AmazingGisFeature`).
3. **Commit** your changes (`git commit -m 'feat: Add some AmazingGisFeature'`).
4. **Push** to the Branch (`git push origin feature/AmazingGisFeature`).
5. Open a **Pull Request**.

## 📄 License

This project is licensed under the [MIT License](https://opensource.org/license/mit). See the `LICENSE` file for
details.

## 📬 Contact

**Satria Nur Saputro**

- Email: [satrianursaputro06@gmail.com](mailto:satrianursaputro06@gmail.com)
