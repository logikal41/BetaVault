require 'rails_helper'

feature "Delete existing vault", js: true do
        before do
            # Must first create a user
            visit "http://localhost:3000"
            click_button "Register"
            fill_in "email", with: "user@example.com"
            fill_in "password", id: 'password', with: "password"
            fill_in "passwordConfirmation", id: 'passwordConfirmation', with: "password"
            click_button "Register"

            expect(page).to have_current_path("/")
            
            click_button "New Vault"
            fill_in "name", with: "Test Vault"
            fill_in "description", with: "description of test vault"
            click_button "CREATE VAULT"

            expect(page).to have_current_path("/")
            expect(page).to have_content("Test Vault")
            expect(page).to have_content("description of test vault")
            expect(page).to have_content("Logout")  
        end

        scenario "successful deletion" do 
            page.find(:xpath, "//div[text()='Test Vault']").click
            expect(page).not_to have_current_path("/") 
            click_button "Delete"

            expect(page).to have_current_path("/")
            expect(page).not_to have_content("Test Vault")
            expect(page).not_to have_content("description of test vault")
            expect(page).to have_content("Logout")
        end

end