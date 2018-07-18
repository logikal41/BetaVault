class Vault < ApplicationRecord
    validates :name, uniqueness: true, presence: true
end
