require 'rails_helper'

feature "Register and Logout users", js: true do

    scenario "with valid credentials" do
        visit "http://localhost:3000"
        click_button "Register"
        fill_in "email", with: "user@example.com"
        fill_in "password", id: 'password', with: "password"
        fill_in "passwordConfirmation", id: 'passwordConfirmation', with: "password"
        click_button "Register"
        
        expect(page).to have_current_path("/")
        expect(page).not_to have_content('Login')
        # This next expectation may need to become more specific since
        # it is just searching the entire DOM for the text "Logout"
        page.find(:xpath, "//a[text()='Logout']").click
        expect(page).to have_content("Logged out successfully!")
    
    end

    scenario "with invalid credentials" do
        visit "http://localhost:3000"
        click_button "Register"
        fill_in "email", with: ""
        fill_in "password", id: 'password', with: ""
        fill_in "passwordConfirmation", id: 'passwordConfirmation', with: ""
        click_button "Register"

        expect(page).to have_current_path("/register")
        expect(page).to have_content('Register')
    end
end