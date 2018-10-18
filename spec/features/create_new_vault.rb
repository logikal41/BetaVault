require 'rails_helper'

feature "Create new vault", js: true do

        before do
            @user = User.create(name: "user", email: "user@test.com", password: "password")
            
            visit "http://localhost:3000"
            fill_in "email", with: @user.email
            fill_in "password", with: @user.password
            click_button "Login"
            
            expect(page).to have_current_path("/")
        end

        scenario "with valid information" do  
            click_button "New Vault"
            fill_in "name", with: "test vault 123"
            fill_in "description", with: "description of 123 vault"
            click_button "CREATE VAULT"

            expect(page).to have_current_path("/")
            expect(page).to have_content("test vault 123")
            expect(page).to have_content("description of 123 vault")
            expect(page).to have_content("Logout")
        end

        scenario "with invalid invalid" do  
            click_button "New Vault"
            fill_in "name", with: ""
            fill_in "description", with: ""
            click_button "CREATE VAULT"

            expect(page).to have_content("Enter a vault name")
            expect(page).to have_content("Enter a vault description")
            expect(page).to have_content("Logout")
            expect(page).to have_current_path("/vault/new")
        end

        scenario "cancel creation" do  
            click_button "New Vault"
            fill_in "name", with: "test vault 123"
            fill_in "description", with: "description of 123 vault"
            click_button "CANCEL"

            expect(page).not_to have_content("test vault 123")
            expect(page).not_to have_content("description of 123 vault")
            expect(page).to have_content("Logout")
            expect(page).to have_current_path("/")
    end
end