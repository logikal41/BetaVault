require 'rails_helper'

describe 'Vaults', js: true, type: :request do

    before do
        @vault = Vault.create(name: "Test Vault", description: "this is a description of the test vault")
    end

    describe 'GET /api/vaults/:id' do
        context 'with existing vault' do
            before { get "/api/vaults/#{@vault.id}"}

            it "handles existing vault" do
                expect(response.status).to eq 200
            end
        end

        context "with non-existing vault" do
            before { get "/api/vaults/xxxx"}

            it "handles non-existing article" do
                expect(response.status).to eq 302
                flash_message = "The vault can not be found!"
                expect(page).to have_content(flash_message)
            end
        end
    end
end