-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "profile" INTEGER NOT NULL,
    "password" TEXT,
    "first_name" TEXT,
    "last_name" TEXT,
    "email" TEXT NOT NULL,
    "cpf" INTEGER,
    "idGoogle" TEXT,
    "picture" TEXT,
    "zipcode" TEXT,
    "address" TEXT,
    "number" TEXT,
    "city" TEXT,
    "reference" TEXT,
    "state" TEXT,
    "status" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "stores" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "picture" TEXT,
    "zipcode" TEXT,
    "address" TEXT,
    "number" TEXT,
    "city" TEXT,
    "reference" TEXT,
    "state" TEXT,
    "status" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "stores_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "products" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" DECIMAL(65,30) NOT NULL,
    "stock" INTEGER NOT NULL,
    "id_store" INTEGER NOT NULL,
    "picture0" TEXT NOT NULL,
    "picture1" TEXT,
    "picture2" TEXT,
    "picture3" TEXT,
    "picture4" TEXT,
    "picture5" TEXT,
    "picture6" TEXT,
    "picture7" TEXT,
    "picture8" TEXT,
    "status" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "categories" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users_stores" (
    "id" SERIAL NOT NULL,
    "id_user" INTEGER NOT NULL,
    "id_store" INTEGER NOT NULL,

    CONSTRAINT "users_stores_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "products_categories" (
    "id" SERIAL NOT NULL,
    "id_product" INTEGER NOT NULL,
    "id_category" INTEGER NOT NULL,

    CONSTRAINT "products_categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cart" (
    "id" SERIAL NOT NULL,
    "id_product" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id_user" INTEGER NOT NULL,

    CONSTRAINT "cart_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_cpf_key" ON "users"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "users_idGoogle_key" ON "users"("idGoogle");

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_id_store_fkey" FOREIGN KEY ("id_store") REFERENCES "stores"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users_stores" ADD CONSTRAINT "users_stores_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users_stores" ADD CONSTRAINT "users_stores_id_store_fkey" FOREIGN KEY ("id_store") REFERENCES "stores"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "products_categories" ADD CONSTRAINT "products_categories_id_product_fkey" FOREIGN KEY ("id_product") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "products_categories" ADD CONSTRAINT "products_categories_id_category_fkey" FOREIGN KEY ("id_category") REFERENCES "categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cart" ADD CONSTRAINT "cart_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cart" ADD CONSTRAINT "cart_id_product_fkey" FOREIGN KEY ("id_product") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
