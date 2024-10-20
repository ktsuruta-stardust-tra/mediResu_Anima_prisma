-- CreateTable
CREATE TABLE "categories" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,

    CONSTRAINT "categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "educations" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "education_start_year" INTEGER NOT NULL,
    "education_start_month" INTEGER NOT NULL,
    "education_end_year" INTEGER,
    "education_end_month" INTEGER,
    "school_name" VARCHAR(100) NOT NULL,
    "order_num" INTEGER NOT NULL,
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "educations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "employments" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "job_start_year" INTEGER NOT NULL,
    "job_start_month" INTEGER NOT NULL,
    "job_end_year" INTEGER,
    "job_end_month" INTEGER,
    "company_name" VARCHAR(100) NOT NULL,
    "order_num" INTEGER NOT NULL,
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "employments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "job_histories" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "company_name" VARCHAR(255),
    "job_start_year" INTEGER,
    "job_start_month" INTEGER,
    "job_end_year" INTEGER,
    "job_end_month" INTEGER,
    "employment_type" VARCHAR(255),
    "job_details" TEXT,
    "order_num" INTEGER,
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "job_histories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "job_summaries" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "summary" TEXT NOT NULL,
    "order_num" INTEGER NOT NULL,
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "job_summaries_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "licenses" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "license_year" INTEGER NOT NULL,
    "license_month" INTEGER NOT NULL,
    "license_name" VARCHAR(100) NOT NULL,
    "order_num" INTEGER NOT NULL,
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "licenses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "operations" (
    "id" SERIAL NOT NULL,
    "category_id" INTEGER,
    "name" VARCHAR(255) NOT NULL,

    CONSTRAINT "operation_items_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "self_prs" (
    "user_id" INTEGER NOT NULL,
    "self_pr_text" TEXT,
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "id" SERIAL NOT NULL,

    CONSTRAINT "self_prs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "skills_experiences" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "skills" TEXT,
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "skills_experiences_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "supplementary_texts" (
    "id" SERIAL NOT NULL,
    "operation_id" INTEGER,
    "input_text" TEXT NOT NULL,
    "user_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "supplementary_texts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_basic_info" (
    "id" SERIAL NOT NULL,
    "lineid" VARCHAR(50) NOT NULL,
    "last_name" VARCHAR(50),
    "first_name" VARCHAR(50),
    "last_name_kana" VARCHAR(50),
    "first_name_kana" VARCHAR(50),
    "birth_year" INTEGER,
    "birth_month" INTEGER,
    "birth_day" INTEGER,
    "postal_code" VARCHAR(8),
    "prefecture" VARCHAR(50),
    "city" VARCHAR(100),
    "street_address" VARCHAR(100),
    "phone_number" VARCHAR(15),
    "email" VARCHAR(100),
    "additional_contact" VARCHAR(100),
    "id_photo" VARCHAR(255),

    CONSTRAINT "user_basic_info_pkey" PRIMARY KEY ("id","lineid")
);

-- CreateTable
CREATE TABLE "user_experiences" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "windows" BOOLEAN DEFAULT false,
    "mac" BOOLEAN DEFAULT false,
    "microsoft_word" BOOLEAN DEFAULT false,
    "microsoft_excel" BOOLEAN DEFAULT false,
    "microsoft_powerpoint" BOOLEAN DEFAULT false,
    "poster_design" BOOLEAN DEFAULT false,
    "sns_update" BOOLEAN DEFAULT false,
    "brochure_creation" BOOLEAN DEFAULT false,
    "other_checked" BOOLEAN DEFAULT false,
    "other_experience" TEXT,
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_experiences_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_informations" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "last_name" VARCHAR(50) NOT NULL,
    "first_name" VARCHAR(50) NOT NULL,
    "last_name_kana" VARCHAR(50) NOT NULL,
    "first_name_kana" VARCHAR(50) NOT NULL,
    "birth_year" INTEGER NOT NULL,
    "birth_month" SMALLINT NOT NULL,
    "birth_day" SMALLINT NOT NULL,
    "postal_code" VARCHAR(10) NOT NULL,
    "prefecture" VARCHAR(50) NOT NULL,
    "city" VARCHAR(100) NOT NULL,
    "address" VARCHAR(255) NOT NULL,
    "phone_number" VARCHAR(20) NOT NULL,
    "email_address" VARCHAR(100) NOT NULL,
    "alternate_email_address" VARCHAR(100),
    "alternate_contact" VARCHAR(100),
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_informations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_operations" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "operation_id" INTEGER,

    CONSTRAINT "user_selections_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "line_id" VARCHAR(255) NOT NULL,
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_photos" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "photo_url" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_photos_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "unique_user_order" ON "job_histories"("user_id", "order_num");

-- CreateIndex
CREATE UNIQUE INDEX "job_summaries_unique_user_order" ON "job_summaries"("user_id", "order_num");

-- CreateIndex
CREATE UNIQUE INDEX "licenses_unique_user_order" ON "licenses"("user_id", "order_num");

-- CreateIndex
CREATE UNIQUE INDEX "self_prs_unique_user_id" ON "self_prs"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "skills_experiences_user_order" ON "skills_experiences"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "unique_user_id" ON "user_experiences"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "user_informations_unique_user_order" ON "user_informations"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "users_line_id_key" ON "users"("line_id");

-- CreateIndex
CREATE UNIQUE INDEX "user_photos_user_id_key" ON "user_photos"("user_id");

-- AddForeignKey
ALTER TABLE "educations" ADD CONSTRAINT "educations_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "employments" ADD CONSTRAINT "employments_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "job_histories" ADD CONSTRAINT "job_histories_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "job_summaries" ADD CONSTRAINT "job_summaries_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "licenses" ADD CONSTRAINT "licenses_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "operations" ADD CONSTRAINT "operation_items_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "skills_experiences" ADD CONSTRAINT "skills_experiences_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "supplementary_texts" ADD CONSTRAINT "supplementary_texts_item_id_fkey" FOREIGN KEY ("operation_id") REFERENCES "operations"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "supplementary_texts" ADD CONSTRAINT "supplementary_texts_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "user_experiences" ADD CONSTRAINT "user_experiences_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "user_informations" ADD CONSTRAINT "user_informations_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "user_operations" ADD CONSTRAINT "user_selections_item_id_fkey" FOREIGN KEY ("operation_id") REFERENCES "operations"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "user_operations" ADD CONSTRAINT "user_selections_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "user_photos" ADD CONSTRAINT "user_photos_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
