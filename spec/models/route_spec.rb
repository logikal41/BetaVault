require 'rails_helper'

RSpec.describe Route, type: :model do

  before do
    @route = Route.create(wall_id: 1, name: 'Route Name', difficulty: '5.10', pitch: 4, length: '400 feet', rating: 4, first_ascent: 'James Garrett, Franziska Garret, 1992', 
      description: 'description of the route', gear: 'Standard desert rack', descent: 'rappel');
  end

  describe 'attributes' do
    # Vanilla method of testing attribute
    it 'has a wall_id' do
      expect(@route.wall_id).to eq(1)
    end

    it 'has a name' do
      name = 'Route Name'
      expect(@route.name).to eq(name)
    end

    it 'has a difficulty' do
      expect(@route.difficulty).to eq('5.10')
    end

    it 'has a pitch count' do
      expect(@route.pitch).to eq(4)
    end

    it 'has a length' do
      length = '400 feet'
      expect(@route.length).to eq(length)
    end

    it 'has a rating' do
      expect(@route.rating).to eq(4)
    end

    it 'has a first_ascent' do
      first_ascent = 'James Garrett, Franziska Garret, 1992'
      expect(@route.first_ascent).to eq(first_ascent)
    end

    it 'has a description' do
      description= 'description of the route'
      expect(@route.description).to eq(description)
    end

    it 'has gear description' do
      gear = 'Standard desert rack'
      expect(@route.gear).to eq(gear)
    end

    it 'has descent information' do
      descent = 'rappel'
      expect(@route.descent).to eq(descent)
    end

    
    # Using shoulda matchers to test attribute
    it { should respond_to :wall_id }
    it { should respond_to :name }
    it { should respond_to :difficulty }
    it { should respond_to :pitch }
    it { should respond_to :length }
    it { should respond_to :rating }
    it { should respond_to :first_ascent }
    it { should respond_to :description}
    it { should respond_to :gear }
    it { should respond_to :descent }
    
  end
end
 
