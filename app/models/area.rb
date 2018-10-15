class Area < ApplicationRecord
  belongs_to :vault
  has_many :walls, dependent: :destroy
end
