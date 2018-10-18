require 'rails_helper'

feature "Users login", js: true do
        
        before do
                @user = User.create(name: "user", email: "user@test.com", password: "password")
        end

        scenario "with valid credentials" do  
                visit "http://localhost:3000"

                fill_in "email", with: @user.email
                fill_in "password", with: @user.password
                click_button "Login"

                expect(page).to have_current_path("/")
                expect(page).not_to have_content("Login")
                expect(page).not_to have_content("Register")
                expect(page).to have_content("Logout")
        end

        scenario "with invalid credentials" do
                visit "http://localhost:3000"

                fill_in "email", with: "user@example.com"
                fill_in "password", with: "wrongPassword"
                click_button "Login"

                expect(page).to have_content("Invalid login credentials. Please try again.")
                expect(page).to have_content("Login")
                expect(page).not_to have_content("Logout")
                expect(page).to have_current_path("/")
        end
end