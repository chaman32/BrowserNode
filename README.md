graph TD
    Client([User Browser / API Client])

    subgraph "Server (Go)"
        Router["HTTP Router (routes.go)"]

        subgraph "Middleware Layer"
            Auth["Auth Check (Cookie/Token)"]
        end

        subgraph "Handler Layer"
            Web["Web Handlers (HTML)"]
            API["API Handlers (JSON)"]
        end

        subgraph "Service Layer"
            Logic["Invoice Service (invoice.go)"]
            PDF["PDF Engine (maroto)"]
        end

        DB[("SQLite Database")]
        Storage[("Disk Storage (data/)")]
    end

    Client -->|HTTP Request| Router
    Router --> Auth
    Auth -->|Valid| Web
    Auth -->|Valid| API

    Web & API --> Logic
    Logic -->|Read/Write| DB
    Logic -->|Generate| PDF
    PDF -->|Save File| Storage

    Web -->|HTML Response| Client
    API -->|JSON Response| Client
