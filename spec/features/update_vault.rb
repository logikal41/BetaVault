require 'rails_helper'

feature "Update existing vault", js: true do
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

        scenario "with valid information" do 
            page.find(:xpath, "//div[text()='Test Vault']").click
            expect(page).not_to have_current_path("/") 
            click_button "Update"
            fill_in "name", with: "test vault - update"
            fill_in "description", with: "update to description"
            click_button "UPDATE VAULT"

            expect(page).to have_current_path("/")
            expect(page).to have_content("test vault - update")
            expect(page).to have_content("update to description")
            expect(page).to have_content("Logout")
        end

        scenario "with invalid invalid" do  
            page.find(:xpath, "//div[text()='Test Vault']").click 
            expect(page).not_to have_current_path("/")
            click_button "Update"
            fill_in "name", with: ""
            fill_in "description", with: ""
            click_button "UPDATE VAULT"

            expect(page).to have_content("Enter a vault name")
            expect(page).to have_content("Enter a vault description")
            expect(page).to have_content("Logout")
            expect(page).not_to have_current_path("/")
        end

        scenario "cancel creation" do  
            page.find(:xpath, "//div[text()='Test Vault']").click
            expect(page).not_to have_current_path("/") 
            click_button "Update"
            fill_in "name", with: "test vault - update"
            fill_in "description", with: "update to description"
            click_button "CANCEL"

            expect(page).not_to have_content("test vault - update")
            expect(page).not_to have_content("update to description")
            expect(page).to have_content("Logout")
            expect(page).to have_current_path("/")
    end
end