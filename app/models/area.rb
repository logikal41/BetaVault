class Area < ApplicationRecord
  validates :name, uniqueness: true, presence: true
  validates :user_id, presence: true
  
  belongs_to :vault
  has_many :walls, dependent: :destroy
end
