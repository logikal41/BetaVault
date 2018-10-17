require 'rails_helper'

RSpec.describe Wall, type: :model do

  before do
    @wall = Wall.create(area_id: 5, name: 'The Swell', description: 'Description of the Swell')
  end

  describe 'attributes' do
    # Vanilla method of testing attribute
    it 'has a name' do
      name = 'The Swell'
      expect(@wall.name).to eq(name)
    end

    it 'has a description' do
      description = 'Description of the Swell'
      expect(@wall.description).to eq(description)
    end

    it 'has an area_id' do
      expect(@wall.area_id).to eq(5)
    end

    # Using shoulda matchers to test attribute
    it { should respond_to :description }
    it { should respond_to :name }
    it { should respond_to :area_id }
    
  end
end
 