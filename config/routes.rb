Rails.application.routes.draw do
  devise_for :players
  get   "/"                  => 'games#home' 
  get   "/home"              => 'games#home'
  get   "/games"             => 'games#index'
  post  "/games"             => 'games#create'
  get   "/games/:id"         => 'games#show'
  get   "games/:id/gameover" => 'games#edit'

  get "/profiles/:id" => 'profiles#show'

  post "/pushers/auth" => 'pushers#auth'

  namespace :api do
    namespace :v1 do
      get "/games" => 'games#index'
      post "/games" => 'games#create'
      get "/games/:id" => 'games#show'
      post "submit_chat" => 'games#submit_chat'
      post "create_game_form" => 'games#create_game_form'
      post "delete_game_form" => 'games#delete_game_form'
      post "join_game" => 'games#join_game'
      post "start_game" => 'games#create'
      post "trigger_maze" => 'games#trigger_maze'
    end
  end

end
