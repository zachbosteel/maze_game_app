class Api::V1::GamesController < ApplicationController
  
  def index
    @games = Game.all
  end

  def show
    @game = Game.find_by(id: params[:id]);
  end

  def create
    @game = Game.new
  end

end
