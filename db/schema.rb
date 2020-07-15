# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_07_08_055216) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "areas", force: :cascade do |t|
    t.string "name"
    t.text "description"
    t.bigint "vault_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "user_id", null: false
    t.index ["user_id"], name: "index_areas_on_user_id"
    t.index ["vault_id"], name: "index_areas_on_vault_id"
  end

  create_table "privileges", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "vault_id", null: false
    t.integer "permission"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_privileges_on_user_id"
    t.index ["vault_id"], name: "index_privileges_on_vault_id"
  end

  create_table "routes", force: :cascade do |t|
    t.string "name"
    t.string "difficulty"
    t.integer "pitch"
    t.string "length"
    t.float "rating"
    t.string "first_ascent"
    t.text "description"
    t.string "gear"
    t.string "descent"
    t.bigint "wall_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "user_id", null: false
    t.index ["user_id"], name: "index_routes_on_user_id"
    t.index ["wall_id"], name: "index_routes_on_wall_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "provider", default: "email", null: false
    t.string "uid", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.boolean "allow_password_change", default: false
    t.datetime "remember_created_at"
    t.integer "sign_in_count", default: 0, null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string "current_sign_in_ip"
    t.string "last_sign_in_ip"
    t.string "confirmation_token"
    t.datetime "confirmed_at"
    t.datetime "confirmation_sent_at"
    t.string "unconfirmed_email"
    t.string "name"
    t.string "nickname"
    t.string "image"
    t.string "email"
    t.json "tokens"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "role"
    t.index ["confirmation_token"], name: "index_users_on_confirmation_token", unique: true
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
    t.index ["uid", "provider"], name: "index_users_on_uid_and_provider", unique: true
  end

  create_table "vaults", force: :cascade do |t|
    t.string "name"
    t.text "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "user_id", null: false
    t.index ["user_id"], name: "index_vaults_on_user_id"
  end

  create_table "walls", force: :cascade do |t|
    t.string "name"
    t.text "description"
    t.bigint "area_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "user_id", null: false
    t.index ["area_id"], name: "index_walls_on_area_id"
    t.index ["user_id"], name: "index_walls_on_user_id"
  end

  add_foreign_key "areas", "users"
  add_foreign_key "areas", "vaults"
  add_foreign_key "privileges", "users"
  add_foreign_key "privileges", "vaults"
  add_foreign_key "routes", "users"
  add_foreign_key "routes", "walls"
  add_foreign_key "vaults", "users"
  add_foreign_key "walls", "areas"
  add_foreign_key "walls", "users"
end
