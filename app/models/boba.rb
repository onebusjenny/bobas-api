class Boba < ApplicationRecord
    has_many :boba_ingredients
    has_many :ingredients, through: :boba_ingredients
    # validates :name, :flavor, presence: true

    # def has_ingredients?
    #     self.ingredients.any?
    # end
end
