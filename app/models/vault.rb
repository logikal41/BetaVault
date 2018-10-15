class Vault < ApplicationRecord
    validates :name, uniqueness: true, presence: true
    has_many :areas, dependent: :destroy
end
