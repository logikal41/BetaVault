require 'rails_helper'

feature "Create new area", js: true do
        before do
                # Must first create a user
                visit "http://localhost:3000"
                click_button "Register"
                fill_in "email", with: "user@example.com"
                fill_in "password", id: 'password', with: "password"
                fill_in "passwordConfirmation", id: 'passwordConfirmation', with: "password"
                click_button "Register"
                
                expect(page).to have_current_path("/")
                expect(page).to have_content("Logout")

                click_button "New Vault"
                fill_in "name", with: "test vault"
                fill_in "description", with: "description of test vault"
                click_button "CREATE VAULT"

                expect(page).to have_current_path("/")
                expect(page).to have_content("test vault")
                expect(page).to have_content("description of test vault")

                # page.find(:xpath, "//*[text()='test vault]").click
                visit "http://localhost:3000/vault/1"
                expect(page).to have_current_path("/vault/1")
                expect(page).to have_content("Add Area")
        end

        scenario "with valid information" do
                click_button "Add Area"  
                fill_in "name", with: "test area"
                fill_in "description", with: "description of test area"
                click_button "CREATE AREA"

                expect(page).to have_current_path("/vault/1")
                expect(page).to have_content("test area")
                expect(page).to have_content("Logout")
        end

        scenario "with invalid invalid" do  
                click_button "Add Area"
                fill_in "name", with: ""
                fill_in "description", with: ""
                click_button "CREATE AREA"

                expect(page).to have_content("Enter an area name")
                expect(page).to have_content("Enter an area description")
                expect(page).to have_content("Logout")
                expect(page).to have_current_path("/vault/1")
        end

        scenario "cancel creation" do  
            click_button "Add Area"
            fill_in "name", with: "test area"
            fill_in "description", with: "description of test area"
            click_button "CANCEL"

            expect(page).not_to have_content("test area")
            expect(page).to have_content("Logout")
            expect(page).to have_current_path("/vault/1")
    end
end