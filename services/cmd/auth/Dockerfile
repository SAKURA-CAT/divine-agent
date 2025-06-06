FROM --platform=$BUILDPLATFORM golang:1.24-alpine AS base
ARG TARGETOS
ARG TARGETARCH

FROM base AS builder
WORKDIR /app
# 1. Copy the source code
COPY ./cmd/auth/auth.go ./cmd/auth/auth.go
COPY ./internal/app/auth ./internal/app/auth
COPY ./internal/pkg ./internal/pkg
COPY ./pb ./pb

FROM base AS installer
WORKDIR /app
# 2. install dependencies
COPY go.mod go.sum ./
RUN go mod download
# 3. build the application
COPY --from=builder /app/ ./
RUN CGO_ENABLED=0 GOOS=${TARGETOS} GOARCH=${TARGETARCH} go build -o ./bin/auth ./cmd/auth/auth.go

FROM alpine:latest AS runner
WORKDIR /app

RUN apk -U upgrade \
    && apk add --no-cache dumb-init ca-certificates

COPY --from=installer /app/bin/auth ./bin/auth
# Don't run production as root
RUN addgroup --system --gid 1001 divi
RUN adduser --system --uid 1001 divi
USER divi
EXPOSE 3000
ENTRYPOINT ["/usr/bin/dumb-init", "--"]
CMD ["./bin/auth"]
