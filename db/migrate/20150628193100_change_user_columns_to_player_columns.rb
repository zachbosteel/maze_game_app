class ChangeUserColumnsToPlayerColumns < ActiveRecord::Migration
  def change
    rename_column :used_games, :user_id, :player1_id
    rename_column :used_games, :usee_id, :player2_id
  end
end
