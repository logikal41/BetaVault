require 'rails_helper'

feature "Update existing area", js: true do
        before do
            @user = User.create(name: "user", email: "user@test.com", password: "password")
            @vault = Vault.create(name: "Test Vault", description: "description of the test vault")
            @area = Area.create(vault_id: 1, name: "Test Area", description: "description of the test area")
            
            visit "http://localhost:3000"
            fill_in "email", with: @user.email
            fill_in "password", with: @user.password
            click_button "Login"
            
            expect(page).to have_current_path("/")
            expect(page).to have_content("Test Vault")
            expect(page).to have_content("description of the test vault")
            expect(page).to have_content("Logout")  

            page.find(:xpath, "//div[text()='Test Vault']").click
            expect(page).to have_current_path("/vault/1")
            # force capybara to wait for the ajax request to finish
            expect(page).to have_content("description of the test vault")

            page.find(:xpath, "//a[text()='Test Area']").click
            expect(page).to have_current_path("/area/1")
            # force capybara to wait for the ajax request to finish
            expect(page).to have_content("description of the test area")
        end

        scenario "with valid information" do 
            click_button "Update"

            expect(page).to have_current_path("/area/update/1")
            fill_in "name", with: "test area - update"
            fill_in "description", with: "update to description"
            click_button "UPDATE AREA"

            expect(page).to have_current_path("/area/1")
            expect(page).to have_content("test area - update")
            expect(page).to have_content("update to description")
            expect(page).to have_content("Logout")
        end

        scenario "with invalid information" do  
            click_button "Update"

            expect(page).to have_current_path("/area/update/1")
            fill_in "name", with: ""
            fill_in "description", with: ""
            click_button "UPDATE AREA"

            expect(page).to have_content("Enter an area name")
            expect(page).to have_content("Enter an area description")
            expect(page).to have_content("Logout")
            expect(page).to have_current_path("/area/update/1")
        end

        scenario "cancel creation" do  
            click_button "Update"

            expect(page).to have_current_path("/area/update/1")
            fill_in "name", with: "test area - update"
            fill_in "description", with: "update to description"
            click_button "CANCEL"

            expect(page).to have_current_path("/area/1")
            expect(page).not_to have_content("test area - update")
            expect(page).not_to have_content("update to description")
            expect(page).to have_content("Logout")
    end
end