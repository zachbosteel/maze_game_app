Rails.application.routes.draw do
  devise_for :players
  root to: 'games#home'
  get   "/home"                  => 'games#home'
  get   "/games"             => 'games#index'
  post  "/games"             => 'games#create'
  get   "/games/:id"         => 'games#show'
  get   "games/:id/gameover" => 'games#edit'

  get "/profiles/:id" => 'profiles#show'

  namespace :api do
    namespace :v1 do
      get "/games" => 'games#index'
      post "/games" => 'games#create'
      get "games/:id" => 'games#show'
    end
  end

end
