class Area < ApplicationRecord
  belongs_to :vault
  has_many :walls
end
