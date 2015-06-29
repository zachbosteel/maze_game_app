class CreateUsedGames < ActiveRecord::Migration
  def change
    create_table :used_games do |t|
      t.integer :user_id
      t.integer :usee_id
      t.integer :game_id
      t.integer :trophy_id

      t.timestamps null: false
    end
  end
end
