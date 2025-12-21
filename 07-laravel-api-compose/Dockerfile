FROM php:8.3-fpm

RUN apt-get update && apt-get install -y \
    git curl zip unzip \
    libpng-dev libonig-dev libxml2-dev libzip-dev \
    && docker-php-ext-install pdo_mysql mbstring zip exif pcntl

COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

WORKDIR /var/www/html

COPY . .

COPY composer.json composer.lock ./

RUN composer install --no-dev --optimize-autoloader

RUN php artisan key:generate || true

CMD ["php-fpm"]
