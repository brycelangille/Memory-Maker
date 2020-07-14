class PostsController < ApplicationController
  def index
    @user = User.find(params[:user_id])
    @posts = post.where(user_id: @user.id)
    render json: @posts, include: :user, status: :ok
  end

  def show
    @posts = post.find(params[:id])
    render json: @posts, include: :user, status: :ok
  end
  
  def create
    @posts = Post.create(post_params)
    render json: @posts, include: :user, status: :ok
  end
  
  def update
    @posts = post.find(params[:id])
    @posts.update(post_params)
    render json: @post.errors, include: :user, status: :ok
  end
  
  def destroy
    @posts = Post.destroy
    render json: @posts, include: :user, status: :ok
  end
  
  private
  
  def post_params
    params.require(:post).permit(captions, :image_url)
  end

end
