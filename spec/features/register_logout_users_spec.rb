require 'rails_helper'

feature "Register and Logout users", js: true do

    scenario "with valid credentials" do
        visit "http://localhost:3000"
        click_link "Register"
        fill_in "Email", with: "user@example.com"
        fill_in "Password", with: "password"
        fill_in "Password Confirmation", with: "password"
        click_button "Submit"
        
        expect(page).to have_current_path("/")
        expect(page).not_to have_content('Login')
        # This next expectation may need to become more specific since
        # it is just searching the entire DOM for the text "Logout"
        page.find(:xpath, "//a[text()='Logout']").click
        expect(page).to have_content("Logged out successfully!")
    
    end

    scenario "with invalid credentials" do
        visit "http://localhost:3000"
        click_on "Register"
        fill_in "Email", with: ""
        fill_in "Password", with: ""
        fill_in "Password Confirmation", with: ""
        click_button "Submit"

        expect(page).to have_current_path("/register")
        expect(page).to have_content('Login')
    end
end