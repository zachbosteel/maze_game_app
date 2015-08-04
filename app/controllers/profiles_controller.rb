class ProfilesController < ApplicationController

  def show
    @player = Player.find_by(params[:id])
  end

end
