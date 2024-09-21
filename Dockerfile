FROM cr.yandex/crptam27d1eusqkm4sth/node:18.20-alpine

COPY ./.next/standalone/. /var/www/front/html/
