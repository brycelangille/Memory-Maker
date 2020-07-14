class PostsController < ApplicationController
  def index
    @user = User.find(params[:user_id])
    @posts = Post.where(user_id: @user.id)
    render json: @posts, include: :user, status: :ok
  end

  def show
    @posts = Post.find(params[:id])
    render json: @posts, include: :user, status: :ok
  end
  
  def create
    @posts = Post.create(post_params)
    render json: @posts, include: :user, status: :ok
  end
  
  def update
    @post = Post.find(params[:id])
  if @post.update(post_params)
    render json: @post, include: :user, status: :ok
  else
    render json: @post.errors, status: :unprocessable_entity
  end
end
  
  def destroy
    @post = Post.find(params[:id])
    @post.destroy
  end
  
  private
  
  def post_params
    params.require(:post).permit(:captions, :image_url, :user_id)
  end

end
