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

        scenario "successful deletion" do 
            click_button "Delete"

            expect(page).to have_current_path("/vault/1")

            expect(page).not_to have_content("Test Area")
            expect(page).to have_content("Logout")
        end

        scenario "failed deletion" do  
     
            # add in logic here for a failed deletion
            # look for the flash message
            # check the current path
            # make sure the area does not show up in the area list

        end

end