class Wall < ApplicationRecord
  validates :name, uniqueness: true, presence: true
  validates :user_id, presence: true
  
  belongs_to :area
  has_many :routes, dependent: :destroy
end
