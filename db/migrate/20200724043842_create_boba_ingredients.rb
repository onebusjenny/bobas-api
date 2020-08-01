class CreateBobaIngredients < ActiveRecord::Migration[6.0]
  def change
    create_table :boba_ingredients do |t|

      t.integer  "boba_id"
      t.integer  "ingredient_id"
      t.timestamps
    end
  end
end
