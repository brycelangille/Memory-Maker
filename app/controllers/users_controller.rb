class UsersController < ApplicationController
  # before_action :authorize_request, except: :create 
  def index
    @users = User.all
    render json: @users
  end

  def show
    @users = User.find(params[:id])
    render json: @users, include: :posts
  end

  def create
    @user = User.new(user_params)
    
    if @user.save
      @token = encode({id: @user.id})
      render json: {
        user: @user.attributes.except(:password_digest),
        token: @token
        }, status: :created
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  def update
    @current_user.update!(user_params)
    render json: @current_user
  end

  def destroy
    @current_user.destroy
  end

    def user_params
      params.require(:user).permit(:username, :email, :password, :image_url, :bio)
    end
  end