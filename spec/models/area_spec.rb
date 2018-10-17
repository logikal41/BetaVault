require 'rails_helper'

RSpec.describe Area, type: :model do

  before do
    @area = Area.create(vault_id: 1, name: 'The Swell', description: 'Description of the Swell')
  end

  describe 'attributes' do
    # Vanilla method of testing attribute
    it 'has a name' do
      name = 'The Swell'
      expect(@area.name).to eq(name)
    end

    it 'has a description' do
      description = 'Description of the Swell'
      expect(@area.description).to eq(description)
    end

    it 'has a vault_id' do
      expect(@area.vault_id).to eq(1)
    end

    # Using shoulda matchers to test attribute
    it { should respond_to :description }
    it { should respond_to :name }
    it { should respond_to :vault_id }
    
  end
end
 
