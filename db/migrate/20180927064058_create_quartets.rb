class CreateQuartets < ActiveRecord::Migration[5.2]
  def change
    create_table :quartets do |t|
      t.string :country
      t.string :uri
      t.string :image
      t.string :year
      t.string :title

      t.timestamps
    end
  end
end
