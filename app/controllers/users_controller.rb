class UsersController < ApplicationController
  # before_action :set_user, only: [:show, :edit, :update, :destroy]
  before_action :authorize_request, except: :create
  def index
    @users = User.all
    render json: @users, include: :posts, status: :ok
  end

  def show
    @users = User.find(params[:id])
    render json: @users, include: :posts, status: :ok
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
    @users = User.find(params[:id])
    @users.update(user_params)
    render json: @users, include: :posts, status: :ok
  end

  def destroy
    @users = User.destroy
    render json: @users, include: :posts, status: :ok
  end

    def user_params
      params.require(:user).permit(:username, :email, :password)
    end
  end
