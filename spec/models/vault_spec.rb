require 'rails_helper'

RSpec.describe Vault, type: :model do
  before do
    @vault = Vault.create(name: 'The Swell', description: 'Description of the Swell')
  end

  describe 'attributes' do
    # Vanilla method of testing attribute
    it 'has a name' do
      name = 'The Swell'
      expect(@vault.name).to eq(name)
    end

    it 'has a description' do
      description = 'Description of the Swell'
      expect(@vault.description).to eq(description)
    end

    # Using shoulda matchers to test attribute
    it { should respond_to :description }
    it { should respond_to :name }
    
  end
end
 