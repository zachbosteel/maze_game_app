class Player < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  attr_accessor :login

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  has_many :used_games
  has_many :players, through: :used_games
  has_many :games, through: :used_games

  def login=(login)
    @login=login
  end

  def login
    @login || self.screen_name || self.email
  end
end
