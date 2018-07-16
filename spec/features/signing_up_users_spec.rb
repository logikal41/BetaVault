require "rails_helper"

RSpec.feature "Signup users", js: true do
    scenario "with valid credentials" do
        visit "http://localhost:3000"
        page.find(:xpath, "//a[@href='/register']").click
        fill_in "Email", with: "user@example.com"
        fill_in "Password", with: "password"
        fill_in "Password confirmation", with: "password"
        click_button "Submit"

        expect(page).to have_content("You have signed up successfully.")
    end

    scenario "with invalid credentials" do
        visit "http://localhost:3000"
        click_link "Register"
        fill_in "Email", with: ""
        fill_in "Password", with: ""
        fill_in "Password confirmation", with: ""
        click_button "Submit"

        expect(page).to have_content("You have not signed up successfully.")
    end
end