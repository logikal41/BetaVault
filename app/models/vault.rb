class Vault < ApplicationRecord
    validates :name, uniqueness: true, presence: true
    has_many :areas, dependent: :destroy

    # This will chagne the scope instead of calling .order in controller
    # default_scope { order(:id asc:)}
end
