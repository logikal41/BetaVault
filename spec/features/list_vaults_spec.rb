require 'rails_helper'

feature "List vaults", js: true do

    before do

        @user = User.create(name: "user", email: "user@test.com", password: "password")
        @vault1 = Vault.create(name: 'vault one', description: 'description of the first vault')
        @vault2 = Vault.create(name: 'vault two', description: 'description of the second vault')

        # the database should reject this since it shares the same name as vault 2
        @vault3 = Vault.create(name: 'vault two', description: 'this vault should not exist')

        visit "http://localhost:3000"
        fill_in "email", with: @user.email
        fill_in "password", with: @user.password
        click_button "Login"
    end

    scenario 'all vaults are listed' do
        expect(page).to have_content(@vault1.name)
        expect(page).to have_content(@vault1.description)
        expect(page).to have_content(@vault2.name)
        expect(page).to have_content(@vault2.description)
        expect(page).not_to have_content(@vault3.description)
        expect(page).to have_content("Logout")
    end
    
    scenario 'there are no vaults' do
        #Remove all instance vaults
        Vault.delete_all

        expect(page).not_to have_content(@vault1.name)
        expect(page).not_to have_content(@vault1.description)
        expect(page).not_to have_content(@vault2.name)
        expect(page).not_to have_content(@vault2.description)
        expect(page).to have_content("Logout")

        # put some code here to test that "NO vaults created" shows up
        # when the list is empty

        # within ("h1#no-articles") do
        #     expect(page).to have_content("No Vaults Created")
        # end
    end

end