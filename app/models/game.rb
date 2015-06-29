class Game < ActiveRecord::Base
  has_many :used_games
  has_many :players, through: :used_games
  has_many :games, through: :used_games
end
