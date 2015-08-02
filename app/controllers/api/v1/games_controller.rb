class Api::V1::GamesController < ApplicationController
  
  def index
    @games = Game.all
  end

  def show
    @game = Game.find_by(id: params[:id]);
  end

  def create
    @game = Game.create
    gameinfo = params[:game]
    p params[:game]
    @used_game = UsedGame.create(player1_id: gameinfo["playerOne"]["id"], player2_id: gameinfo["playerTwo"]["id"], game_id: @game.id)
    response = Pusher['presence-lobby-channel'].trigger("game-started", {game: params[:game], game_id: @game.id})
    render :json => response
  end

  def submit_chat
    p params[:name]
    p params[:chat]
    response = Pusher['presence-lobby-channel'].trigger("chat_sent", {name: params[:name], chat: params[:chat]})
    render :json => response
  end

  def create_game_form
    response = Pusher['presence-lobby-channel'].trigger("game_created",{game: params[:game]})
    render :json => response
  end

  def delete_game_form
    response = Pusher['presence-lobby-channel'].trigger("game_deleted", {game: params[:game]})
    render :json => response
  end

  def join_game
    p params[:id]
    response = Pusher['presence-lobby-channel'].trigger("game_joined", {game: params[:game], id: params[:id]})
    render :json => response
  end

  def trigger_maze
    response = Pusher['presence-game-channel'].trigger("maze_generated", {closeOutSeed: params[:closeOutSeed], indexSeed: params[:indexSeed]})
    render :json => response
  end

  def trigger_end
    response = Pusher['presence-game-channel'].trigger("maze_won", {winnerId: params[:id]})
    render :json => response
  end

end
