FROM nginx:alpine
COPY . /usr/share/nginx/html

# Add health check for script.js and HTML content
HEALTHCHECK --interval=30s --timeout=5s --retries=1 \
  CMD sh -c 'curl -sf http://localhost/script.js
