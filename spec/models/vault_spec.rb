require 'rails_helper'

RSpec.describe Vault, type: :model do

  describe 'attributes' do
    # Vanilla method of testing attribute
    it 'has a name' do
      name = 'The Swell'
      vault = Vault.create(name: name)
      expect(vault.name).to eq(name)
    end

    # Using shoulda matchers to test attribute
    it { should respond_to :description }
    
  end
end
 