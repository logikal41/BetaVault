class Wall < ApplicationRecord
  belongs_to :area
  has_many :routes
end
