class CreateBobas < ActiveRecord::Migration[6.0]
  def change
    create_table :bobas do |t|

      t.string :name
      t.string :flavor
      t.timestamps
    end
  end
end
