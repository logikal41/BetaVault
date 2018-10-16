class Area < ApplicationRecord
  validates :name, uniqueness: true, presence: true
  
  belongs_to :vault
  has_many :walls, dependent: :destroy
end
