class Ingredient < ApplicationRecord
    has_many :boba_ingredients
    # validates :name, presence: true
end
