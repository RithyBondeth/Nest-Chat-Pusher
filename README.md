<div align="center">

# Nest Chat Pusher

**A real-time chat backend built with NestJS and Pusher Channels.**

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white)
![Pusher](https://img.shields.io/badge/Pusher-300D4F?style=for-the-badge&logo=pusher&logoColor=white)

</div>

---

## Overview

Nest Chat Pusher is a small learning project that shows how to add real-time messaging to a NestJS API using [Pusher Channels](https://pusher.com/channels) instead of managing WebSocket servers yourself. Each message posted to the API is broadcast to every subscribed client.

## Features

- **Messages endpoint** (`POST /messages`) that publishes chat messages.
- **Pusher service** wrapping the Pusher server SDK, which triggers `message` events on the `chat` channel.
- **Front-end friendly:** any Pusher client (web or mobile) can subscribe to `chat` and receive messages instantly.

## Tech Stack

| Area | Technology |
| --- | --- |
| Framework | NestJS |
| Language | TypeScript |
| Real-time | Pusher Channels |

## Getting Started

### Prerequisites

- Node.js and npm
- A [Pusher Channels](https://pusher.com/channels) app

### Installation

```bash
git clone https://github.com/RithyBondeth/Nest-Chat-Pusher.git
cd Nest-Chat-Pusher
npm install
npm run start:dev
```

Configure your own Pusher app ID, key, secret, and cluster in `src/pusher/pusher.service.ts`. Load them from environment variables before deploying.

Send a message:

```bash
curl -X POST http://localhost:3000/messages \
  -H "Content-Type: application/json" \
  -d '{"username": "Bondeth", "message": "Hello!"}'
```

## Project Structure

```text
Nest-Chat-Pusher/
└── src/
    ├── pusher/pusher.service.ts   # Pusher SDK wrapper
    ├── app.controller.ts          # POST /messages
    ├── app.module.ts
    └── main.ts
```

## Author

**Rithy Bondeth** — Full Stack Developer & AI Engineer

[![Portfolio](https://img.shields.io/badge/Portfolio-0A0A0A?style=for-the-badge&logo=vercel&logoColor=white)](https://bondeth.dev)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/RithyBondeth)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/rithy-bondeth-484073282/)

## License

Distributed under the MIT License. See [`LICENSE`](LICENSE) for details.
