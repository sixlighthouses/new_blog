class PagesController < ApplicationController
skip_before_action :verify_authenticity_token, raise: false
before_action :authenticate_devise_api_token!, only: [:restricted]
  def home
  end

  def restricted
    devise_api_token = current_devise_api_token
    if devise_api_token
      render json: { message: "Welcome to the restricted area #{devise_api_token.email}" }
    else
      render json: { message: "You are not authorized to access this page" }, status: :unauthorized
    end
  end
end
