class Route < ApplicationRecord
  validates :name, uniqueness: true, presence: true
  validates :user_id, presence: true
  
  belongs_to :wall
end
