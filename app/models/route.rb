class Route < ApplicationRecord
  validates :name, uniqueness: true, presence: true
  
  belongs_to :wall
end
