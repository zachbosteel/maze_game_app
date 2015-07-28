class GamesController < ApplicationController

  def home
    Pusher['test_channel'].trigger('greet', {
      :greeting => "Hello there!"
      })
  end
  
  def index

  end

  def create

  end

  def show
    @id = params[:id]
  end

  def edit 

  end

  def destroy 

  end

end
