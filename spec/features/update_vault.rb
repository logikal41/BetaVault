require 'rails_helper'

feature "Update existing vault", js: true do
        before do
            @user = User.create(name: "user", email: "user@test.com", password: "password")
            @vault = Vault.create(name: "Test Vault", description: "description of the test vault")
            
            visit "http://localhost:3000"
            fill_in "email", with: @user.email
            fill_in "password", with: @user.password
            click_button "Login"
            
            expect(page).to have_current_path("/")
            expect(page).to have_content("Test Vault")
            expect(page).to have_content("description of the test vault")
            expect(page).to have_content("Logout")  
        end

        scenario "with valid information" do 
            page.find(:xpath, "//div[text()='Test Vault']").click
            expect(page).to have_current_path("/vault/1")
            # force capybara to wait for the ajax request to finish
            expect(page).to have_content("description of the test vault") 
            click_button "Update"

            expect(page).to have_current_path("/vault/update/1")
            fill_in "name", with: "test vault - update"
            fill_in "description", with: "update to description"
            click_button "UPDATE VAULT"

            expect(page).to have_current_path("/vault/1")
            expect(page).to have_content("test vault - update")
            expect(page).to have_content("update to description")
            expect(page).to have_content("Logout")
        end

        scenario "with invalid invalid" do  
            page.find(:xpath, "//div[text()='Test Vault']").click 
            expect(page).to have_current_path("/vault/1")
            # force capybara to wait for the ajax request to finish
            expect(page).to have_content("description of the test vault") 
            click_button "Update"

            expect(page).to have_current_path("/vault/update/1")
            fill_in "name", with: ""
            fill_in "description", with: ""
            click_button "UPDATE VAULT"

            expect(page).to have_content("Enter a vault name")
            expect(page).to have_content("Enter a vault description")
            expect(page).to have_content("Logout")
            expect(page).to have_current_path("/vault/update/1")
        end

        scenario "cancel creation" do  
            page.find(:xpath, "//div[text()='Test Vault']").click
            expect(page).to have_current_path("/vault/1")
            # force capybara to wait for the ajax request to finish
            expect(page).to have_content("description of the test vault")  
            click_button "Update"

            expect(page).to have_current_path("/vault/update/1")
            fill_in "name", with: "test vault - update"
            fill_in "description", with: "update to description"
            click_button "CANCEL"

            expect(page).to have_current_path("/vault/1")
            expect(page).not_to have_content("test vault - update")
            expect(page).not_to have_content("update to description")
            expect(page).to have_content("Logout")
    end
end