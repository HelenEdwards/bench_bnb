class StaticPagesController < ApplicationController
  def root
    render json: "boo"
  end
end