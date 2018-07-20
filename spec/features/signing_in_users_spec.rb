require 'rails_helper'

feature "Users signin", js: true do
        before do
                visit "http://localhost:3000"
                click_link "Register"
                fill_in "Email", with: "user@example.com"
                fill_in "Password", with: "password"
                fill_in "Password Confirmation", with: "password"
                click_button "Submit"
                
                expect(page).to have_current_path("/")
                page.find(:xpath, "//a[text()='Logout']").click
                expect(page).to have_content("Logged out successfully!") 
        end

        scenario "with valid credentials" do  
                click_link "Login"
                fill_in "Email", with: "user@example.com"
                fill_in "Password", with: "password"
                click_button "Submit"

                expect(page).to have_current_path("/")
                expect(page).to have_content("Logout")
        end

        scenario "with invalid credentials" do  
                click_link "Login"
                fill_in "Email", with: "user@example.com"
                fill_in "Password", with: "wrongPassword"
                click_button "Submit"

                expect(page).to have_content("Invalid login credentials. Please try again.")
                expect(page).not_to have_content("Logout")
                expect(page).to have_current_path("/login")
        end
end