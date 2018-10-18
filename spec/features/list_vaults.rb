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

    scenario 'vaults list correctly' do
        expect(page).to have_content(@vault1.name)
        expect(page).to have_content(@vault1.description)
        expect(page).to have_content(@vault2.name)
        expect(page).to have_content(@vault2.description)
        expect(page).not_to have_content(@vault3.description)
        expect(page).to have_content("Logout")
    end
    


end