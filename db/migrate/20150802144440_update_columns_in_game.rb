class UpdateColumnsInGame < ActiveRecord::Migration
  def change
    remove_column :games, :maze_map, :string
    add_column :games, :index_seed, :text
    add_column :games, :close_out_seed, :text
  end
end
