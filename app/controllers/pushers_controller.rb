class PushersController < ApplicationController

  protect_from_forgery :except => :auth # stop rails CSRF protection for this action

  def auth
    p current_player
    if current_player
      response = Pusher[params[:channel_name]].authenticate(params[:socket_id], {
        :user_id => current_player.id, # => required
        :user_info => { # => optional - for example
          :name => current_player.screen_name
        }
      })
      p response
      render :json => response
    else
      render :text => "Forbidden", :status => '403'
    end
  end

end
