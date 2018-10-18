require 'rails_helper'

feature 'show vault details', js: true do

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

    scenario "successfully shows vault details" do 
        page.find(:xpath, "//div[text()='Test Vault']").click
        expect(page).to have_current_path("/vault/1")
        # this expectation forces rspec to wait for the ajax request to finish 
        # before clicking the delete button
        expect(page).to have_content("Test Vault")
        expect(page).to have_content("description of the test vault")
        expect(page).to have_content("Logout")
    end


end