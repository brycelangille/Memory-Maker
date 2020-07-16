class PostsController < ApplicationController
  before_action :authorize_request, only: [:create, :update, :destroy]
  def index
    # @user = User.find(params[:user_id])
    @posts = Post.all
    render json: @posts, include: [:user, {comments:{include: :user}}], status: :ok
  end

  def show
    @posts = Post.find(params[:id])
    render json: @posts, include: [:user, {comments:{include: :user}}], status: :ok
  end
  
  def create
    @post = Post.new(post_params)
    @post.user = @current_user
    if @post.save
    render json: @post, include: :user, status: :ok
    else 
      render json: @post.errors, status: :unprocessable_entity
    end
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
    render json: "Post Deleted"
  end
  
  private
  
  def post_params
    params.require(:post).permit(:captions, :image_url, :user_id)
  end

end
