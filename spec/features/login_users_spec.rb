require 'rails_helper'

feature "Users login", js: true do
        before do
                # Must first create a user
                visit "http://localhost:3000"
                click_link "Register"
                fill_in "Email", with: "user@example.com"
                fill_in "Password", with: "password"
                fill_in "Password Confirmation", with: "password"
                click_button "Submit"
                
                expect(page).to have_current_path("/")
                # This next expectation may need to become more specific since
                # it is just searching the entire DOM for the text "Logout"
                page.find(:xpath, "//a[text()='Logout']").click
                expect(page).to have_content("Logged out successfully!")
        end

        scenario "with valid credentials" do  
                click_link "Login"
                fill_in "Email", with: "user@example.com"
                fill_in "Password", with: "password"
                click_button "Submit"

                expect(page).to have_current_path("/")
                expect(page).not_to have_content("Login")
                expect(page).not_to have_content("Register")
                expect(page).to have_content("Logout")
        end

        scenario "with invalid credentials" do  
                click_link "Login"
                fill_in "Email", with: "user@example.com"
                fill_in "Password", with: "wrongPassword"
                click_button "Submit"

                expect(page).to have_content("Invalid login credentials. Please try again.")
                expect(page).to have_content("Login")
                expect(page).not_to have_content("Logout")
                expect(page).to have_current_path("/login")
        end
end