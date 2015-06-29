class CreateTrophies < ActiveRecord::Migration
  def change
    create_table :trophies do |t|
      t.string :name
      t.string :image
      t.string :badge_image

      t.timestamps null: false
    end
  end
end
