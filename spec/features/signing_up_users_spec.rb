require 'rails_helper'

feature "Signup users", js: true do

    scenario "with valid credentials" do
        visit "http://localhost:3000"
        click_link "Register"
        fill_in "Email", with: "user@example.com"
        fill_in "Password", with: "password"
        fill_in "Password Confirmation", with: "password"
        click_button "Submit"

        page.find(:xpath, "//a[text()='Logout']").click

        click_link "Login"
        fill_in "Email", with: "user@example.com"
        fill_in "Password", with: "password"
        click_button "Submit"

        expect(page).to have_content("Welcome to BetaVault!")
    end

    # scenario "with invalid credentials" do
    #     visit "http://localhost:3000"
    #     click_on "Register"
    #     fill_in "Email", with: ""
    #     fill_in "Password", with: ""
    #     fill_in "Password Confirmation", with: ""
    #     click_button "Submit"

    #     expect(page).to have_content("You have not signed up successfully.")
    # end
end