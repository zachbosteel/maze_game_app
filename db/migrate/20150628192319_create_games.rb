class CreateGames < ActiveRecord::Migration
  def change
    create_table :games do |t|
      t.string :maze_map
      t.integer :winner_id
      t.integer :loser_id
      t.string :trophy1
      t.string :trophy2
      t.string :trophy3

      t.timestamps null: false
    end
  end
end
