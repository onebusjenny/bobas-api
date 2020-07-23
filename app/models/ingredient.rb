class Ingredient < ApplicationRecord
    has_many :boba_ingredients
    belongs_to :boba
    validates :name, presence: true
end
