class Privilege < ApplicationRecord
  validates :user_id, presence: true
  validates :vault_id, presence: true

  # only one user id per vault id
  # handle this in controller as well as model? 
end
