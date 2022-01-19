class Api::SessionController < ApplicationController
    def new
        render :new
    end

    def create
        @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
        if @user 
            sign_in!(@user)
            redirect_to :show
        else
            flash[:errors] = ['Invalid username or password']
            render :new
        end
    end

    def destroy
        if signed_in? 
            sign_out!
        end
        redirect_to new_session_url
    end
end
